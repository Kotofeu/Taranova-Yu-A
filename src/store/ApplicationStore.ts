import { makeAutoObservable } from 'mobx';
import { ITextBlockItem } from '../components/TextBlock/TextBlock';

import defaultImage from '../assets/images/profile-picture.jpg'
import defaultOrg from '../assets/icons/default_org.svg'

import { $host, IBaseInerface } from '.';

interface ILink {
    title: string;
    link: string;
}

export interface IGeneralData {
    generalData: IData;
    serverTime: Date;
}

export interface IData extends IBaseInerface {
    phone?: string;
    email?: string;
    image?: string;
    slogan?: string;
    organizations?: ICard[];
    biography?: IBiography[];
    awards?: ICard[];
}

export interface ICard  extends IBaseInerface{
    name: string;
    image: string;
}

export interface IBiography  extends IBaseInerface{
    title: string;
    text: string;
}

export class ApplicationStore {
    private _defaulData: IGeneralData  = {
        serverTime: new Date(),
        generalData: {
            slogan: "XXXXXX XXXXXXXXXXXX XXXXXX XXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
            email: 'xxxxxxxxx@xxxxx.xx',
            phone: '+7 (xxx) xxx-xx-xx',
            image: defaultImage,
        }
    }
    private _generalData: IGeneralData | null = this._defaulData

    private _aboutText: ITextBlockItem[] = [
        {
            title: 'Дата и место рождения',
            text: '20 июня 1968 г., г. Калининград'
        },
        {
            title: 'Образование',
            text: `Высшее 
             Калининградский государственный технический университет, специальность «Автоматизированные системы управления» (1990 г.) 
             Калининградская высшая школа управления,специальность «Менеджмент» (2008 г.).`
        },
        {
            title: 'Адрес приемной',
            text: 'г. Калининград, ул.Рокоссовского 16-18 (отдельный вход) Академия гениев'
        },
    ]

    private _headerLinks: ILink[] = [
        { title: "Главная", link: "/" },
        { title: "Публикации", link: "/blog" },
        { title: "Мероприятия", link: "/event" }
    ]

    private _isLoading: boolean = true
    private _error: string | null = null
    get isLoading() {
        return this._isLoading
    }
    get error() {
        return this._error
    }
    get generalData() {
        return this._generalData
    }
    get organizations() {
        return this.generalData?.generalData?.organizations
    }
    get slogan() {
        return this.generalData?.generalData?.slogan
    }
    get aboutText() {
        return this._aboutText
    }
    get awards() {
        return this._generalData?.generalData?.awards
    }
    get biography() {
        return this._generalData?.generalData?.biography
    }
    get headerLinks() {
        return this._headerLinks
    }
    get email() {
        return this._generalData?.generalData?.email
    }
    get phone() {
        return this._generalData?.generalData?.phone
    }
    get image(){
        return this._generalData?.generalData.image
    }
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    private setIsLoading(loading: boolean) {
        this._isLoading = loading
    }
    private setError(errorString: string) {
        this._error = errorString
    }

    private setGeneralData(data: IGeneralData) {
        this._generalData = data
    }
    
    loadGeneralData = async () => {
        this.setIsLoading(true)
        await $host.get('/getGeneralData')
            .then(data => this.setGeneralData(data.data))
            .catch(error => this.setError(error))
            .finally(() => this.setIsLoading(false))
    }

}
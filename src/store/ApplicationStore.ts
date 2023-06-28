import { makeAutoObservable } from 'mobx';

import defaultImage from '../assets/images/profile-picture.jpg'

import { $host, IBaseInerface } from '.';
import { BLOG_ROUTE, EVENT_ROUTE, HOME_ROUTE } from '../utils/const/routes';
import { AxiosError } from 'axios';

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
    biography?: ITextBlock[];
    awards?: ICard[];
    basicInfo?: ITextBlock[];
}

export interface ICard  extends IBaseInerface{
    id: number;
    name: string;
    image: string;
}

export interface ITextBlock  extends IBaseInerface{
    id: number;
    title: string;
    text: string;
}

export class ApplicationStore {
    private _defaultText = {
        title: 'XXXXXXXXXXXX XXXXXXX',
        text: 'XXXXXXXXXXX XXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXXXXX XXXX XXXXXXX XXXXXXX'
    }
    private _defaulData: IGeneralData  = {
        serverTime: new Date(),
        generalData: {
            slogan: "XXXXXX XXXXXXXXXXXX XXXXXX XXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
            email: 'xxxxxxxxx@xxxxx.xx',
            phone: '+7 (xxx) xxx-xx-xx',
            image: defaultImage,
            basicInfo: [{id: 1, ...this._defaultText}, {id: 2, ...this._defaultText}, {id: 2, ...this._defaultText}]
        }
    }
    private _generalData: IGeneralData | null = this._defaulData

    private _headerLinks: ILink[] = [
        { title: "Главная", link: HOME_ROUTE },
        { title: "Публикации", link: BLOG_ROUTE },
        { title: "Мероприятия", link: EVENT_ROUTE }
    ]

    private _isLoading: boolean = true
    private _error: AxiosError | null = null
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
    get basicInfo() {
        return this.generalData?.generalData?.basicInfo
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
    private setError(errorString: AxiosError) {
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
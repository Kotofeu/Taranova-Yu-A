import { makeAutoObservable } from 'mobx';


import { ICard } from '../components/Card/Card';
import { ITextBlockItem } from '../components/TextBlock/TextBlock';

import ASEofKImage from '../assets/icons/Associations of Social Entrepreneurs of the Kaliningrad region.png'
import CBRImage from '../assets/icons/CBR.png'
import geniusesAcademy from '../assets/icons/academy_of_geniuses.png'
import RFPEImage from '../assets/icons/Russian-Federation-of-Private-Education.png'

import connection from '../assets/icons/connection.svg'
import amberMercury from '../assets/icons/Amber-Mercury.svg'
import futer from '../assets/icons/future.svg'
import together from '../assets/icons/together.svg'

interface ILink {
    title: string;
    link: string;
}

export class ApplicationStore {
    private _includedIn: ICard[] = [
        {
            cardImage: geniusesAcademy,
            title: 'Основатель и директор ООО «Академия гениев. Калининград»',
        },
        {
            cardImage: CBRImage,
            title: 'Основатель и организатор Инженерно-технического инклюзивного Фестиваля «Цифровое Будущее России»',
        },
        {
            cardImage: RFPEImage,
            title: 'Член правления Российской Федерации Частного Образования',
        },
        {
            cardImage: ASEofKImage,
            title: 'Президент Ассоциации Социальных Предпринимателей Калининградской области',
        }
    ]

    private _slogan: string = 'Лозунг Lorem ipsum dolor sit, amet consectetur adipisicing elit'
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
    private _achievements: ICard[] = [
        {
            cardImage: connection,
            title: 'Областного конкурса «Сопричастность»',

        },
        {
            cardImage: amberMercury,
            title: 'Всероссийского конкурса «Лучший социальный проект в образовании»',
        },
        {
            cardImage: futer,
            title: 'Всероссийского конкурса фонда Наше Будущее «Лучший социальный проект»',
        },
        {
            cardImage: together,
            title: 'Бизнес-премии «Янтарный Меркурий»',
        }
    ]

    private _bio: string = `          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit sit possimus velit, nobis ut! Officia totam repudiandae neque nihil ipsa alias voluptatibus, eveniet, magni, fugiat odit a ducimus beatae?
      Voluptatibus quia fuga iusto eveniet corporis nisi tempore velit, corrupti vel modi ut, laboriosam quaerat nostrum nihil consectetur hic fugiat maxime rerum repellendus tempora ipsum aspernatur ea voluptatum? Aliquam, placeat!
      Eum minima accusantium harum, et tempore quae veritatis doloremque aut fugit doloribus, sunt vel asperiores veniam assumenda mollitia voluptatum molestiae laudantium obcaecati dolorem. Quam vel quaerat dolorum inventore, quasi error!
      Ut animi sit quos natus mollitia? Corporis aliquid optio aliquam? Dolore veniam reprehenderit iusto. Eos repudiandae mollitia dolorum? Provident sunt quos nobis blanditiis repellat nisi dicta quod. Iusto, dolorem deleniti.
      Dolorum doloribus soluta, nemo minima esse dicta reiciendis fugit, nihil sunt architecto ratione aliquid ipsa ullam itaque minus perferendis nobis. In aliquid sit error dolorem animi, recusandae nisi similique odit.
      Itaque officia alias soluta, incidunt, libero voluptas consectetur nemo architecto quisquam porro fuga fugiat eos accusamus non quam assumenda nulla dolorem atque earum aliquid. Deserunt, omnis quo. Nulla, ducimus quisquam.`


    private _headerLinks: ILink[] = [
        { title: "Главная", link: "/" },
        { title: "Публикации", link: "/blog" },
        { title: "Мероприятия", link: "/event" }
    ]
    private _email: string = 'taranova@zaksob39.ru'
    private _tel: string = '+79114968216'

    get includedIn() {
        return this._includedIn
    }
    get slogan() {
        return this._slogan
    }
    get aboutText() {
        return this._aboutText
    }
    get achievements() {
        return this._achievements
    }
    get bio() {
        return this._bio
    }
    get headerLinks() {
        return this._headerLinks
    }
    get email() {
        return this._email
    }
    get tel() {
        return this._tel
    }

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

}
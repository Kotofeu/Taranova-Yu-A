import { ICard } from "../components/Card"
import { ITextBlockItem } from "../components/TextBlock"
import ASEofKImage from '../assets/icons/Associations of Social Entrepreneurs of the Kaliningrad region.png'
import CBRImage from '../assets/icons/CBR.png'
import geniusesAcademy from '../assets/icons/academy_of_geniuses.png'
import RFPEImage from '../assets/icons/Russian Federation of Private Education.ico'


import connection from '../assets/icons/connection.svg'
import amberMercury from '../assets/icons/Amber Mercury.jpg'
import futer from '../assets/icons/future.svg'
import together from '../assets/icons/together.svg'

export const achievements: ICard[] = [
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
export const includedIn: ICard[] = [
    {
        cardImage: CBRImage,
        title: 'Основатель и директор',
        desc: 'ООО «Академия гениев. Калининград»',
    },
    {
        cardImage: geniusesAcademy,
        title: 'Основатель и организатор',
        desc: 'Инженерно-технического инклюзивного Фестиваля «Цифровое Будущее России»',
    },
    {
        cardImage: RFPEImage,
        title: 'Член правления',
        desc: 'Российской Федерации Частного Образования',
    },
    {
        cardImage: ASEofKImage,
        title: 'Президент',
        desc: 'Ассоциации Социальных Предпринимателей Калининградской области',
    }
]
export const text: ITextBlockItem[] = [
    {
        title: 'Дата и место рождения',
        text: '20 июня 1968 г., г. Калининград'
    },
    {
        title: 'Образование',
        text: 'Высшее <br/> Калининградский государственный технический университет, специальность «Автоматизированные системы управления» (1990 г.) <br/> Калининградская высшая школа управления,специальность «Менеджмент» (2008 г.).'
    },
    {
        title: 'Адрес приемной',
        text: 'г. Калининград, ул.Рокоссовского 16-18 (отдельный вход) Академия гениев'
    },
]

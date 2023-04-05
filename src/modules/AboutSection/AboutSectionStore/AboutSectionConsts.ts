import { ICard } from "../../../components/Card/Card";
import ASEofKImage from '../../../assets/icons/Associations of Social Entrepreneurs of the Kaliningrad region.png'
import CBRImage from '../../../assets/icons/CBR.png'
import geniusesAcademy from '../../../assets/icons/academy_of_geniuses.png'
import RFPEImage from '../../../assets/icons/Russian-Federation-of-Private-Education.png'
import { ITextBlockItem } from "../../../components/TextBlock/TextBlock";

export const includedIn: ICard[] = [
    {
        cardImage: geniusesAcademy ,
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

export const slogan: string = 'Лозунг Lorem ipsum dolor sit, amet consectetur adipisicing elit'
export const aboutText: ITextBlockItem[] = [
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

import { memo } from 'react'
import { MShortBlogCard } from '../ShortBlogCard/ShortBlogCard'
import Section from '../../../../components/Section/Section'
import { MotionLeft, MotionRight } from '../../../../const/animation'
import classes from './ShortBlogSection.module.scss'

export const ShortBlogSection = memo(() => {

  return (
    <Section className={classes.shortBlog} title='Последние публикации'>
      <div
        className={classes.inner}
      >

        <MShortBlogCard
          className={classes.blog}
          index={1}
          title='Успейте поймать свой «Импульс добра»!

        Сегодня мы начинаем приём заявок на Всероссийскую Премию «Импульс добра».
        
        Фонд «Наше будущее» награждает премией предпринимателей и организации за вклад в развитие и продвижение социального предпринимательства.
        
        Проекты будут рассматриваться в 6 номинациях:
        
        «Лучший социальный предприниматель России».
        «Открытие года».
        «Амбассадор социального предпринимательства: Инфлюенсер».
        «Амбассадор социального предпринимательства: Компания-лидер».
        «Амбассадор социального предпринимательства: СМИ».
        «Амбассадор социального предпринимательства: Представитель государственной власти».
        
        Призовой фонд – до 3.750.000 рублей.
        
        Завершится Премия масштабным фестивалем.
        P.S. Поделитесь «Импульсом добра» с друзьями!
        
        Ждём ваши заявки до 14 апреля:
        '
          date={Date.now()}
          pictureSrc={"https://sun9-49.userapi.com/impg/DVD7uDs2W9lePGAmJ_AOIInRYa7inN315dRrcw/a3MErAo2RoI.jpg?size=1080x1080&quality=96&sign=470c4a747687c39cb2f01cd13b63845a&type=album"}
          variants={MotionRight}
        />
        <MShortBlogCard
          className={classes.blog}
          index={2}
          title='Поздравляю с праздником ВСЕХ женщин! 🌹
        И конечно, женщин нашего прекрасного 6 округа !
        🥰🌹🌹🌹🌹🌹
        
        Пусть хорошее настроение и любовь дают силы для новых свершений! 🌹'
        date={Date.now()}

          pictureSrc={"https://sun9-18.userapi.com/impg/-FBhgAtRoQmwMaKuFL4iP_h9WmHccrtMzQubWw/4PWRp43ZUmA.jpg?size=1200x1600&quality=95&sign=91269a878e22c323abbe341ca9b1835a&type=album"}
          variants={MotionLeft}
        />
      </div>
    </Section>

  )
})

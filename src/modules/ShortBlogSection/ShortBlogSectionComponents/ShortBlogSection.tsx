import {memo} from 'react'
import { MBlogCard } from '../../../components/BlogCard/BlogCard'
import Section from '../../../components/Section/Section'
import { MotionLeft, MotionRight } from '../../../const/animation'
import blog1 from '../../../assets/images/1.png'
import blog2 from '../../../assets/images/2.png'
import classes from './ShortBlogSection.module.scss'

export const ShortBlogSection = memo(() => {
  return (
    <Section className={classes.shortBlog} title='Последние публикации'>
    <div
      className={classes.inner}
    >

      <MBlogCard
        className={classes.blog}
        title='Блог1'
        time='17:30'
        date='1 сентября 2022'
        pictureSrc={blog1}
        variants={MotionRight}
      />
      <MBlogCard
        className={classes.blog}
        title='Сегодня на Балтик Плюс говорили про год педагога, наставника.
        Обсудили повышение престижа профессии педагога.
        Дефицит преподавателей в регионе.
        Варианты поддержки молодых педагогов. Действующие программы поддержки учителей в регионе. В том числе в сельской местности.
        Среднее профессиональное образование.
        Дополнительное образование.
        Сертификаты ПФДО.
        
        И после эфира еще долго говорили о построении СИСТЕМЫ подготовки кадров в нашем уникальном регионе, в каком возрасте правильнее начинать/помогать выбирать профессии и нужно ли управлять выбором. И, главное, как закрыть потребность наших предприятий в специалистах.'
        time='19:30'
        date='3 сентября 2022'
        pictureSrc={blog2}
        variants={MotionLeft}
      />
    </div>
  </Section>

  )
})

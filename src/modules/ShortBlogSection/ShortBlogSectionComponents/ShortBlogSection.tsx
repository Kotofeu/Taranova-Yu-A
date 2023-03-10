import {memo} from 'react'
import { MBlogCard } from '../../../components/BlogCard'
import Section from '../../../components/Section'
import { MotionLeft, MotionRight } from '../../../const/animation'
import blog1 from '../../../assets/images/1.png'
import blog2 from '../../../assets/images/2.png'
import './ShortBlogSection.scss'

export const ShortBlogSection = memo(() => {
  return (
    <Section className='short-blog' title='Последние публикации'>
    <div
      className='short-blog__inner'
    >

      <MBlogCard
        className='short-blog__blog'
        title='Блог1'
        time='17:30'
        date='1 сентября 2022'
        pictureSrc={blog1}
        variants={MotionRight}
      />
      <MBlogCard
        className='short-blog__blog'
        title='Блог2'
        time='19:30'
        date='3 сентября 2022'
        pictureSrc={blog2}
        variants={MotionLeft}
        viewport={{ once: true, amount: 1 }}
      />
    </div>
  </Section>

  )
})

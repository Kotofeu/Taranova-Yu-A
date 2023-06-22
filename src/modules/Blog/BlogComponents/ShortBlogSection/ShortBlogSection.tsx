import { memo } from 'react'
import { MShortBlogCard } from '../ShortBlogCard/ShortBlogCard'
import Section from '../../../../components/Section/Section'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../../../const/animation'
import { observer } from 'mobx-react-lite'
import Loader from '../../../../components/Loader/Loader'
import classes from './ShortBlogSection.module.scss'
import { blogStore } from '../../../../store'

export const ShortBlogSection = memo(observer(() => {
  if (blogStore.error) {
    return null
  }
  
  return (
    <Section className={classes.shortBlog} title='Последние публикации'>
      <div
        className={classes.inner}
      >
        {blogStore.isLoading && <Loader />}

        {blogStore.blogs?.items.map((blog, index) => {
          if (index >= 3) return null
          return (
            <MShortBlogCard
              className={classes.blog}
              key={blog.id}
              blog={blog}
              initial={ANIMATION_HIDDEN}
              whileInView={ANIMATION_VISIBLE}
              viewport={{ once: true, margin: "-140px" }}
              variants={MotionUp}
              custom={index}
            />)
        })}
      </div>
    </Section>

  )
}))

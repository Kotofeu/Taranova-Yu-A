import { memo } from 'react'
import { MShortBlogCard } from '../ShortBlogCard/ShortBlogCard'
import Section from '../../../../components/Section/Section'
import { MotionChildUp, MotionParent } from '../../../../const/animation'
import classes from './ShortBlogSection.module.scss'
import { observer } from 'mobx-react-lite'
import BlogsStore from '../../../../store/BlogsStore'
import BlogCard from '../BlogCard/BlogCard'

export const ShortBlogSection = memo(observer(() => {

  return (
    <Section className={classes.shortBlog} title='Последние публикации' sectionAnimation={MotionParent}>
      <div
        className={classes.inner}
      >
        {BlogsStore.blogs?.items.map((blog, index) => {
          if (index >= 3) return null
          return (
            <MShortBlogCard
              className={classes.blog}
              key={blog.id}
              blog = {blog}
              variants = {MotionChildUp}
            />)
        })}
      </div>
    </Section>

  )
}))

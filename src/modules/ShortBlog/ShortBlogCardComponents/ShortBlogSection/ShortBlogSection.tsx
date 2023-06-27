import { MShortBlogCard } from '../ShortBlogCard/ShortBlogCard'
import Section from '../../../../components/Section/Section'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../../../utils/const/animation'
import { observer } from 'mobx-react-lite'
import Loader from '../../../../components/Loader/Loader'
import classes from './ShortBlogSection.module.scss'
import { blogStore } from '../../../../store'

export const ShortBlogSection = observer(() => {
  if (blogStore.error) {
    console.log(blogStore.error.message)
    return null
  }
  if (!blogStore.isLoading && !blogStore.blogs?.publications?.length) return null
  return (
    <Section className={classes.shortBlog} title='Последние публикации'>
      <div
        className={classes.shortBlog_inner}
      >
        {blogStore.isLoading && <Loader />}

        { blogStore.blogs?.publications.map((blog, index) => {
              if (index >= 3) return null
              return (
                <MShortBlogCard
                  className={classes.shortBlog_blog}
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
})
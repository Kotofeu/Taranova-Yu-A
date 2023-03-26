import { memo } from 'react'
import BlogCard from '../BlogListSectionBlog/BlogCard'
import Section, { SectionType } from '../../../../components/Section/Section'
import classes from './BlogListSection.module.scss'
import BlogsStore from '../../../../store/BlogsStore'
import { observer } from 'mobx-react-lite'

export const BlogListSection = memo(observer(() => {
    return (
        <Section className={classes.blogs} title='Публикации'
            sectionType={SectionType.fullSize}>
            <div className={classes.list}>
                {BlogsStore._blogs?.items.map(blog => {
                    return (<BlogCard
                        className={classes.blog}
                        blog = {blog}
                        key = {blog.id}
                    />)
                }
                )}

            </div>

        </Section>
    )
}))

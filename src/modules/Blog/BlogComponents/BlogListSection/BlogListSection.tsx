import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import BlogCard from '../BlogCard/BlogCard'
import Section, { SectionType } from '../../../../components/Section/Section'
import Loader from '../../../../components/Loader/Loader'
import Error404 from '../../../../components/Error404/Error404'

import classes from './BlogListSection.module.scss'
import { blogStore } from '../../../../store'

export const BlogListSection = memo(observer(() => {

    if (blogStore.error) {
        return <Error404 errorText={blogStore.error} />
    }
    return (
        <Section className={classes.blogs} title='Публикации'
            sectionType={SectionType.fullSize}>
            <div className={classes.list}>
                {blogStore.isLoading &&
                    <div className={classes.loader}>
                        <Loader />
                    </div>
                }
                {blogStore.blogs?.publications.map(blog => {
                    return (<BlogCard
                        className={classes.blog}
                        blog={blog}
                        key={blog.id}
                    />)
                }
                )}

            </div>

        </Section>
    )
}))

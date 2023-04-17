import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import BlogCard from '../BlogCard/BlogCard'
import Section, { SectionType } from '../../../../components/Section/Section'
import BlogsStore from '../../../../store/BlogsStore'
import Loader from '../../../../components/Loader/Loader'
import Error404 from '../../../../components/Error404/Error404'

import classes from './BlogListSection.module.scss'

export const BlogListSection = memo(observer(() => {

    if (BlogsStore.error) {
        return <Error404 errorText={BlogsStore.error} />
    }
    return (
        <Section className={classes.blogs} title='Публикации'
            sectionType={SectionType.fullSize}>
            <div className={classes.list}>
                {BlogsStore.isLoading &&
                    <div className={classes.loader}>
                        <Loader />
                    </div>
                }
                {BlogsStore.blogs?.items.map(blog => {
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

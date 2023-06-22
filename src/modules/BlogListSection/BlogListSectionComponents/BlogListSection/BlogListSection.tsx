import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import Section, { SectionType } from '../../../../components/Section/Section'
import Loader from '../../../../components/Loader/Loader'
import Error404 from '../../../../components/Error404/Error404'

import classes from './BlogListSection.module.scss'
import { blogStore } from '../../../../store'
import Title, { TitleType } from '../../../../UI/Title/Title'
import { BlogCard } from '../../../../components/BlogCard'

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
                {
                    !blogStore.isLoading && !blogStore.blogs?.publications?.length
                        ? <Title className={classes.blogs_empty} titleType={[TitleType.posCetner]}>Публикации отсутствуют</Title>
                        : null
                }
                {
                    blogStore.blogs?.publications?.length
                        ?
                        blogStore.blogs?.publications.map(blog => {
                            return (<BlogCard
                                className={classes.blog}
                                blog={blog}
                                key={blog.id}
                            />)
                        })
                        : null
                }
            </div>

        </Section>
    )
}))

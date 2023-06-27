import { observer } from 'mobx-react-lite'

import Section, { SectionType } from '../../../../components/Section/Section'
import Loader from '../../../../components/Loader/Loader'
import Error from '../../../../components/Error/Error'

import classes from './BlogListSection.module.scss'
import { blogStore } from '../../../../store'
import Title, { TitleType } from '../../../../UI/Title/Title'
import { BlogCard } from '../../../../components/BlogCard'

export const BlogListSection = observer(() => {

    if (blogStore.error) {
        console.log(blogStore.error)
        return (
            <Error
                errorText={blogStore.error.message}
            />
        )
    }
    return (
        <Section className={classes.blogList} title='Публикации'
            sectionType={SectionType.firstSection}>
            <div className={classes.blogList_list}>
                {blogStore.isLoading &&
                    <div className={classes.blogList_loader}>
                        <Loader />
                    </div>
                }
                {
                    !blogStore.isLoading && !blogStore.blogs?.publications?.length
                        ? <Title className={classes.blogList_empty} titleType={[TitleType.posCetner]}>Публикации отсутствуют</Title>
                        : null
                }
                {
                    blogStore.blogs?.publications?.length
                        ?
                        blogStore.blogs?.publications.map(blog => {
                            return (<BlogCard
                                className={classes.blogList_blog}
                                blog={blog}
                                key={blog.id}
                            />)
                        })
                        : null
                }
            </div>

        </Section>
    )
})
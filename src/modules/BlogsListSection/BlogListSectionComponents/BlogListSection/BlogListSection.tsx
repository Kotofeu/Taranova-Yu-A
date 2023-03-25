import { memo } from 'react'
import BlogCard from '../BlogListSectionBlog/BlogCard'
import Section, { SectionType } from '../../../../components/Section/Section'
import classes from './BlogListSection.module.scss'
import BlogsStore from '../../../../store/BlogsStore'
import { observer } from 'mobx-react-lite'
/* <header>
                    <input type="text" placeholder='Поиск' />
                    <select id="selectID">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>

                    </select>
                </header> */

export const BlogListSection = memo(observer(() => {
    return (
        <Section className={classes.blogs} title='Публикации'
            sectionType={SectionType.fullSize}>
            <div className={classes.list}>
                {BlogsStore._blogs.items.map((item) => {
                    const photoSrc = item.attachments[0]?.photo?.sizes.find(item => item.type === 'y')?.url
                    const videoSrc = item.attachments[0]?.video?.first_frame.reduce((acc, item) => acc.height > item.height ? acc : item).url
                    const imageSrc = photoSrc ? photoSrc : videoSrc
                    if (!imageSrc) return null
                    return (<BlogCard
                        className={classes.blog}
                        repost={item.reposts.count}
                        likes={item.likes.count}
                        dateTime={item.date}
                        key={item.id}
                        desc={item.text}
                        imageSrc={imageSrc}
                    />)
                }
                )}
            
            </div>

        </Section>
    )
}))

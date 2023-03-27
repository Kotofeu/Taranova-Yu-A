import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion'
import Section, { SectionType } from '../../../../components/Section/Section';
import { MotionChildUp, MotionParent } from '../../../../const/animation';
import BlogsStore from '../../../../store/BlogsStore';
import Picture from '../../../../UI/Picture'
import BlogText from '../BlogText/BlogText';
import classes from './IdBlogSection.module.scss'
export const IdBlogSection = observer(() => {
    const params = useParams();
    if (!params.id) {
        return <h1>Ошибка</h1>
    }
    const blog = BlogsStore.getSelectedBlog(+params.id)
    if (!blog) {
        return <h1>Ошибка</h1>
    }
    return (
        <Section className={classes.blog} sectionAnimation={MotionParent} sectionType = {SectionType.fullSize}>

            <Picture src={BlogsStore.getItemImage(blog.attachments[0], 1080)}></Picture>
            <BlogText text={blog.text} animationType = {MotionChildUp}></BlogText>
            {blog.attachments.map((image, index) => {
                if (index === 0) return null
                if (image.type === 'photo') {
                    return (

                        <Picture src={BlogsStore.getItemImage(blog.attachments[index], 1080)}></Picture>

                    )
                }
                if (image.type === 'video') {
                    return (
                        <a href={`https://vk.com/video${BlogsStore.ownerId}_${image.video?.id}`}> <Picture src={image.video?.first_frame[0].url} /> </a>

                    )
                }
            })}

        </Section>
    )
})

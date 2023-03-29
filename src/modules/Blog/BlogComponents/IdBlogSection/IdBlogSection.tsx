import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import Section, { SectionType } from '../../../../components/Section/Section';
import { MotionChildRight, MotionParent } from '../../../../const/animation';
import BlogsStore from '../../../../store/BlogsStore';
import BlogText from '../BlogText/BlogText';
import DateTime from '../../../../UI/DateTime/DateTime';
import Error404 from '../../../../components/Error404/Error404';
import BlogImageGrid from '../BlogImageGrid/BlogImageGrid';
import classes from './IdBlogSection.module.scss'

export const IdBlogSection = observer(() => {
    const params = useParams();
    if (!params.id) return null
    BlogsStore.findSelectedBlog(+params.id)
    const blog = BlogsStore.selectedBlog
    if (!blog) {
        return (
            <Error404
                errorText='Страница не найдена'
                routTo='/blog'
                buttonText='Вернуться к публикациям'
            />
        )
    }


    return (
        <Section
            className={classes.blog}
            sectionAnimation={MotionParent}
            sectionType={SectionType.fullSize}
        >
            <DateTime className={classes.dateTime} date={blog.date} />
            <BlogText text={blog.text} animationType={MotionChildRight} />
            <BlogImageGrid blog={blog} />
        </Section >
    )
})

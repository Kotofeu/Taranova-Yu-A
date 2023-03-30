import { observer } from 'mobx-react-lite';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

import Section, { SectionType } from '../../../../components/Section/Section';
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildLeft, MotionLeft, MotionParent } from '../../../../const/animation';
import BlogsStore from '../../../../store/BlogsStore';
import BlogText from '../BlogText/BlogText';
import { MDateTime } from '../../../../UI/DateTime/DateTime';
import Error404 from '../../../../components/Error404/Error404';
import BlogImageGrid from '../BlogImageGrid/BlogImageGrid';
import Button, { MButton } from '../../../../UI/Button/Button';

import stepOverImage from '../../../../assets/icons/step over.svg'
import VKImage from '../../../../assets/icons/VK.svg'
import arrorImage from '../../../../assets/icons/arror.svg'

import classes from './IdBlogSection.module.scss'
import Loader from '../../../../components/Loader/Loader';
import BlogRating from '../BlogRating/BlogRating';

export const IdBlogSection = observer(() => {
    const params = useParams();
    const navigate = useNavigate()
    if (!params.id) return null
    const onVKButtonClick = () => {
        return `https://vk.com/taranova.yulia?w=wall${BlogsStore.ownerId}_${blog?.id}`
    }
    BlogsStore.findSelectedBlog(+params.id)
    const blog = BlogsStore.selectedBlog
    if (BlogsStore.isLoading) {
        return (
            <Section sectionType={SectionType.fullSize} >
                <Loader />
            </Section>
        )
    }
    if (!blog || BlogsStore.error) {
        return (
            <Error404
                errorText='Публикация не найдена'
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
            <header className={classes.header}>
                <div
                    className={classes.buttons}
                >
                    <MButton
                        className={classes.backButton}
                        onClick={() => navigate(-1)}
                        afterImg={arrorImage}
                        beforeImg={arrorImage}
                        variants={MotionChildLeft}
                    >
                        Назад
                    </MButton>
                    <motion.a
                        href={onVKButtonClick()}
                        target="_blank"
                        rel="noreferrer"
                        variants={MotionChildLeft}
                    >
                        <Button beforeImg={VKImage} afterImg={stepOverImage}>
                            Перейти в VK
                        </Button>
                    </motion.a>
                </div>
                <MDateTime
                    className={classes.dateTime}
                    date={blog.date}
                    variants={MotionChildLeft}
                />
            </header>

            <div className={blog.attachments.length < 2 ? classes.blogInner : null}>
                <div className={classes.text}>
                    <BlogText text={blog.text} animationType={MotionChildLeft} />
                </div>
                <BlogImageGrid className={classes.grid} blog={blog} />
            </div>

        </Section >
    )
})
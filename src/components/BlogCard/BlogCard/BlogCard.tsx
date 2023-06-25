import { FC, memo } from 'react'
import { motion } from 'framer-motion'

import readMore1 from '../../../assets/icons/read__more_1.svg'
import readMore2 from '../../../assets/icons/read__more_2.svg'
import stepOverImage from '../../../assets/icons/step over.svg'
import VKImage from '../../../assets/icons/VK.svg'

import { Item } from '../../../store/BlogsStore'
import { blogStore } from '../../../store'
import {
    ANIMATION_HIDDEN,
    ANIMATION_VISIBLE,
    MotionChildLeft,
    MotionChildUp,
    MotionParent
} from '../../../utils/const/animation'
import Picture from '../../../UI/Picture'
import { MDateTime } from '../../../UI/DateTime/DateTime'
import Button from '../../../UI/Button/Button'
import { BlogRating } from '../'
import { BlogText } from '../'
import classes from './BlogCard.module.scss'


interface IBlogCard {
    blog: Item;
    className?: string;
}
export const BlogCard: FC<IBlogCard> = memo((props) => {
    const { blog, className = '' } = props
    const onVKButtonClick = () => {
        return `https://vk.com/taranova.yulia?w=wall${blogStore.ownerId}_${blog.id}`
    }
    const imageSrc = blogStore.getItemImage(blog.attachments[0], 480);
    if (!imageSrc) return null
    return (
        <motion.article
            className={`${classes.blogCard} ${className}`}
            initial={ANIMATION_HIDDEN}
            whileInView={ANIMATION_VISIBLE}
            viewport={{ once: true, amount: .5 }}
            variants={MotionParent}
        >
            <div className={classes.blogCard_inner}>
                <div className={classes.blogCard_content}>
                    <div className={classes.blogCard_leftPart}>
                        <motion.div className={classes.blogCard_imageBox} variants={MotionChildUp}>
                            <Picture className={classes.blogCard_image} src={imageSrc} alt={blog.text} />
                            <BlogRating blog={blog} className={classes.blogCard_blogScore} />
                        </motion.div>

                    </div>
                    <div className={classes.blogCard_rightPart}>
                        <MDateTime
                            className={classes.blogCard_dateTime}
                            date={blog.date}
                            variants={MotionChildLeft}
                        />
                        <BlogText
                            className={classes.blogCard_text}
                            text={blog.text}
                            animationType={MotionChildLeft}
                            textRowCount={6}
                        />
                    </div>
                </div>
                <motion.div
                    className={classes.blogCard_buttons}
                    variants={MotionChildLeft}
                >
                    <a href={onVKButtonClick()} target="_blank" rel="noreferrer">
                        <Button
                            className={classes.blogCard_button}
                            beforeImg={VKImage}
                            afterImg={stepOverImage}
                        >
                            Перейти в VK
                        </Button>
                    </a>
                    <Button
                        className={classes.blogCard_button}
                        beforeImg={readMore1}
                        afterImg={readMore2}
                        routeOption={`/blog/${blog.id}`}
                    >
                        Подробнее
                    </Button>

                </motion.div>
            </div>
        </motion.article>
    )
})

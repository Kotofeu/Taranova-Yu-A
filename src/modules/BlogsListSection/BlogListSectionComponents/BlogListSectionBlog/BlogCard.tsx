import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionParent, MotionChildRight, MotionChildUp } from '../../../../const/animation'
import Button from '../../../../UI/Button/Button'
import DateTime from '../../../../UI/DateTime/DateTime'
import Picture from '../../../../UI/Picture'
import readMore1 from '../../../../assets/icons/read__more_1.svg'
import readMore2 from '../../../../assets/icons/read__more_2.svg'
import stepOverImage from '../../../../assets/icons/step over.svg'
import VKImage from '../../../../assets/icons/VK.svg'
import classes from './BlogCard.module.scss'
import BlogsStore, { Item } from '../../../../store/BlogsStore'
import BlogText from '../BlogText/BlogText'

interface IBlogCard {
    blog: Item,
    className?: string
}
const BlogCard: FC<IBlogCard> = memo((props) => {
    const { blog, className } = props
    const onVKButtonClick = () => {
        return `https://vk.com/taranova.yulia?w=wall${BlogsStore._ownerId}_${blog.id}`
    }

    const imageSrc = BlogsStore.getItemImage(blog.attachments[0], 500);
    return (
        <motion.article
            className={`${className ? className : ''} ${classes.blog}`}
            initial={ANIMATION_HIDDEN}
            whileInView={ANIMATION_VISIBLE}
            viewport={{ once: true, amount: 0.5 }}
            variants={MotionParent}
        >
            <div className={classes.content}>
                <div className={classes.leftPart}>
                    <motion.div className={classes.imageBox} variants={MotionChildUp}>
                        <Picture className={classes.image} src={imageSrc} alt={blog.text} />
                        <ul className={classes.scoreBox} >
                            {
                                blog.likes.count !== 0 &&
                                <li className={`${classes.score} ${classes.likes}`}>
                                    {blog.likes.count}
                                </li>
                            }
                            {
                                blog.reposts.count !== 0 &&
                                <li className={`${classes.score} ${classes.repost}`}>
                                    {blog.reposts.count}
                                </li>
                            }
                        </ul>
                    </motion.div>

                </div>
                <div className={classes.rightPart}>
                    <motion.div variants={MotionChildRight}>
                        <DateTime className={classes.dateTime} date={blog.date} />
                    </motion.div>
                    <BlogText text={blog.text} ></BlogText>

                    <motion.div
                        className={classes.buttons}
                        variants={MotionChildUp}
                    >
                        <a href={onVKButtonClick()} target="_blank" rel="noreferrer">
                            <Button
                                className={classes.button}
                                beforeImg={VKImage}
                                afterImg={stepOverImage}
                            >
                                Перейти в VK
                            </Button>
                        </a>
                        <Button
                            className={classes.button}
                            beforeImg={readMore1}
                            afterImg={readMore2}
                            routeOption={`/blog/${blog.id}`}
                        >
                            Подробнее
                        </Button>

                    </motion.div>

                </div>
            </div>
        </motion.article>
    )
})
export default BlogCard
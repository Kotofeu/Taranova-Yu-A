import { FC, memo, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionParent, MotionChildRight, MotionChildUp } from '../../const/animation'
import Button from '../../UI/Button/Button'
import DateTime from '../../UI/DateTime/DateTime'
import Picture from '../../UI/Picture'
import classes from './BlogCard.module.scss'
import readMore1 from '../../assets/icons/read__more_1.svg'
import readMore2 from '../../assets/icons/read__more_2.svg'
import stepOverImage from '../../assets/icons/step over.svg'
import VKImage from '../../assets/icons/VK.svg'

interface IBlogCard {
    imageSrc: string,
    desc: string,
    dateTime: number,
    likes: number,
    repost: number,
    className?: string

}
const BlogCard: FC<IBlogCard> = memo(forwardRef((props, ref: React.Ref<HTMLElement>) => {
    const { imageSrc, desc, dateTime, likes, repost, className } = props
    const tags: string[] = desc.split('#')
    const text = tags.shift()
    return (
        <motion.article
            className={`${className ? className : ''} ${classes.blog}`}
            initial={ANIMATION_HIDDEN}
            whileInView={ANIMATION_VISIBLE}
            viewport={{ once: true, amount: 0.5 }}
            variants={MotionParent}
            ref={ref}
        >
            <div className={classes.content}>
                <div className={classes.leftPart}>
                    <motion.div className={classes.imageBox} variants={MotionChildUp}>
                        <Picture className={classes.image} src={imageSrc} alt={desc} />
                        <ul className={classes.scoreBox} >
                            {
                                likes !== 0 &&
                                <li className={`${classes.score} ${classes.likes}`}>
                                    {likes}
                                </li>
                            }
                            {
                                repost !== 0 &&
                                <li className={`${classes.score} ${classes.repost}`}>
                                    {repost}
                                </li>
                            }
                        </ul>
                    </motion.div>

                </div>
                <div className={classes.rightPart}>
                    <motion.div variants={MotionChildRight}>
                        <DateTime className={classes.dateTime} date={dateTime} />

                    </motion.div>
                    {
                        <p className={classes.desc}>
                            {text?.split('\\n').map(
                                (paragraph, index) => {
                                    if (paragraph) {
                                        return (
                                            <motion.span
                                                className={classes.break}
                                                key={paragraph}
                                                variants={MotionChildRight}
                                                custom={index}
                                            >
                                                {paragraph}
                                                <br />
                                            </motion.span>
                                        )
                                    }
                                    return null
                                }
                            )}
                        </p>

                    }
                    <div className={classes.tagBox}>
                        {
                            tags.length !== 0 &&
                            tags.map((tag, index) =>
                                <motion.h6
                                    className={classes.tag}
                                    key={tag}
                                    variants={MotionChildRight}
                                    custom={index}
                                >
                                    #{tag}
                                </motion.h6>
                            )
                        }
                    </div>
                    <motion.div
                        className={classes.buttons}
                        variants={MotionChildUp}
                    >
                        <Button
                            className={classes.button}
                            beforeImg={VKImage}
                            afterImg={stepOverImage}

                        >
                            Перейти в VK
                        </Button>
                        <Button
                            className={classes.button}
                            beforeImg={readMore1}
                            afterImg={readMore2}

                        >
                            Подробнее
                        </Button>
                    </motion.div>

                </div>
            </div>
        </motion.article>
    )
}))

export default BlogCard
export const MBlogCard = motion(BlogCard)
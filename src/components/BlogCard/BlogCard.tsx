import { FC, memo } from 'react'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../const/animation'
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
const BlogCard: FC<IBlogCard> = memo((props) => {
    const { imageSrc, desc, dateTime, likes, repost, className } = props
    const tags: string[] = desc.split('#')
    const text = tags.shift()
    return (
        <article
            className={`${className ? className : ''} ${classes.blog}`}
        >
            <div className={classes.content}>
                <div className={classes.leftPart}>
                    <div className={classes.imageBox}>
                        <Picture className={classes.image} src={imageSrc} alt={desc} />
                        <ul className={classes.scoreBox}>
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
                    </div>

                </div>
                <div className={classes.rightPart}>
                    <DateTime className={classes.dateTime} date={dateTime} />
                    {
                        <p className={classes.desc}>
                            {text?.split('\\n').map(
                                paragraph => {
                                    if (paragraph) {
                                        return (
                                            <span className={classes.break} key={paragraph}>{paragraph}<br/></span>
                                        )
                                    }


                                }
                            )}
                        </p>

                    }
                    <div className={classes.tagBox}>
                        {
                            tags.length !== 0 &&
                            tags.map(tag =>
                                <h6 className={classes.tag} key={tag}>
                                    #{tag}
                                </h6>
                            )
                        }
                    </div>
                    <div className={classes.buttons}>
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
                    </div>

                </div>
            </div>


        </article>
    )
})

export default BlogCard
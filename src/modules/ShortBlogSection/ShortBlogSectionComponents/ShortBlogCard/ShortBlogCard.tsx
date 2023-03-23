import { FC, memo, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Picture from '../../../../UI/Picture';
import Title from '../../../../UI/Title/Title';
import classes from './ShortBlogCard.module.scss'
import { useNavigate } from 'react-router-dom';
import DateTime from '../../../../UI/DateTime/DateTime';
interface IBlockCard {
    index: number,
    className?: string,
    pictureSrc: string,
    date: number,
    title: string,
}
export const ShortBlogCard: FC<IBlockCard> = memo(

    forwardRef(
        (props, ref: React.Ref<HTMLDivElement>) => {
            const { index, pictureSrc, date, title, className } = props;
            const router = useNavigate()
            const setRoute = () => {
                router(`/blog/${index}`)
            }
            return (
                <motion.article
                    className={`${className ? className : ''} ${classes.blogCard}`} ref={ref}
                    onClick={setRoute}
                >
                    <Picture
                        src={pictureSrc}
                        alt={title}
                        className={classes.img} />
                    <div className={classes.desc} >
                        <DateTime date={date} />
                        <Title className={classes.title}>{title}</Title>
                    </div>

                </motion.article>
            )
        })
)

export const MShortBlogCard = motion(ShortBlogCard)
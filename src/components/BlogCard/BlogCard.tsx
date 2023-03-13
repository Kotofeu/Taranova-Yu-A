import { FC, memo, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Picture from '../../UI/Picture';
import Title from '../../UI/Title/Title';
import classes from './BlogCard.module.scss'
interface IBlockCard extends React.AllHTMLAttributes<HTMLHeadElement> {
    pictureSrc: string,
    time: string,
    date: string,
    title: string,
}
const BlogCard: FC<IBlockCard> = memo(
    forwardRef(
        (props, ref: React.Ref<HTMLDivElement>) => {
            const { pictureSrc, time, date, title, className, onClick } = props;
            return (
                <motion.div
                    className={`${className ? className : ''} ${classes.blogCard}`} ref={ref}
                    onClick={onClick}
                >
                    <Picture
                        src={pictureSrc}
                        alt={title}
                        className={classes.img} />
                    <div className={classes.desc} >
                        <div className={classes.dateTime}>
                            <p className={[classes.date, classes.timeField].join(' ')}>{time}</p>
                            <p className={classes.date}>{date}</p>
                        </div>
                        <Title className={classes.title}>{title}</Title>

                    </div>

                </motion.div>
            )
        }))

export default BlogCard
export const MBlogCard = motion(BlogCard)
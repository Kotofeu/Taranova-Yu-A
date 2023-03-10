import React, { FC } from 'react'
import { motion } from 'framer-motion'
import Picture from '../UI/Picture';
import Title from '../UI/Title/Title';
interface IBlockCard {
    pictureSrc: string,
    time: string,
    date: string,
    title: string,
    className?: string
}
const BlogCard: FC<IBlockCard> = React.memo(
    React.forwardRef(
        (props, ref: React.Ref<HTMLDivElement>) => {
            const { pictureSrc, time, date, title, className } = props;
            return (
                <motion.div className={`${className ? className : ''} blog-card`} ref={ref}>
                    <Picture
                        src={pictureSrc}
                        alt={title}
                        className='blog-card__img' />
                    <div className='blog-card__desc'>
                        <div className='blog-card__date-time'>
                            <p className='blog-card__date blog-card__date--time'>{time}</p>
                            <p className='blog-card__date blog-card__date--date'>{date}</p>
                        </div>
                        <Title className='blog-card__title'>{title}</Title>

                    </div>

                </motion.div>
            )
        }))

export default BlogCard
export const MBlogCard = motion(BlogCard)
import React, { FC } from 'react'
import Picture from './UI/Picture'
import Title from './UI/Title/Title'
import {motion} from 'framer-motion'
interface IBlockCard {
    pictureSrc: string,
    time: string,
    date: string,
    title: string,
    className?: string
}
const BlogCard: FC<IBlockCard> = React.memo(React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const {pictureSrc, time, date, title, className} = props;
    return (
        <motion.div className={`${className?className:''} blog`} ref = {ref}>
            <Picture
                src={pictureSrc}
                alt={title}
                className='blog__img' />
            <div className='blog__desc'>
                <div className='blog__date-time'>
                    <p className='blog__date blog__date--time'>{time}</p>
                    <p className='blog__date blog__date--date'>{date}</p>
                </div>
                <Title className='blog__title'>{title}</Title>

            </div>

        </motion.div>
    )
}))

export default BlogCard
export const MBlogCard = motion(BlogCard)
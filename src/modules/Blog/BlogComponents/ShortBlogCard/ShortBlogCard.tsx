import { FC, memo, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Picture from '../../../../UI/Picture';
import classes from './ShortBlogCard.module.scss'
import { NavLink } from 'react-router-dom';
import DateTime from '../../../../UI/DateTime/DateTime';
import BlogsStore, { Item } from '../../../../store/BlogsStore';
import BlogText from '../BlogText/BlogText';
interface IBlockCard {
    className?: string,
    blog: Item,

}
export const ShortBlogCard: FC<IBlockCard> = memo(

    forwardRef(
        (props, ref: React.Ref<HTMLDivElement>) => {
            const { blog, className } = props;
            const imageSrc = BlogsStore.getItemImage(blog.attachments[0], 600)
            return (
                <motion.article
                    className={`${className ? className : ''} ${classes.blogCard}`} ref={ref}
                >
                    <NavLink to = {`/blog/${blog.id}`}>
                        <Picture
                            src={imageSrc}
                            alt={blog.text}
                            className={classes.img} />
                        <div className={classes.desc} >
                            <DateTime className={classes.date} date={blog.date} />
                            <BlogText
                                className={classes.title}
                                text={blog.text}
                                tagsCount={2}
                                textRowCount={3}
                            />
                        </div>
                    </NavLink>


                </motion.article>
            )
        })
)

export const MShortBlogCard = motion(ShortBlogCard)
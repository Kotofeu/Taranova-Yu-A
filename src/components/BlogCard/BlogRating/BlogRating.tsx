import { FC, memo } from 'react'
import classes from './BlogRating.module.scss'
import { Blog } from '../../../store/BlogsStore'
interface IBlogRating {
    blog: Blog;
    className?: string;
}
export const BlogRating: FC<IBlogRating> = memo((props) => {
    const { blog, className } = props
    return (
        <ul className={className} >
            {
                blog.likes.count !== 0 &&
                <li className={[classes.rating, classes.rating___likes].join(' ')}>
                    {blog.likes.count}
                </li>
            }
            {
                blog.reposts.count !== 0 &&
                <li className={[classes.rating, classes.rating___repost].join(' ')}>
                    {blog.reposts.count}
                </li>
            }
        </ul>
    )
})

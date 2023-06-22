import { FC, memo } from 'react'
import classes from './BlogRating.module.scss'
import { Item } from '../../../store/BlogsStore'
interface IBlogRating {
    blog: Item;
    className?: string;
}
export const BlogRating: FC<IBlogRating> = memo((props) => {
    const { blog, className } = props
    return (
        <ul className={className} >
            {
                blog.likes.count !== 0 &&
                <li className={[classes.score, classes.likes].join(' ')}>
                    {blog.likes.count}
                </li>
            }
            {
                blog.reposts.count !== 0 &&
                <li className={[classes.score, classes.repost].join(' ')}>
                    {blog.reposts.count}
                </li>
            }
        </ul>
    )
})

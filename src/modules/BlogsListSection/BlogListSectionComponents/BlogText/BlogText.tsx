import { memo, FC } from 'react'
import { motion } from 'framer-motion'
import useTextBlogСonversion from '../../hooks/useTextBlogСonversion'
import classes from './BlogText.module.scss'
import { MotionChildRight } from '../../../../const/animation'
interface IBlogCard {
    text: string
}
const BlogText: FC<IBlogCard> = memo((props) => {
    const [desc, tags] = useTextBlogСonversion(props.text)
    return (
        <>
            <div className={classes.text}>
                {
                    desc && desc.map((paragraph, index) => {
                        if (index > 6 || !paragraph) return null
                        return (
                            <motion.p
                                className={classes.paragraph}
                                key={paragraph}
                                variants={MotionChildRight}
                            >
                                {paragraph}
                            </motion.p>
                        )
                    })
                }
            </div>
            <div className={classes.tagBox}>
                {
                    tags && tags.map((tag) =>
                        <motion.h6
                            className={classes.tag}
                            key={tag}
                            variants={MotionChildRight}
                        >
                            {tag}
                        </motion.h6>
                    )
                }
            </div>

        </>

    )
})

export default BlogText
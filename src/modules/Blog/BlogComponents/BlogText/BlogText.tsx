import { memo, FC } from 'react'
import { motion, Variants } from 'framer-motion'
import useTextBlogСonversion from '../../BlogHooks/useTextBlogСonversion'
import classes from './BlogText.module.scss'

interface IBlogText {
    text: string,
    className?: string,
    animationType?: Variants,
    textRowCount?: number,
    tagsCount?: number,

}
const BlogText: FC<IBlogText> = memo((props) => {
    const { text, className, animationType, textRowCount, tagsCount } = props
    const [desc, tags] = useTextBlogСonversion(text)
    return (
        <>
            <div className={[classes.text, className].join(' ')}>
                {
                    desc && desc.map((paragraph, index) => {
                        if (textRowCount && (index + 1 > textRowCount) || !paragraph.trim()) return null
                        console.log(paragraph.trim())
                        return (
                            <motion.p
                                className={classes.paragraph}
                                key={paragraph}
                                variants={animationType}
                            >
                                {paragraph}
                            </motion.p>
                        )
                    })
                }
            </div>
            <div className={classes.tagBox}>
                {
                    tags && tags.map((tag, index) => {
                        if (tagsCount && (index + 1 > tagsCount) || !tag) return null
                        return (
                            <motion.h6
                                className={classes.tag}
                                key={tag}
                                variants={animationType}
                            >
                                {tag}
                            </motion.h6>
                        )
                    })
                }
            </div>

        </>

    )
})

export default BlogText
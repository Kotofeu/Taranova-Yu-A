import { memo, FC } from 'react'
import { motion, Variants } from 'framer-motion'
import classes from './BlogText.module.scss'
import useTextBlogСonversion from '../../../utils/hooks/useTextBlogСonversion'

interface IBlogText {
    text: string;
    className?: string;
    tagClassName?: string;
    animationType?: Variants;
    textRowCount?: number;
    tagsCount?: number;

}
export const BlogText: FC<IBlogText> = memo((props) => {
    const { text, className = '',tagClassName = '', animationType, textRowCount, tagsCount } = props
    const [desc, tags] = useTextBlogСonversion(text)
    return (
        <>
            <div className={[classes.text, className].join(' ')}>
                {
                    desc && desc.map((paragraph, index) => {
                        if ((textRowCount && (index + 1 > textRowCount)) || !paragraph.trim()) return null
                        return (
                            <motion.p
                                className={classes.text_paragraph}
                                key={paragraph}
                                variants={animationType}
                            >
                                {paragraph}
                            </motion.p>
                        )
                    })
                }
            </div>
            <div className={[classes.text_tagBox, tagClassName].join(' ')}>
                {
                    tags && tags.map((tag, index) => {
                        if ((tagsCount && (index + 1 > tagsCount)) || !tag) return null
                        return (
                            <motion.h6
                                className={classes.text_tag}
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
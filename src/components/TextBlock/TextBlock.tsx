import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { MotionChildLeft, MotionParent, MotionUp } from '../../const/animation'
import Title, { MTitle } from '../../UI/Title/Title'
import classes from './TextBlock.module.scss'
export interface ITextBlockItem {
    title: string,
    text: string,
}
interface ITextBlock {
    textBlock: ITextBlockItem[],
    className?: string
}

const TextBlock: FC<ITextBlock> = memo(
    (props) => {
        const { textBlock, className } = props

        return (
            <motion.div className={`${className ? className : ''}`}
                variants={MotionParent}>
                {textBlock.map((item, index) =>
                    <div
                        key={item.title}
                        className={classes.textBlock}
                    >
                        <MTitle className={classes.title} variants={MotionChildLeft}>
                            {item.title}
                        </MTitle>
                        {
                            item.text.split('\n')
                                .map(item =>
                                    <motion.p
                                        className={classes.text}
                                        key={item}
                                        variants={MotionChildLeft}
                                    >
                                        {item}
                                    </motion.p>
                                )}

                    </div>
                )}
            </motion.div>
        )
    })

export default TextBlock
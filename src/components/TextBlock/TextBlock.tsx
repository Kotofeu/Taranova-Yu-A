import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { MotionUp } from '../../const/animation'
import Title from '../../UI/Title/Title'
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
            <div className={`${className ? className : ''}`}>
                {textBlock.map((item, index) =>
                    <motion.div
                        key={item.title}
                        variants={MotionUp}
                        custom={index}
                    >
                        <Title className={classes.title}>{item.title}</Title>
                        {
                            item.text.split('<br/>')
                                .map(item =>
                                    <p className={classes.text} key={item}>
                                        {item}
                                    </p>
                                )}

                    </motion.div>
                )}
            </div>
        )
    })

export default TextBlock
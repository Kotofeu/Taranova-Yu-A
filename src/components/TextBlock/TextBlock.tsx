import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildLeft, MotionLeft, MotionParent, MotionUp } from '../../const/animation'
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
            <motion.div
                className={`${className ? className : ''}`}
            >
                {textBlock.map((item, blockIndex) =>
                    <motion.div
                        key={item.title}
                        className={classes.textBlock}
                        variants={MotionUp}
                        initial={ANIMATION_HIDDEN}
                        whileInView={ANIMATION_VISIBLE}
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        <Title className={classes.title}>
                            {item.title}
                        </Title>
                        {
                            item.text.split('\n')
                                .map(item =>
                                    <motion.p
                                        className={classes.text}
                                        key={item}
                                        variants={MotionUp}
                                        initial={ANIMATION_HIDDEN}
                                        whileInView={ANIMATION_VISIBLE}
                                        viewport={{ once: true, margin: '-50px' }}
                                    >
                                        {item}
                                    </motion.p>
                                )}

                    </motion.div>
                )}
            </motion.div>
        )
    }
)
export default TextBlock
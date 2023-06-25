import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildLeft, MotionParent } from '../../utils/const/animation'
import { MTitle } from '../../UI/Title/Title'
import classes from './TextBlock.module.scss'
export interface ITextBlockItem {
    title: string;
    text: string;
}
interface ITextBlock {
    textBlock: ITextBlockItem[];
    className?: string;
}

const TextBlock: FC<ITextBlock> = memo(
    (props) => {
        const { textBlock, className = ''} = props
        return (
            <motion.div
                className={[classes.text, className].join(' ')}
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, margin: '-100px' }}
                variants={MotionParent}
            >
                {textBlock.map(item =>
                    <motion.div
                        key={item.title}
                        className={classes.text_block}
                    >
                        <MTitle className={classes.text_title} variants={MotionChildLeft}>
                            {item.title}
                        </MTitle>
                        {
                            item.text.split('\n')
                                .map(item =>
                                    <motion.p
                                        className={classes.text_text}
                                        key={item}
                                        variants={MotionChildLeft}
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
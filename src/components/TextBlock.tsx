import React, { FC } from 'react'
import Title from './UI/Title/Title'
import { motion } from 'framer-motion'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../const/animation'
export interface ITextBlockItem {
    title: string,
    text: string,
}
interface ITextBlock {
    textBlock: ITextBlockItem[],
    className?: string
}

const TextBlock: FC<ITextBlock> = React.memo((props) => {
    const { textBlock, className } = props

    return (
        <div className={`${className} text-block`}>
            {textBlock.map((item, index) =>
                <motion.div
                    key={item.title}
                    initial={ANIMATION_HIDDEN}
                    whileInView={ANIMATION_VISIBLE}
                    variants={MotionUp}
                    custom={index + 1} 
                    viewport={{ once: true }}
                >
                    <Title className='text-block__title'>{item.title}</Title>
                    {item.text.split('<br/>').map(item => <p className='text-block__text' key={item}>{item}</p>)}

                </motion.div>
            )}
        </div>
    )
})

export default TextBlock
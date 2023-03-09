import React, { FC } from 'react'
import Title, { TitleType } from './UI/Title/Title'
import { motion } from 'framer-motion'
import { MotionFlip, MotionUp } from '../const/animation';
export interface ICard {
    index?: number;
    cardImage: string;
    title: string;
    desc?: string;
    className?: string
}
const Card: FC<ICard> = React.memo(
    React.forwardRef(
        (props, ref: React.Ref<HTMLElement>) => {
            const { index, cardImage, title, desc, className } = props
            return (
                <motion.article ref={ref}
                    className={`${className} card`}
                >
                    <motion.img
                        className='card__img'
                        src={cardImage}
                        alt={title}
                        variants={MotionFlip}
                        custom={index}

                        viewport={{ once: true }}
                    />
                    <motion.div
                        variants={MotionUp}
                        custom={index}
                    >
                        <Title
                            className='card__title'
                            titleType={[TitleType.posCetner]}
                        >
                            {title}
                        </Title>
                        <p className='card__desc'>{desc}</p>
                    </motion.div>

                </motion.article>
            )
        }))


export default Card
export const MCard = motion(Card)
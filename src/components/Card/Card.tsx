import { FC, memo, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { MotionFlip, MotionUp } from '../../const/animation';
import Title, { TitleType } from '../../UI/Title/Title';
import classes from './Card.module.scss'
export interface ICard {
    index?: number;
    cardImage: string;
    title: string;
    desc?: string;
    className?: string
}
const Card: FC<ICard> = memo(
    forwardRef(
        (props, ref: React.Ref<HTMLElement>) => {
            const { index, cardImage, title, desc, className } = props
            return (
                <motion.article ref={ref}
                    className={`${className ? className : ''} ${classes.card}`}
                >
                    <motion.img
                        className={classes.img}
                        src={cardImage}
                        alt={title}
                        variants={MotionFlip}
                        custom={index}
                    />
                    <motion.div
                        className={classes.cardText}
                        variants={MotionUp}
                        custom={index}
                    >
                        <Title
                            className={classes.title}
                            titleType={[TitleType.posCetner]}
                        >
                            {title}
                        </Title>
                        {
                            desc
                                ? <p className={classes.desc}>{desc}</p>
                                : null
                        }
                    </motion.div>

                </motion.article>
            )
        }))


export default Card
export const MCard = motion(Card)
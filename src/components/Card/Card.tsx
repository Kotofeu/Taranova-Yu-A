import { FC, memo, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { MotionFlip, MotionUp } from '../../utils/const/animation';
import Title, { TitleType } from '../../UI/Title/Title';
import classes from './Card.module.scss'
export interface ICard {
    index?: number;
    cardImage: string;
    title: string;
    desc?: string;
    className?: string;
}
const Card: FC<ICard> = memo(
    forwardRef(
        (props, ref: React.Ref<HTMLElement>) => {
            const { index, cardImage, title, desc, className = '' } = props
            return (
                <motion.article ref={ref}
                    className={`${classes.card} ${className}`}
                >
                    <motion.img
                        className={classes.card_img}
                        src={cardImage}
                        alt={title}
                        variants={MotionFlip}
                        custom={index}
                    />
                    <motion.div
                        className={classes.card_text}
                        variants={MotionUp}
                        custom={index}
                    >
                        <Title
                            className={classes.card_title}
                            titleType={[TitleType.posCetner]}
                        >
                            {title}
                        </Title>
                        {
                            desc
                                ? <p className={classes.card_desc}>{desc}</p>
                                : null
                        }
                    </motion.div>

                </motion.article>
            )
        }))


export default Card
export const MCard = motion(Card)
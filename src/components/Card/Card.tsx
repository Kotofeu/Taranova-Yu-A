import { FC, memo, forwardRef } from 'react'
import { Variants, motion } from 'framer-motion'
import { MotionFlip, MotionUp } from '../../utils/const/animation';
import Title, { TitleType } from '../../UI/Title/Title';
import classes from './Card.module.scss'
import { ICard } from '../../store/ApplicationStore';
export interface ICardProps {
    index?: number;
    card: ICard;
    className?: string;
    variants?: Variants;
}
const Card: FC<ICardProps> = memo(
    forwardRef(
        (props, ref: React.Ref<HTMLElement>) => {
            const { card, className = '', variants } = props
            return (
                <motion.article ref={ref}
                    className={`${classes.card} ${className}`}
                    variants = {variants}
                >
                    <img
                        className={classes.card_img}
                        src={card.image}
                        alt={card.name}
                    />
                    <div
                        className={classes.card_text}
                    >
                        <Title
                            className={classes.card_title}
                            titleType={[TitleType.posCetner]}
                        >
                            {card.name}
                        </Title>
                    </div>

                </motion.article>
            )
        }))


export default Card
export const MCard = motion(Card)
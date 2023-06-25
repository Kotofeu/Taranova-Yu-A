import { FC, memo } from 'react'
import Title, { TitleType } from '../../UI/Title/Title';
import classes from './Card.module.scss'
import { ICard } from '../../store/ApplicationStore';
export interface ICardProps {
    index?: number;
    card: ICard;
    className?: string;
    isAnimate?: boolean;
}
const Card: FC<ICardProps> = memo(
    (props) => {
        const { card, className = '' } = props
        return (
            <article
                className={`${classes.card} ${className}`}
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
            </article>
        )
    }
)


export default Card
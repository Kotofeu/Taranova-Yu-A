import { FC, memo, forwardRef } from 'react'
import Button from '../../../../UI/Button/Button'
import Picture from '../../../../UI/Picture'
import Title from '../../../../UI/Title/Title'
import classes from './/EventCard.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import readMore1 from '../../../../assets/icons/read__more_1.svg'
import readMore2 from '../../../../assets/icons/read__more_2.svg'
export enum EventCardType {
    vertical = classes.eventCard___vertical,
}
interface IEventCard {
    index: number;
    className?: string;
    pictureSrc: string;
    date: string;
    title: string;
    type?: EventCardType;
}
export const EventCard: FC<IEventCard> = memo(forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const router = useNavigate()
    const { index, className = '', pictureSrc, date, title, type } = props
    const setRoute = () => {
        router(`/event/${index}`)
    }
    return (
        <motion.article
            className={`${classes.eventCard} ${type ? type : ''} ${className}`}
            ref={ref}
            onClick={setRoute}
        >
            <div className={classes.eventCard_imageBox}>
                <Picture
                    className={classes.eventCard_img}
                    src={pictureSrc}
                />
            </div>

            <div className={classes.eventCard_desc}>
                <Title className={classes.eventCard_title}>{title}</Title>
                <p className={classes.eventCard_date}>{date}</p>
                <Button
                    className={classes.eventCard_button}
                    beforeImg={readMore1}
                    afterImg={readMore2}
                >
                    Подробнее
                </Button>
            </div>

        </motion.article>
    )
}))

export const MEventCard = motion(EventCard)
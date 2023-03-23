import { FC, memo, forwardRef } from 'react'
import Button from '../../../../UI/Button/Button'
import Picture from '../../../../UI/Picture'
import Title from '../../../../UI/Title/Title'
import classes from './/EventCard.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import readMore1 from '../../../../assets/icons/read__more_1.svg'
import readMore2 from '../../../../assets/icons/read__more_2.svg'
interface IEventCard extends React.AllHTMLAttributes<HTMLDivElement> {
    index: number,
    pictureSrc: string,
    date: string,
    title: string,
}
export const EventCard: FC<IEventCard> = memo(forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const router = useNavigate()
    const { index, className, pictureSrc, date, title } = props
    const setRoute = () => {
        router(`/event/${index}`)
    }
    return (
        <motion.article
            className={`${className ? className : className} ${classes.event}`}
            ref={ref}
            onClick={setRoute}
        >
            <div className={classes.imageBox}>
                <Picture
                    className={classes.img}
                    src={pictureSrc}
                />
            </div>

            <div className={classes.desc}>
                <Title className={classes.title}>{title}</Title>
                <p className={classes.date}>{date}</p>
                <Button
                    className={classes.button}
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
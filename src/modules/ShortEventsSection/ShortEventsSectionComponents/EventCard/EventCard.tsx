import { FC, memo, forwardRef } from 'react'
import Button from '../../../../UI/Button/Button'
import Picture from '../../../../UI/Picture'
import Title from '../../../../UI/Title/Title'
import classes from './/EventCard.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import readMore1 from '../../../../assets/icons/read__more_1.svg'
import readMore2 from '../../../../assets/icons/read__more_2.svg'
import { Event } from '../../../../store/EventStore'
import DateTime from '../../../../UI/DateTime/DateTime'
export enum EventCardType {
    vertical = classes.eventCard___vertical,
}
interface IEventCard {
    className?: string;
    event: Event;
}
const transformDateToUTCDate = (date: Date): Date => {
    const newDate = new Date(date);
    const UTCDate = new Date(
        newDate.getUTCFullYear(),
        newDate.getUTCMonth(),
        newDate.getUTCDate(),
        newDate.getUTCHours(),
        newDate.getUTCMinutes(),
        newDate.getUTCSeconds()
    );
    return UTCDate;

}
export const EventCard: FC<IEventCard> = memo(forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const router = useNavigate()
    const { className = '', event } = props
    const setRoute = () => {
        router(`/event/${event.uid}`)
    }

    return (
        <article className={[classes.eventCard, className].join(' ')}>
            <header className={classes.eventCard_header}>
                <div className={classes.eventCard_headerAbout}>
                    <h6 className={classes.eventCard_headerTitle}>
                        {event.title}
                    </h6>
                    <div className={classes.eventCard_eventType}>
                        {event.type.name}
                    </div>
                </div>
                <div className={classes.eventCard_dates}>
                    <div className={classes.eventCard_date}>
                        <span className={classes.eventCard_dateLabel}>начало</span>
                        <DateTime date={transformDateToUTCDate(event.startDate)} />
                    </div>
                    <div className={classes.eventCard_date}>
                        <span className={classes.eventCard_dateLabel}>конец</span>
                        <DateTime date={transformDateToUTCDate(event.endDate)} />
                    </div>
                </div>
            </header>
            <address className={classes.eventCard_address}>
                {event.location}
            </address>
            <div className={classes.eventCard_desc}>
                {event.description}
            </div>
        </article>
    )
}))

export const MEventCard = motion(EventCard)
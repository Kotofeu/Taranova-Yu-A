import { FC, memo, forwardRef } from 'react'
import classes from './/EventCard.module.scss'
import { motion } from 'framer-motion'
//import { useNavigate } from 'react-router-dom';
import { Event } from '../../../../store/EventStore'
import DateTime from '../../../../UI/DateTime/DateTime'
export enum EventCardType {
    vertical = classes.eventCard___vertical,
}
interface IEventCard {
    className?: string;
    event: Event;
}

export const EventCard: FC<IEventCard> = memo(forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    //const router = useNavigate()
    const { className = '', event } = props
    /*const setRoute = () => {
        router(`/event/${event.uid}`)
    }*/
    return (
        <article className={[classes.eventCard, className].join(' ')}>
            <header className={classes.eventCard_header}>
                <h6 className={classes.eventCard_headerTitle}>
                    {event.title}
                </h6>

                <div className={classes.eventCard_headerAbout}>
                <div className={classes.eventCard_eventType}>
                        {event.type.name}
                    </div>
                    <div className={classes.eventCard_dates}>
                        <div className={classes.eventCard_date}>
                            <span className={classes.eventCard_dateLabel}>начало</span>
                            <DateTime date={event.startDate} />
                        </div>
                        <div className={classes.eventCard_date}>
                            <span className={classes.eventCard_dateLabel}>конец</span>
                            <DateTime date={event.endDate} />
                        </div>
                    </div>
                </div>
                {
                    event.location
                        ? <address className={classes.eventCard_address}>
                            {event.location}
                        </address>
                        : null

                }
            </header>


            <div className={classes.eventCard_desc}>
                {event.description}
            </div>
        </article>
    )
}))

export const MEventCard = motion(EventCard)
import { FC, memo, forwardRef, Ref } from 'react'
import classes from './/EventCard.module.scss'
import { motion } from 'framer-motion'
//import { useNavigate } from 'react-router-dom';
import { Event } from '../../store/EventStore'
import DateTime from '../../UI/DateTime/DateTime'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildLeft, MotionLeft, MotionParent } from '../../utils/const/animation'
export enum EventCardType {
    vertical = classes.eventCard___vertical,
}
interface IEventCard {
    className?: string;
    event: Event;
    isAnimate?: boolean;
}

export const EventCard: FC<IEventCard> = memo(forwardRef((props, ref: Ref<HTMLElement>) => {
    //const router = useNavigate()
    const { className = '', event, isAnimate = false} = props
    /*const setRoute = () => {
        router(`/event/${event.uid}`)
    }*/
    return (
        <motion.article
            className={[classes.eventCard, className].join(' ')}
            ref={ref}
            initial={isAnimate ? ANIMATION_HIDDEN : undefined}
            whileInView={isAnimate ? ANIMATION_VISIBLE : undefined}
            variants={isAnimate ? MotionParent : undefined}
            viewport={isAnimate ? { once: true, amount: .5 } : undefined}
        >
            <header className={classes.eventCard_header}>
                <motion.h6
                    className={classes.eventCard_headerTitle}
                    variants={isAnimate ? MotionChildLeft : undefined}
                >
                    {event.title}
                </motion.h6>

                <motion.div
                    className={classes.eventCard_headerAbout}
                    variants={isAnimate ? MotionChildLeft: undefined}
                >
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
                </motion.div>
                {
                    event.location
                        ? <motion.address
                            className={classes.eventCard_address}
                            variants={isAnimate ? MotionChildLeft: undefined}
                        >
                            {event.location}
                        </motion.address>
                        : null

                }
            </header>


            <div className={classes.eventCard_desc}>
                {
                    event.description.split('\n')
                        .map(item => {
                            if (!item) return null
                            return (
                                <motion.p
                                    className={classes.text_text}
                                    key={event.uid + item}
                                    variants={isAnimate ? MotionChildLeft: undefined}
                                >
                                    {item}
                                </motion.p>
                            )
                        }
                    )
                }
            </div>
        </motion.article>
    )
}))
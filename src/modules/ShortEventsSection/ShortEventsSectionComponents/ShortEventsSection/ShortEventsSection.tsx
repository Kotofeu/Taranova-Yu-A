import { EventCard } from '../../../../components/EventCard/EventCard'
import Section from '../../../../components/Section/Section'
import { observer } from 'mobx-react-lite'
import { eventStore } from '../../../../store'
import { motion } from 'framer-motion'

import classes from './ShortEventsSection.module.scss'
import { MotionChildUp } from '../../../../utils/const/animation'
import Loader from '../../../../components/Loader/Loader'

export const ShortEventsSection = observer(() => {
  if (eventStore.error) {
    console.log(eventStore.error.message)
    return null
  }
  return (
    <Section className={classes.shortBlog} title='Предстоящие мероприятия'>
      <motion.div
        className={classes.shortBlog_events}
        variants={MotionChildUp}
      >
        {eventStore.isLoading && <Loader />}
        {!eventStore.isLoading && eventStore.events?.events?.length
          ? eventStore.events.events.map(event =>
            <EventCard
              className={classes.shortBlog_event}
              key={event.uid}
              event={event}
            />)
          : null
        }

      </motion.div>
    </Section >

  )
})

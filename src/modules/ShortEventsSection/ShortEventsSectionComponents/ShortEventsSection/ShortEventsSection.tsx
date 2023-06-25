import { EventCard } from '../EventCard/EventCard'
import Section from '../../../../components/Section/Section'
import { observer } from 'mobx-react-lite'
import { eventStore } from '../../../../store'
import MySlider from '../../../../components/MySlider/MySlider'
import { motion } from 'framer-motion'

import classes from './ShortEventsSection.module.scss'
import { MotionChildUp } from '../../../../utils/const/animation'
import Loader from '../../../../components/Loader/Loader'

export const ShortEventsSection = observer(() => {
  if (eventStore.error) {
    console.log(eventStore.error)
    return null
  }
  return (
    <Section className={classes.shortBlog} title='Последние мероприятия'>
      <motion.div
        className={classes.shortBlog_slider}
        variants={MotionChildUp}
      >
        {eventStore.isLoading && <Loader />}
        {!eventStore.isLoading && eventStore.events?.events?.length
          ? <MySlider
            slideClass={classes.shortBlog_slide}
            items={eventStore.events?.events || []}
            renderItem={event => {
              return (
                <EventCard
                  className={classes.shortBlog_event}
                  key={event.uid}
                  event={event}
                />
              )
            }}
            settings={{
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: { enabled: true },
              pagination: { clickable: true },
              autoHeight: true,
              breakpoints: {
                767.98: {
                  slidesPerView: 2,
                }
              }
            }}
          />
          : null
        }

      </motion.div>
    </Section >

  )
})

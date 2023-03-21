import { memo } from 'react'
import EventCard from '../../../components/EventCard/EventCard'
import Section from '../../../components/Section/Section'
import { MotionLeft, MotionRight } from '../../../const/animation'
import classes from './ShortEventsSection.module.scss'

export const ShortEventsSection = memo(() => {
  return (
    <Section className={classes.shortBlog} title='Последние мероприятия'>
      <div
        className={classes.inner}
      >
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    </Section>

  )
})

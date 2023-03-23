import { memo } from 'react'
import { MEventCard } from '../EventCard/EventCard'
import Section from '../../../../components/Section/Section'
import { MotionLeft, MotionRight } from '../../../../const/animation'
import classes from './ShortEventsSection.module.scss'

export const ShortEventsSection = memo(() => {
  return (
    <Section className={classes.shortBlog} title='Последние мероприятия'>
      <div
        className={classes.inner}
      >
        <MEventCard
          className={classes.event}
          index={1}
          title='Мероприятие 1'
          date='1 сентября 2022'
          pictureSrc={"https://sun9-38.userapi.com/impg/Ji7WMLToIr-9dPwLwKx56zkTBsSk88BY9YZHhQ/5lHH2E6mi00.jpg?size=2560x1920&quality=95&sign=69c7b9bf585ae1278eb4d4244498ad72&type=album"}
          variants={MotionRight}
        />
        <MEventCard
          className={classes.event}
          index={2}
          title='Мероприятие 2'
          date='2 декабря 2023'
          pictureSrc={"https://sun9-80.userapi.com/impg/d5zqsnoMDX-PRXWyNFC-_4tF7cvtd99jwaqcyA/eMxdu-QtY38.jpg?size=1242x828&quality=95&sign=1502ec3369f901b20f9cf63bb65e1bb2&type=album"}
          variants={MotionLeft}
        />
      </div>
    </Section>

  )
})

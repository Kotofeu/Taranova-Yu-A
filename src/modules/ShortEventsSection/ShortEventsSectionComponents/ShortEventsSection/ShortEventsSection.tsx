//import { useMediaQuery } from 'react-responsive'
import { EventCard} from '../EventCard/EventCard'
import Section from '../../../../components/Section/Section'
//import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionLeft, MotionRight } from '../../../../utils/const/animation'
import classes from './ShortEventsSection.module.scss'
import { observer } from 'mobx-react-lite'
import { eventStore } from '../../../../store'

export const ShortEventsSection = observer(() => {
  /*const isMedium = useMediaQuery({
    query: "(min-width: 767.98px)"
  });
  const isSmall = useMediaQuery({
    query: "(min-width: 575.98px)"
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 479.98px)"
  });*/
  //const isVerticalBlock: boolean = (!isMedium && isSmall) || !isMobile
  return (
    <Section className={classes.shortBlog} title='Последние мероприятия'>
      <div
        className={classes.shortBlog_inner}
      >
        {
          eventStore.events?.events.map(event => (
            <EventCard
            className={classes.shortBlog_event}
              key={event.uid}
              event={event}
            />))
        }

      </div>
    </Section>

  )
})

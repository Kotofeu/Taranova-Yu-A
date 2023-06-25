import { observer } from 'mobx-react-lite'
import { eventStore } from '../../../../store'
import Error from '../../../../components/Error/Error'
import Section, { SectionType } from '../../../../components/Section/Section'

import classes from './EventsListSection.module.scss'
import Loader from '../../../../components/Loader/Loader'
import Title, { TitleType } from '../../../../UI/Title/Title'
import { MEventCard } from '../../../../components/EventCard/EventCard'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionParent } from '../../../../utils/const/animation'
export const EventsListSection = observer(() => {

    if (eventStore.error) {
        return <Error errorText={eventStore.error} />
    }
    return (
        <Section className={classes.eventList} title='Мероприятия'
            sectionType={SectionType.fullSize}>
            <div className={classes.eventList_list}>
                {eventStore.isLoading &&
                    <div className={classes.eventList_loader}>
                        <Loader />
                    </div>
                }
                {
                    !eventStore.isLoading && !eventStore.events?.events?.length
                        ? <Title
                            className={classes.eventList_empty}
                            titleType={[TitleType.posCetner]
                            }
                        >
                            Мероприятия отсутствуют
                        </Title>
                        : null
                }
                {
                    eventStore.events?.events?.length
                        ?
                        eventStore.events?.events.map(event => {
                            return (<MEventCard
                                className={classes.eventList_blog}
                                event={event}
                                key={event.uid}
                                initial={ANIMATION_HIDDEN}
                                whileInView={ANIMATION_VISIBLE}
                                viewport={{ once: true, margin: "-40px" }}
                                variants={MotionParent}
                            />)
                        })
                        : null
                }
            </div>

        </Section>
    )
})
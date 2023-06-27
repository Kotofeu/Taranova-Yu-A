import { observer } from 'mobx-react-lite'
import { eventStore } from '../../../../store'
import Error from '../../../../components/Error/Error'
import Section, { SectionType } from '../../../../components/Section/Section'

import classes from './EventsListSection.module.scss'
import Loader from '../../../../components/Loader/Loader'
import Title, { TitleType } from '../../../../UI/Title/Title'
import { EventCard, EventCardType } from '../../../../components/EventCard/EventCard'
export const EventsListSection = observer(() => {
    console.log(eventStore.error?.message)
    if (eventStore.error) {
        return <Error errorText={eventStore.error.message} />
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
                            return (<EventCard
                                className={classes.eventList_blog}
                                event={event}
                                key={event.uid}
                                isAnimate = {true}
                                eventCardType={EventCardType.fullSize}
                            />)
                        })
                        : null
                }
            </div>

        </Section>
    )
})
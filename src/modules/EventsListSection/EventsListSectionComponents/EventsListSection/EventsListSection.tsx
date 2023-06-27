import { useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { eventStore } from '../../../../store'
import Error from '../../../../components/Error/Error'
import Section, { SectionType } from '../../../../components/Section/Section'

import classes from './EventsListSection.module.scss'
import Loader from '../../../../components/Loader/Loader'
import Title, { TitleType } from '../../../../UI/Title/Title'
import { EventCard, EventCardType } from '../../../../components/EventCard/EventCard'
import { useParams } from 'react-router-dom'
export const EventsListSection = observer(() => {
    const params = useParams();
    const selectedEvent = useRef<HTMLDivElement>(null)
    const id: string | undefined = params.id
    useEffect(() => {
        if (selectedEvent.current) {
            selectedEvent.current.scrollIntoView(
                {
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                }
            );
        }
    }, [selectedEvent, eventStore.events, selectedEvent.current])
    if (eventStore.error) {
        console.log(eventStore.error?.message)
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
                            const isSelected: boolean = event.uid === id;
                            return (
                                <div
                                    key={event.uid}
                                    ref={isSelected ? selectedEvent : undefined}
                                >
                                    <EventCard
                                        className={
                                            [
                                                classes.eventList_blog,
                                                isSelected ? classes.eventList_blog___selected : ''
                                            ].join(' ')
                                        }
                                        event={event}
                                        isAnimate={true}
                                        eventCardType={EventCardType.fullSize}
                                    />
                                </div>
                            )
                        })
                        : null
                }
            </div>

        </Section>
    )
})
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'

import Card from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildUp, MotionUp } from '../../../utils/const/animation'
import { MTitle, TitleType } from '../../../UI/Title/Title'

import classes from './BioSection.module.scss'
import { applicationStore } from '../../../store'
import MySlider from '../../../components/MySlider/MySlider'
export const BioSection = observer(() => {
    if (!applicationStore?.biography?.length) {
        console.log(applicationStore.error?.message)
        return null
    }
    return (
        <Section
            className={classes.bio}
            title='Краткая биография'
            sectionType={SectionType.fullSize}
        >
            <TextBlock
                className={classes.bio_textBlock}
                textBlock={applicationStore.biography || []}
            />
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, margin: '-100px' }}
            >
                <MTitle
                    className={classes.bio_achievementsTitle}
                    titleType={[TitleType.posCetner]}
                    variants={MotionUp}
                >
                    Награды
                </MTitle>
                <motion.div
                    className={classes.bio_achievementsList}
                    variants={MotionChildUp}
                >
                    <MySlider
                        items={applicationStore.awards || []}
                        renderItem={award => {
                            return (
                                <Card
                                    className={classes.bio_achievementsCard}
                                    card={award}
                                    key={award.id}
                                />
                            )
                        }}
                        settings={{
                            slidesPerView: 1,
                            spaceBetween: 20,
                            navigation: { enabled: true },
                            pagination: { clickable: true },
                            autoplay: true,
                            autoHeight: true,
                            breakpoints: {
                                479.98: {
                                    slidesPerView: 2,
                                },
                                767.98: {
                                    slidesPerView: 3,
                                },
                                991.98: {
                                    slidesPerView: 4,
                                }
                            }
                        }}
                    />
                </motion.div>
            </motion.div>
        </Section>)
})
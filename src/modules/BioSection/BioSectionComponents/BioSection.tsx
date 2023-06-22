import { motion } from 'framer-motion'
import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../../utils/const/animation'
import { MTitle, TitleType } from '../../../UI/Title/Title'

import classes from './BioSection.module.scss'
import { applicationStore } from '../../../store'
export const BioSection = memo(observer(() => {
    return (
        <Section
            className={classes.bio}
            title='Краткая биография'
            sectionType={SectionType.fullSize}
        >
            <TextBlock
                className={classes.textBlock}
                textBlock={[{ title: "Lorem", text: applicationStore.bio }]}
            />
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, margin: '-100px' }}
            >
                <MTitle
                    className={classes.achievementsTitle}
                    titleType={[TitleType.posCetner]}
                    variants={MotionUp}
                >
                    Победитель
                </MTitle>
                <motion.div
                    initial={ANIMATION_HIDDEN}
                    whileInView={ANIMATION_VISIBLE}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <UniversalList
                        className={classes.achievementsList}
                        items={applicationStore.achievements}
                        renderItem={
                            (item, index) => <MCard
                                className={classes.achievementsCard}
                                cardImage={item.cardImage}
                                title={item.title}
                                index={index}
                                key={item.title} />
                        }
                    />
                </motion.div>

            </motion.div>


        </Section>)
}))

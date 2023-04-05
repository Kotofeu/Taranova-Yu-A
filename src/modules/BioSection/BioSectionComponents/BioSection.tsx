import { motion } from 'framer-motion'
import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../../const/animation'
import { MTitle, TitleType } from '../../../UI/Title/Title'
import ApplicationStore from '../../../store/ApplicationStore'

import classes from './BioSection.module.scss'
export const BioSection = memo(observer(() => {
    const isDesktop = ApplicationStore.isDesktop
    return (
        <Section
            className={classes.bio}
            title='Краткая биография'
            sectionType={SectionType.fullSize}
        >
            <TextBlock
                className={classes.textBlock}
                textBlock={[{ title: "Lorem", text: ApplicationStore.bio }]}
            />
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true,margin: '-100px' }}
            >
                <MTitle
                    className={classes.achievementsTitle}
                    titleType={[TitleType.posCetner]}
                    variants={MotionUp}
                >
                    Победитель
                </MTitle>

                <UniversalList
                    className={classes.achievementsList}
                    items={ApplicationStore.achievements}
                    renderItem={
                        (item, index) => <MCard
                            initial={ANIMATION_HIDDEN}
                            whileInView={ANIMATION_VISIBLE}
                            viewport={{ once: true, margin: '-100px' }}
                            className={classes.achievementsCard}
                            cardImage={item.cardImage}
                            title={item.title}
                            desc={item.desc}
                            index={isDesktop ? index : 0}
                            key={item.title} />
                    }
                />
            </motion.div>


        </Section>)
}))

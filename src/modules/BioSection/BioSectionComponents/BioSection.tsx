import { motion } from 'framer-motion'
import {memo} from 'react'
import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionParent, MotionUp } from '../../../const/animation'
import { MTitle, TitleType } from '../../../UI/Title/Title'
import { achievements, bio } from '../BioSectionStore/BipSectionConsts'
import classes from './BioSection.module.scss'
export const BioSection = memo(() => {
    return (
        <Section
            className={classes.bio}
            title='Краткая биография'
            sectionType={SectionType.fullSize}
        >
            <TextBlock
                className={classes.textBlock}
                textBlock={[{ title: "Lorem", text: bio }]}
            />
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, amount: 0.6 }}
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
                    items={achievements}
                    renderItem={
                        (item, index) => <MCard
                            cardImage={item.cardImage}
                            title={item.title}
                            desc={item.desc}
                            index={index}
                            key={item.title} />
                    }
                />
            </motion.div>


        </Section>)
})

import { motion } from 'framer-motion'
import {memo} from 'react'
import { MCard } from '../../../components/Card'
import Section, { SectionType } from '../../../components/Section'
import TextBlock from '../../../components/TextBlock'
import UniversalList from '../../../components/UniversalList'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../../const/animation'
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
                className={classes.text_block}
                textBlock={[{ title: "Lorem", text: bio }]}
            />
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, amount: 0.6 }}
            >
                <MTitle
                    className={classes.achievements_title}
                    titleType={[TitleType.posCetner]}
                    variants={MotionUp}
                >
                    Победитель
                </MTitle>

                <UniversalList
                    className={classes.achievements_list}
                    items={achievements}
                    renderItem={
                        (item, index) => <MCard
                            cardImage={item.cardImage}
                            title={item.title}
                            desc={item.desc}
                            index={index}
                            className='bio__achievements-card'
                            key={item.title} />
                    }
                />
            </motion.div>


        </Section>)
})

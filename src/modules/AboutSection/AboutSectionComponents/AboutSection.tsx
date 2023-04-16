import { motion } from 'framer-motion'
import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import Picture from '../../../UI/Picture'
import Title from '../../../UI/Title/Title'

import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionRight } from '../../../const/animation'
import ApplicationStore from '../../../store/ApplicationStore'

import profile from '../../../assets/images/profile-picture.jpg'
import profileWebp from '../../../assets/images/profile-picture.webp'

import classes from './AboutSection.module.scss'

export const AboutSection = memo(observer(() => {

    return (
        <Section
            className={classes.about}
            title='Таранова Юлия Анатольевна'
            sectionType={SectionType.fullSize}
        >
            <div className={classes.info}>
                <motion.div
                    className={classes.infoLeft}
                    variants={MotionRight}
                >
                    <Picture
                        srcWebp={profileWebp}
                        src={profile}
                        alt='about-section picture'
                        className={classes.infoImg}
                    />
                    <Title className={classes.infoSlogan}>{ApplicationStore.slogan}</Title>
                </motion.div>
                <TextBlock className={classes.infoDesc} textBlock={ApplicationStore.aboutText}></TextBlock>
            </div>
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, margin: '-100px' }}
            >
                <UniversalList
                    className={classes.includedIn}
                    items={ApplicationStore.includedIn}
                    renderItem={
                        (item, index) => <MCard
                            className={classes.includedCard}
                            cardImage={item.cardImage}
                            title={item.title}
                            index={index}
                            key={item.title}
                        />
                    }
                />
            </motion.div>

        </Section>

    )
}))
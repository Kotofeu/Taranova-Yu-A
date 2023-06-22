import { motion } from 'framer-motion'
import { memo } from 'react'
import { observer } from 'mobx-react-lite'

import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import Picture from '../../../UI/Picture'
import Title from '../../../UI/Title/Title'

import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionRight } from '../../../utils/const/animation'

import profile from '../../../assets/images/profile-picture.jpg'
import profileWebp from '../../../assets/images/profile-picture.webp'

import classes from './AboutSection.module.scss'
import { applicationStore } from '../../../store'

export const AboutSection = memo(observer(() => {

    return (
        <Section
            className={classes.about}
            title='Таранова Юлия Анатольевна'
            sectionType={SectionType.fullSize}
        >
            <div className={classes.about_info}>
                <motion.div
                    className={classes.about_infoLeft}
                    variants={MotionRight}
                >
                    <Picture
                        srcWebp={profileWebp}
                        src={profile}
                        alt='about-section picture'
                        className={classes.about_proileImg}
                    />
                    <Title className={classes.about_slogan}>{applicationStore.slogan}</Title>
                </motion.div>
                <TextBlock className={classes.about_desc} textBlock={applicationStore.aboutText}></TextBlock>
            </div>
            <motion.div
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, margin: '-100px' }}
            >
                <UniversalList
                    className={classes.about_includedIn}
                    items={applicationStore.includedIn}
                    renderItem={
                        (item, index) => <MCard
                            className={classes.about_includedCard}
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
import { motion } from 'framer-motion'
import { memo } from 'react'
import { useMediaQuery } from 'react-responsive'

import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import Picture from '../../../UI/Picture'
import Title from '../../../UI/Title/Title'

import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionRight } from '../../../const/animation'
import { aboutText, includedIn, slogan } from '../AboutSectionStore/AboutSectionConsts'

import profile from '../../../assets/images/profile-picture.jpg'
import profileWebp from '../../../assets/images/profile-picture.webp'

import classes from './AboutSection.module.scss'
export const AboutSection = memo(() => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 479.98px)"
    });
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
                    <Title className={classes.infoSlogan}>{slogan}</Title>
                </motion.div>
                <TextBlock className={classes.infoDesc} textBlock={aboutText}></TextBlock>
            </div>
            <UniversalList
                className={classes.includedIn}
                items={includedIn}
                renderItem={
                    (item, index) => <MCard
                        initial={ANIMATION_HIDDEN}
                        whileInView={ANIMATION_VISIBLE}
                        viewport={{ once: true, margin: '-100px' }}
                        className={classes.includedCard}
                        cardImage={item.cardImage}
                        title={item.title}
                        desc={item.desc}
                        index={isDesktop? index : 0}
                        key={item.title}
                    />
                }
            />
        </Section>

    )
})
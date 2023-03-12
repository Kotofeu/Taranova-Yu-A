import { motion } from 'framer-motion'
import { memo } from 'react'
import { MCard } from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import UniversalList from '../../../components/UniversalList'
import { MotionRight } from '../../../const/animation'
import Picture from '../../../UI/Picture'
import Title from '../../../UI/Title/Title'
import { aboutText, includedIn, slogan } from '../AboutSectionStore/AboutSectionConsts'
import profile from '../../../assets/images/profile-picture.jpg'
import profileWebp from '../../../assets/images/profile-picture.webp'
import classes from './AboutSection.module.scss'
export const AboutSection = memo(() => {
    return (
        <Section
            className={classes.about}
            title='Таранова Юлия Анатольевна'
            sectionType={SectionType.fullSize}
        >
            <div className={classes.info}>
                <motion.div
                    className={classes.infoRight}
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
                        cardImage={item.cardImage}
                        title={item.title}
                        desc={item.desc}
                        index={index}
                        key={item.title}
                    />
                }
            />
        </Section>

    )
})

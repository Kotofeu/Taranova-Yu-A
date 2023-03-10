import { motion } from 'framer-motion'
import {memo} from 'react'
import { MCard } from '../../../components/Card'
import Section, { SectionType } from '../../../components/Section'
import TextBlock from '../../../components/TextBlock'
import UniversalList from '../../../components/UniversalList'
import { MotionRight } from '../../../const/animation'
import Picture from '../../../UI/Picture'
import Title from '../../../UI/Title/Title'
import { aboutText, includedIn, slogan } from '../AboutSectionStore/AboutSectionConsts'
import profile from '../../../assets/images/profile-picture.jpg'
import profileWebp from '../../../assets/images/profile-picture.webp'
import './AboutSection.scss'
export const AboutSection = memo(() => {
    return (
        <Section
            className='about-section'
            title='Таранова Юлия Анатольевна'
            sectionType={SectionType.fullSize}
        >
            <div className='about-section__info'>
                <motion.div
                    className='about-section__info-right'
                    variants={MotionRight}
                >
                    <Picture
                        srcWebp={profileWebp}
                        src={profile}
                        alt='about-section picture'
                        className='about-section__info-img'
                    />
                    <Title className='about-section__info-slogan'>{slogan}</Title>
                </motion.div>
                <TextBlock className='about-section__info-desc' textBlock={aboutText}></TextBlock>
            </div>
            <div>
                <UniversalList
                    className='about-section__included'
                    items={includedIn}
                    renderItem={
                        (item, index) => <MCard
                            cardImage={item.cardImage}
                            title={item.title}
                            desc={item.desc}
                            className='about-section__included-card'
                            index={index}
                            key={item.title}
                        />
                    }
                />
            </div>
        </Section>

    )
})

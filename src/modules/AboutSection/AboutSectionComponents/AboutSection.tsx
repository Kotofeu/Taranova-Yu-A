import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'

import Card from '../../../components/Card/Card'
import Section, { SectionType } from '../../../components/Section/Section'
import TextBlock from '../../../components/TextBlock/TextBlock'
import Picture from '../../../UI/Picture'
import Title from '../../../UI/Title/Title'
import MySlider from '../../../components/MySlider/MySlider'

import { MotionChildUp, MotionRight } from '../../../utils/const/animation'

import profile from '../../../assets/images/profile-picture.jpg'

import { applicationStore } from '../../../store'
import classes from './AboutSection.module.scss'

export const AboutSection = observer(() => {
    return (
        <Section
            className={classes.about}
            title='Таранова Юлия Анатольевна'
            sectionType={SectionType.firstSection}
        >
            <div className={classes.about_info}>
                <motion.div
                    className={classes.about_infoLeft}
                    variants={MotionRight}
                >
                    <Picture
                        src={applicationStore.image || profile}
                        alt='about-section picture'
                        className={classes.about_proileImg}
                    />
                    <Title className={classes.about_slogan}>{applicationStore.slogan}</Title>
                </motion.div>
                <TextBlock className={classes.about_desc} textBlock={applicationStore.basicInfo || []}></TextBlock>
            </div>
            <div>
                <motion.div
                    className={classes.about_includedIn}
                    variants={MotionChildUp}
                >
                    <MySlider
                        items={applicationStore.organizations || []}
                        renderItem={org => {
                            return (
                                <Card
                                    className={classes.about_includedCard}
                                    card={org}
                                    key={org.id}
                                />
                            )
                        }}
                        settings={{
                            slidesPerView: 1,
                            spaceBetween: 20,
                            navigation: { enabled: true },
                            pagination: { clickable: true },
                            autoHeight: true,
                            autoplay: true,
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
            </div>

        </Section>

    )
})
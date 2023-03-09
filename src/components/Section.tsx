import { motion } from 'framer-motion'
import React, { FC, ReactNode } from 'react'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../const/animation'
import Title, { MTitle, TitleType } from './UI/Title/Title'
export enum SectionType {
    fullSize = 'section--full-size'
}
interface ISection {
    title: string,
    className?: string,
    children?: ReactNode | ReactNode[]
    sectionType?: SectionType


}
const Section: FC<ISection> = (props) => {
    const { title, className, children, sectionType } = props

    return (
        <section className={`${className} section ${sectionType ? sectionType : ''}`}>
            <motion.div
                className='container'
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, amount: 0.25 }}>
                <MTitle
                    titleType={[TitleType.posCetner, TitleType.lineCenter, TitleType.sectionTitle]}
                    className='section__title'
                    variants={MotionUp}
                >
                    {title}
                </MTitle>
                {children}
            </motion.div>
        </section>
    )
}

export default Section
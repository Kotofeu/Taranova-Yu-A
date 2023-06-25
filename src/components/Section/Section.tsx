import { motion, Variants } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionUp } from '../../utils/const/animation'
import { MTitle, TitleType } from '../../UI/Title/Title'
import classes from './Section.module.scss'

export enum SectionType {
    fullSize = classes.section___fullSize
}
interface ISection {
    title?: string;
    className?: string;
    children?: ReactNode | ReactNode[];
    sectionType?: SectionType;
    sectionAnimation?: Variants;

}
const Section: FC<ISection> = (props) => {
    const { title, className = '', children, sectionType, sectionAnimation } = props

    return (
        <section className={`${classes.section} ${sectionType ? sectionType : ''} ${className}`}>
            <motion.div
                className='container'
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                viewport={{ once: true, margin: "-90px" }}
                variants={sectionAnimation}
            >
                {title &&
                    <div>
                        <MTitle
                            titleType={[TitleType.posCetner, TitleType.lineCenter, TitleType.sectionTitle]}
                            variants={MotionUp}
                        >
                            {title}
                        </MTitle>

                    </div>
                }
                {children}
            </motion.div>
        </section >
    )
}

export default Section
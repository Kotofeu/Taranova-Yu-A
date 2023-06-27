import { motion } from 'framer-motion';
import React, { FC } from 'react'
import classes from './Title.module.scss'
export enum TitleType {
    primaryTitle = classes.title___primaryTitle,
    posCetner = classes.title___posCetner,
    lineCenter = classes.title___lineCenter,
    lineLeft = classes.title___lineLeft,
    sectionTitle = classes.title___sectionTitle,
}
interface ITitleProps extends React.AllHTMLAttributes<HTMLHeadElement> {
    titleType?: TitleType[];
}

const Title: FC<ITitleProps> =
    React.memo(
        React.forwardRef(
            (props, ref: React.LegacyRef<HTMLHeadingElement>) => {
                const { className = '', titleType, children } = props
                const classList: string = titleType ? titleType.join(' ') : ''
                const isSectionTitle: boolean = classList.includes(TitleType.sectionTitle.toString())
                const isPrimaryTitle: boolean = classList.includes(TitleType.primaryTitle.toString())
                const classNameString: string = `${classes.title} ${classList} ${className}`
                if (isPrimaryTitle) {
                    return (
                        <h1 className={classNameString} ref={ref}>
                            {children}
                        </h1>
                    )
                }
                if (isSectionTitle) {
                    return (
                        <h2 className={classNameString} ref={ref}>
                            {children}
                        </h2>
                    )
                }
                return (
                    <h5 className={classNameString} ref={ref}>
                        {children}
                    </h5>
                )
            }))

export default Title
export const MTitle = motion(Title);
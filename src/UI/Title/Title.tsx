import { motion } from 'framer-motion';
import React, { FC } from 'react'
import classes from './Title.module.scss'
interface ITitleProps extends React.AllHTMLAttributes<HTMLHeadElement> {
    titleType?: TitleType[];
}
export enum TitleType {
    posCetner = classes.posCetner,
    lineCenter = classes.lineCenter,
    lineRight = classes.lineRight,
    sectionTitle = classes.sectionTitle,
}
const Title: FC<ITitleProps> =
    React.memo(
        React.forwardRef(
            (props, ref: React.LegacyRef<HTMLHeadingElement>) => {
                const { className, titleType, children } = props
                const classList: any = titleType ? titleType.join(' ') : ''
                const isSectionTitle: boolean = classList.includes(TitleType.sectionTitle)
                const classNeme: string = `${className
                    ? className
                    : ''
                    } ${classes.title} ${titleType
                        ? `${classList}`
                        : ''
                    }`
                return (
                    <>
                        {isSectionTitle
                            ? <h2 className={classNeme} ref={ref}>
                                {children}
                            </h2>
                            :
                            <h5 className={classNeme} ref={ref}>
                                {children}
                            </h5>
                        }
                    </>
                )
            }))

export default Title
export const MTitle = motion(Title);
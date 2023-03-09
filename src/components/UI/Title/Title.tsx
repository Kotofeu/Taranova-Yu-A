import { motion } from 'framer-motion';
import React, { FC, ReactNode } from 'react'
import './Title.scss'
interface ITitleProps {
    className?: string;
    titleType?: TitleType[];
    children: ReactNode | ReactNode[];

}
export enum TitleType {
    posCetner = 'title--posCetner',
    lineCenter = 'title--lineCenter',
    lineRight = 'title--lineRight',
    sectionTitle = 'title--sectionTitle'
}
const Title: FC<ITitleProps> =
    React.memo(
        React.forwardRef(
            (props, ref: React.LegacyRef<HTMLHeadingElement>) => 
            {
                const { className, titleType, children } = props
                const classList: string = titleType ? titleType.join(' ') : ''
                const isSectionTitle: boolean = classList.includes(TitleType.sectionTitle)
                const classNeme: string = `${className
                    ? className
                    : ''
                    } title ${titleType
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
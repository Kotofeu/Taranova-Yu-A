import React, { FC } from 'react'
import {motion} from 'framer-motion'
interface IMyPictureProps {
    src: string;
    srcWebp?: string;
    className?: string;
    alt: string;
}
const Picture: FC<IMyPictureProps> =  React.memo(React.forwardRef((props, ref: React.LegacyRef<HTMLElement>) => {
    const { src, srcWebp, className, alt } = props
    const imgBroke = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = "https://doukom.ru/upload/iblock/1289/67/product_image_113167_1103527.jpg"
    }
    return (
        <picture ref={ref}>
            <source srcSet={srcWebp} type="image/webp" />
            <img className={className} src={src} alt={alt} onError={imgBroke}/>
        </picture>
    )
}))

export default Picture
export const MPicture = motion(Picture)
import React, { FC } from 'react'
import { motion } from 'framer-motion'
import imageFail from '../assets/images/NoPhoto.jpg'
interface IMyPictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    srcWebp?: string;
}
const Picture: FC<IMyPictureProps> = React.memo(
    React.forwardRef(
        (props, ref: React.LegacyRef<HTMLElement>) => {
            const { src, srcWebp, className, alt, onClick } = props
            const imgBroke = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
                event.currentTarget.src = imageFail
            }
            return (
                <picture ref={ref}>
                    <source srcSet={srcWebp} type="image/webp" />
                    <img
                        className={className}
                        src={src}
                        alt={alt}
                        onError={imgBroke}
                        onClick = {onClick}
                    />
                </picture>
            )
        }))

export default Picture
export const MPicture = motion(Picture)
import { FC, ReactNode, memo, forwardRef } from 'react'
import classes from './Button.module.scss'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface IButtonProps {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
    beforeImg?: string,
    afterImg?: string,
    routeOption?: string,
}
const Button: FC<IButtonProps> = memo(
    forwardRef(
        (props, ref: React.LegacyRef<HTMLButtonElement>) => {
            const { children, onClick, className, beforeImg, afterImg, routeOption } = props
            const router = useNavigate()
            const startRoute = () => {
                if (routeOption) router(routeOption)
            }
            return (
                <button
                    className={`${className ? className : ''} ${classes.button} `}
                    onClick={routeOption ? startRoute : onClick}
                    ref={ref}
                >
                    {beforeImg ?
                        <img className={classes.before} src={beforeImg} alt="" />
                        : null
                    }
                    {children}
                    {afterImg ?
                        <img className={classes.after} src={afterImg} alt="" />
                        : null
                    }
                </button>
            )
        }))
export default Button
export const MButton = motion(Button)
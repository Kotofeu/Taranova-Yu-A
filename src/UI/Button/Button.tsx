import { FC, ReactNode } from 'react'
import classes from './Button.module.scss'
interface IButtonProps {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
    beforeImg?: string,
    afterImg?: string,
}
const Button: FC<IButtonProps> = (props) => {
    const { children, onClick, className, beforeImg, afterImg } = props
    return (
        <button
            className={`${className ? className : ''} ${classes.button} `}
            onClick={onClick}
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
}

export default Button
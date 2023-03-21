import { FC, ReactNode } from 'react'
import classes from './Button.module.scss'
interface IButtonProps {
    children: ReactNode,
    onClick?: () => void,
    className?: string
}
const Button: FC<IButtonProps> = (props) => {
    const { children, onClick, className } = props
    return (
        <button
            className={`${className ? className : ''} ${classes.button}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
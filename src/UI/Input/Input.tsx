import { ChangeEvent, memo, FC, HTMLInputTypeAttribute} from 'react'

import infoImage from '../../assets/icons/info.svg'
import classes from './Input.module.scss'
interface IInput {
    className?: string;
    placeholder?: string;
    name?: string;
    id?: string;
    value?: string | number | undefined;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
    error?: string;
    title?: string
}
const Input: FC<IInput> = memo((props) => {
    const {
        className = '',
        type = 'text',
        title,
        placeholder,
        error,
        name,
        id = name ?? 'input',
        value,
        onChange
    } = props
    return (
        <div className={
            [
                classes.inputBox,
                className,
                error ? classes.inputBox___isError : ''
            ].join(' ')}>
            <input className={classes.inputBox_input}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                autoComplete='off'
                title = {error??title}
            />
            <label className={classes.inputBox_label}
                htmlFor={id}
            >
                {placeholder}
            </label>
            {
                title || error
                    ? <img
                        className={classes.inputBox_info}
                        src={infoImage}
                        alt='more info'
                        data-descr={error ?? title}
                    />
                    : null

            }

        </div>
    )
})

export default Input
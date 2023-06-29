import { ChangeEvent, memo, FC, HTMLInputTypeAttribute } from 'react'

import PhoneInput from 'react-phone-number-input/input';
import infoImage from '../../assets/icons/info.svg'
import classes from './Input.module.scss'
interface IInput {
    className?: string;
    placeholder?: string;
    name?: string;
    id?: string;
    value: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeWithValue?: (number: string) => void;
    type?: HTMLInputTypeAttribute;
    error?: string;
    title?: string
}
const Input: FC<IInput> = memo((props) => {
    const {
        className = '',
        type = 'text',
        placeholder,
        title = placeholder,
        error,
        name,
        id = name ?? 'input',
        value,
        onChange,
        onChangeWithValue
    } = props
    return (
        <div className={
            [
                classes.inputBox,
                className,
                error ? classes.inputBox___isError : ''
            ].join(' ')}>
            {
                type === 'number' && onChangeWithValue
                    ? <PhoneInput
                        className={classes.inputBox_input}
                        defaultCountry='RU'
                        onChange={(phone) => onChangeWithValue(phone?.toString() || '')}
                        international
                        withCountryCallingCode
                        value={value.toString()}
                        id={name}
                        title={error ?? title}
                        placeholder={placeholder}
                        name={name}
                    />
                    : <input className={classes.inputBox_input}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        value={value}
                        onChange={onChange}
                        title={error ?? title}
                    />
            }

            <label className={classes.inputBox_label}
                htmlFor={id}
            >
                {placeholder}
            </label>
            {
                error
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
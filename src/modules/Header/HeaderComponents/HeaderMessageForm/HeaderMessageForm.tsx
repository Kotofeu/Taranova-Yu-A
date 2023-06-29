import { FC, useState, useCallback, ChangeEvent, FormEvent, useEffect, memo } from 'react'
import Button from '../../../../UI/Button/Button';

import classes from './HeaderMessageForm.module.scss'
import { emailValidation } from '../../../../utils/helpers/validationFields';
import { appealStore } from '../../../../store';
import { isValidPhoneNumber } from 'react-phone-number-input/input';
import MultipleFileInput from '../../../../components/MultipleFileInput/MultipleFileInput';
import Input from '../../../../UI/Input/Input';
import Title from '../../../../UI/Title/Title';

const NAME = 'name'
const PHONE = 'phone'
const EMAIL = 'email'
const SUBJECT = 'subject'
const TEXT = 'text'
const FILES = 'files'
const FILE = 'file'
const DATA = 'data'
interface IHeaderMessageForm {
    className?: string;
    closeModal: () => void;
}

interface IMessageBase {
    [NAME]: string;
    [PHONE]: string;
    [EMAIL]: string;
    [SUBJECT]: string;
    [TEXT]: string;

}
interface IMessageForm extends IMessageBase {
    [FILES]?: FileList;
}
interface IMessageErrors extends IMessageBase {
    [FILES]: string;
}
const defaultFields = {
    [NAME]: '',
    [PHONE]: '',
    [EMAIL]: '',
    [SUBJECT]: '',
    [TEXT]: '',
}
const HeaderMessageForm: FC<IHeaderMessageForm> = memo((props) => {
    const { className = '', closeModal } = props;

    const [messageFields, setMessageFields] = useState<IMessageForm>(defaultFields);
    const [errors, setErrors] = useState<Partial<IMessageErrors>>(defaultFields);

    const checkError = (field: keyof IMessageErrors, errorText: string, isError: boolean = true): boolean => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: isError ? errorText : undefined }));
        return isError;
    };
    const sendMessage = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (messageFields) {
            let isValidForm = true;

            if (checkError(EMAIL, 'Введите email в формате example@xxxx.xx', !emailValidation(messageFields[EMAIL]))) isValidForm = false
            if (checkError(PHONE, 'Введите телефон в формате +7 999 999 99 99', !isValidPhoneNumber(messageFields[PHONE]))) isValidForm = false
            if (checkError(NAME, 'Введенное ФИО не должно быть короче 2 символов', messageFields[NAME].length < 2)) isValidForm = false
            if (checkError(SUBJECT, 'Введите тему обращения', !messageFields[SUBJECT])) isValidForm = false
            if (checkError(TEXT, 'Введите текст обращения', !messageFields[TEXT])) isValidForm = false
            if (errors[FILES]) isValidForm = false;
            if (!isValidForm) {
                return
            }
            const formData = new FormData();
            formData.append(DATA, JSON.stringify({
                [NAME]: messageFields[NAME],
                [PHONE]: messageFields[PHONE],
                [EMAIL]: messageFields[EMAIL],
                [SUBJECT]: messageFields[SUBJECT],
                [TEXT]: messageFields[TEXT]
            }))
            if (messageFields[FILES]) {
                for (let i = 0; i < messageFields[FILES].length; i++) {
                    formData.append(`${FILE}${i}`, messageFields[FILES][i], messageFields[FILES][i].name)
                }
            }
            appealStore.loadCode(formData)
        }
    };

    const onAddFiles = useCallback((files: FileList | undefined) => {
        setMessageFields((prevFields) => ({ ...prevFields, [FILES]: files }));
    }, []);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
            event.preventDefault();
            setMessageFields((prevFields) => ({ ...prevFields, [event.target.name]: event.target.value }));
        },
        []
    );
    const hanglerPhoneChange = useCallback(
        (phone: string) => {
            setMessageFields(prevFields => (
                {
                    ...prevFields,
                    [PHONE]: phone
                }
            ))
        },
        []
    )
    const resetForm = useCallback((): void => {
        setMessageFields(defaultFields);
        setErrors({});
    }, []);
    useEffect(() => {
        return (() => resetForm())
    }, [resetForm])
    return (
        <form className={[classes.messageForm, className].join(' ')} onSubmit={sendMessage}>

            <div className={classes.messageForm_inputBox}>
                <Input
                    className={classes.messageForm_input}
                    placeholder='Ваше ФИО *'
                    error={errors[NAME]}
                    name={NAME}
                    value={messageFields[NAME]}
                    onChange={handleChange}
                />
                <Input
                    className={classes.messageForm_input}
                    placeholder='Номер телефона *'
                    error={errors[PHONE]}
                    name={PHONE}
                    value={messageFields[PHONE]}
                    type='number'
                    onChangeWithValue={hanglerPhoneChange}
                />
            </div>
            <Input
                className={classes.messageForm_input}
                placeholder='Электронная почта *'
                error={errors[EMAIL]}
                name={EMAIL}
                value={messageFields[EMAIL]}
                onChange={handleChange}
            />
            <Input
                className={classes.messageForm_input}
                placeholder='Тема обращения *'
                error={errors[SUBJECT]}
                name={SUBJECT}
                value={messageFields[SUBJECT]}
                onChange={handleChange}
            />
            <div className={
                [
                    classes.messageForm_text,
                    errors[TEXT] ? classes.messageForm_text___error : ''
                ].join(' ')}
            >
                <Title className={classes.messageForm_textTitle}
                    title={errors[TEXT]}
                >
                    <span>
                        Ваше обращение *
                    </span>
                    {
                        errors[TEXT]
                            ? <span className={classes.messageForm_textError}>
                                {errors[TEXT]}
                            </span>
                            : null
                    }
                </Title>
                <textarea
                    className={classes.messageForm_textArea}
                    name={TEXT}
                    value={messageFields[TEXT]}
                    onChange={handleChange}
                    placeholder='Текст вашего ображения'
                />

            </div>
            <MultipleFileInput
                className={classes.messageForm_fileInput}
                values={messageFields[FILES]}
                onChange={onAddFiles}
                setError={(error) => checkError(FILES, error || '')}
                error={errors[FILES]}
                title='Перенесите файлы или нажмите на поле'
            />
            <div className={classes.messageForm_buttonBox}>
                <Button
                    onClick={closeModal}
                    className={classes.messageForm_button}
                >
                    Отмена
                </Button>
                <Button
                    type='submit'
                    className={
                        [
                            classes.messageForm_button,
                            classes.messageForm_button___send
                        ].join(' ')
                    }
                >
                    Отправить
                </Button>

            </div>
        </form>
    )
})

export default HeaderMessageForm
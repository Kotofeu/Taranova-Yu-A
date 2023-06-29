import { FC, memo, useState, useCallback, ChangeEvent, FormEvent } from 'react'
import Modal from '../../../../components/Modal/Modal'
import Button from '../../../../UI/Button/Button';

import classes from './HeaderMessageForm.module.scss'
import { emailValidation } from '../../../../utils/helpers/validationFields';
import { $host } from '../../../../store';
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
interface IHeaderMessageForm {
    className?: string;
    isOpen: boolean;
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
    [FILES]?: FileList
}
interface IMessageErrors extends IMessageBase {
    [FILES]: string
}
const defaultFields = {
    [NAME]: '',
    [PHONE]: '',
    [EMAIL]: '',
    [SUBJECT]: '',
    [TEXT]: '',
}
const HeaderMessageForm: FC<IHeaderMessageForm> = memo((props) => {
    const { className = '', isOpen, closeModal } = props;

    const [messageFields, setMessageFields] = useState<IMessageForm>(defaultFields);
    const [errors, setErrors] = useState<Partial<IMessageErrors>>(defaultFields);

    const checkError = (field: keyof IMessageForm, errorText: string, isError: boolean = true): boolean => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: isError ? errorText : undefined }));
        return !isError;
    };
    const sendMessage = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (messageFields) {
            let isValidForm = true;

            isValidForm = checkError(EMAIL, 'Введите email в формате example@xxxx.xx', !emailValidation(messageFields[EMAIL]));
            isValidForm = checkError(PHONE, 'Введите телефон в формате +7 999 999 99 99', !isValidPhoneNumber(messageFields[PHONE]));
            isValidForm = checkError(NAME, 'Введенное ФИО не должно быть короче 2 символов', messageFields[NAME].length < 2);
            isValidForm = checkError(SUBJECT, 'Введите тему обращения', !messageFields[SUBJECT]);
            isValidForm = checkError(TEXT, 'Введите текст обращения', !messageFields[TEXT]);
            isValidForm = !errors[FILES]
            if (!isValidForm) return;
            const formData = new FormData();
            Object.entries(messageFields).forEach(([key, value]) => {
                if (key === FILES && value) {
                    for (let i = 0; i < value.length; i++) {
                        formData.append(FILES, value[i], value[i].name);
                    }
                } else {
                    formData.append(key, value);
                }
            });
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
        closeModal();
    }, [defaultFields, closeModal]);
    return (
        <Modal isOpen={isOpen} closeModal={resetForm}>
            <div
                className={[classes.messageModal, className].join(' ')}
            >
                <form className={classes.messageModal_form} onSubmit={sendMessage}>
                    <h3 className={classes.messageModal_title}>
                        Отправка обращения
                    </h3>
                    <div className={classes.messageModal_inputBox}>
                        <Input
                            className={classes.messageModal_input}
                            placeholder='Ваше ФИО *'
                            error={errors[NAME]}
                            name={NAME}
                            value={messageFields[NAME]}
                            onChange={handleChange}
                        />
                        <Input
                            className={classes.messageModal_input}
                            placeholder='Номер телефона *'
                            error={errors[PHONE]}
                            name={PHONE}
                            value={messageFields[PHONE]}
                            type='number'
                            onChangeWithValue={hanglerPhoneChange}
                        />
                    </div>
                    <Input
                        className={classes.messageModal_input}
                        placeholder='Электронная почта *'
                        error={errors[EMAIL]}
                        name={EMAIL}
                        value={messageFields[EMAIL]}
                        onChange={handleChange}
                    />
                    <Input
                        className={classes.messageModal_input}
                        placeholder='Тема обращения *'
                        error={errors[SUBJECT]}
                        name={SUBJECT}
                        value={messageFields[SUBJECT]}
                        onChange={handleChange}
                    />
                    <div className={
                        [
                            classes.messageModal_text,
                            errors[TEXT] ? classes.messageModal_text___error : ''
                        ].join(' ')}
                    >
                        <Title className={classes.messageModal_textTitle}
                            title={errors[TEXT]}
                        >
                            <span>
                                Ваше обращение *
                            </span>
                            {
                                errors[TEXT]
                                    ? <span className={classes.messageModal_textError}>
                                        {errors[TEXT]}
                                    </span>
                                    : null
                            }
                        </Title>
                        <textarea
                            className={classes.messageModal_textArea}
                            name={TEXT}
                            value={messageFields[TEXT]}
                            onChange={handleChange}
                            placeholder='Текст вашего ображения'
                        />

                    </div>
                    <MultipleFileInput
                        className={classes.messageModal_fileInput}
                        values={messageFields[FILES]}
                        onChange={onAddFiles}
                        setError={(error) => checkError(FILES, error || '')}
                        error={errors[FILES]}
                        title='Перенесите файлы или нажмите на поле'
                    />
                    <div className={classes.messageModal_buttonBox}>
                        <Button
                            type='submit'
                            className={
                                [
                                    classes.messageModal_button,
                                    classes.messageModal_button___send
                                ].join(' ')
                            }
                        >
                            Отправить
                        </Button>
                        <Button
                            onClick={resetForm}
                            className={classes.messageModal_button}
                        >
                            Отмена
                        </Button>
                    </div>
                </form>

            </div>
        </Modal>
    )
})

export default HeaderMessageForm
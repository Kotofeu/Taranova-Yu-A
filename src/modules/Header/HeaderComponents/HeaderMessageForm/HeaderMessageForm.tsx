import { FC, memo, useState, useCallback, ChangeEvent, FormEvent, SetStateAction } from 'react'
import Modal from '../../../../components/Modal/Modal'
import Button from '../../../../UI/Button/Button';

import classes from './HeaderMessageForm.module.scss'
import { emailValidation } from '../../../../utils/helpers/validationFields';
import { $host } from '../../../../store';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';
import MultipleFileInput from '../../../../components/MultipleFileInput/MultipleFileInput';
import Input from '../../../../UI/Input/Input';
import Title from '../../../../UI/Title/Title';

import infoImage from '../../../../assets/icons/info.svg'
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

interface IMessageForm {
    [NAME]: string;
    [PHONE]: string;
    [EMAIL]: string;
    [SUBJECT]: string;
    [TEXT]: string;
    [FILES]?: FileList;
}

const HeaderMessageForm: FC<IHeaderMessageForm> = memo((props) => {
    const { className = '', isOpen, closeModal } = props;
    const [messageFields, setMessageFields] = useState<IMessageForm>({
        [NAME]: '',
        [PHONE]: '',
        [EMAIL]: '',
        [SUBJECT]: '',
        [TEXT]: '',
        [FILES]: undefined
    });
    const [nameError, setNameError] = useState<string>();
    const [phoneError, setPhoneError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();
    const [subjectError, setSubjectError] = useState<string>();
    const [textError, setTextError] = useState<string>();

    const checkError = (isError: boolean, setState: (value: SetStateAction<string | undefined>) => void, errorText: string): boolean => {
        if (isError) {
            setState(errorText);
            return false;
        } else {
            setState(undefined);
            return true;
        }
    };

    const sendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (messageFields) {
            let isValidForm = true;
            isValidForm = checkError(!emailValidation(messageFields[EMAIL]), setEmailError, "Введите email в формате example@xxxx.xx");
            isValidForm = checkError(!isValidPhoneNumber(messageFields[PHONE]), setPhoneError, "Введите телефон в формате +7 999 999 99 99");
            isValidForm = checkError(!messageFields[NAME], setNameError, "Введите ваше ФИО");
            isValidForm = checkError(messageFields[NAME].length < 2, setNameError, "Введенное ФИО не должно быть короче 2 символов");
            isValidForm = checkError(!messageFields[SUBJECT], setSubjectError, "Введите тему сообщения");
            isValidForm = checkError(!messageFields[TEXT], setTextError, "Введите текст сообщения");

            if (!isValidForm) return;

            const formData = new FormData();
            formData.append(NAME, messageFields[NAME]);
            formData.append(PHONE, messageFields[PHONE]);
            formData.append(EMAIL, messageFields[EMAIL]);
            formData.append(SUBJECT, messageFields[SUBJECT]);
            formData.append(TEXT, messageFields[TEXT]);

            if (messageFields[FILES]) {
                for (let i = 0; i < messageFields[FILES].length; i++) {
                    formData.append(FILES, messageFields[FILES][i], messageFields[FILES][i].name);
                }
            }

            console.log(formData.getAll(TEXT));
            //$host.post('/addAppeal', formData);
        } else {
            alert('all');
        }
    };

    const onAddFiles = (files: FileList | undefined) => {
        setMessageFields((prev) => ({
            ...prev,
            [FILES]: files
        }));
    };

    const onChangePhone = (phone: string) => {
        setMessageFields((prev) => ({
            ...prev,
            [PHONE]: phone,
        }));
    };

    const onChangeInputHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
            event.preventDefault();
            setMessageFields((prev: IMessageForm) => ({
                ...prev,
                [event.target.name]: event.target.value ?? '',
                files: prev.files
            }));
        },
        []
    );
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div
                className={[classes.messageModal, className].join(' ')}
            >
                <form className={classes.messageModal_form} onSubmit={sendMessage}>
                    <h3 className={classes.messageModal_title}>
                        Отправка сообщения
                    </h3>
                    <div className={classes.messageModal_inputBox}>
                        <Input
                            className={classes.messageModal_input}
                            placeholder='Ваше ФИО *'
                            error={nameError}
                            name={NAME}
                            value={messageFields[NAME]}
                            onChange={onChangeInputHandler}
                        />
                        <div className={classes.messageModal_phone}>
                            <span className={classes.messageModal_phoneLabel}>
                                Ваш номер телефона
                            </span>
                            <PhoneInput
                                className={classes.messageModal_phoneInput}
                                country='RU'
                                onChange={(phone) => onChangePhone(phone?.toString() || '')}
                                international
                                withCountryCallingCode
                                value={messageFields[PHONE]}
                            />

                        </div>

                    </div>
                    <Input
                        className={classes.messageModal_input}
                        placeholder='Ваш адрес электронной почты *'
                        error={emailError}
                        name={EMAIL}
                        value={messageFields[EMAIL]}
                        onChange={onChangeInputHandler}
                    />
                    <Input
                        className={classes.messageModal_input}
                        placeholder='Тема сообщения *'
                        error={subjectError}
                        name={SUBJECT}
                        value={messageFields[SUBJECT]}
                        onChange={onChangeInputHandler}
                    />
                    <div className={
                        [
                            classes.messageModal_text,
                            textError ? classes.messageModal_text___error : ''
                        ].join(' ')}
                    >
                        <Title className={classes.messageModal_textTitle}
                            title={textError}
                        >
                            <span>Ваше сообщение *</span>
                            {
                                textError
                                    ? <img
                                        className={classes.messageModal_textTitleImg}
                                        src={infoImage}
                                        alt='Info'
                                    />
                                    : null
                            }
                        </Title>
                        <textarea
                            className={classes.messageModal_textArea}
                            name={TEXT}
                            value={messageFields[TEXT]}
                            onChange={onChangeInputHandler}
                        />

                    </div>
                    <MultipleFileInput handleFilesChange={onAddFiles} />
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
                            onClick={closeModal}
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
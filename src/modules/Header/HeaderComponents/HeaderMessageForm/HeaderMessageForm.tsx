import { FC, memo, useState, useCallback, ChangeEvent, FormEvent } from 'react'
import Modal from '../../../../components/Modal/Modal'
import Button from '../../../../UI/Button/Button';

import classes from './HeaderMessageForm.module.scss'
import { emailValidation } from '../../../../utils/helpers/validationFields';
import { $host } from '../../../../store';
import PhoneInput from 'react-phone-number-input';
const NAME = 'name'
const PHONE = 'phone'
const EMAIL = 'email'
const THEME = 'theme'
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
    [THEME]: string;
    [TEXT]: string;
    [FILES]?: FileList;
}
const HeaderMessageForm: FC<IHeaderMessageForm> = memo((props) => {
    const { className = '', isOpen, closeModal } = props
    const [messageFields, setMessageFields] = useState<IMessageForm>({
        [NAME]: '',
        [PHONE]: '',
        [EMAIL]: '',
        [THEME]: '',
        [TEXT]: '',
        [FILES]: undefined
    })
    const sendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (messageFields) {
            const isValidEmail = emailValidation(messageFields.email)
            if (!isValidEmail) {
                alert('email')
                return;
            }
            if (!messageFields.name && messageFields.name.length < 2) {
                alert('name')
                return;
            }
            if (!messageFields.theme) {
                alert('theme')
                return;
            }
            if (!messageFields.text) {
                alert('texe')
                return;
            }
            const formData = new FormData()
            formData.append("name", messageFields.name)
            formData.append("phone", messageFields.phone)
            formData.append("email", messageFields.email)
            formData.append("theme", messageFields.theme)
            formData.append("text", messageFields.text)

            $host.post('', formData)
        }
        else {
            alert('all')
        }
    }
    const onChangeInputHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setMessageFields((prev: IMessageForm) => ({
                ...prev,
                [event.target.name]: event.target.value ?? '',
                files: prev.files
            }));
        },
        []
    ); return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div
                className={[classes.messageModal, className].join(' ')}
            >
                <form onSubmit={sendMessage}>
                    <input placeholder='Выше имя' type="text" name={NAME} value={messageFields[NAME]} onChange={onChangeInputHandler} />
                    <input placeholder='Выш адрес электронной почты' type="text" name={EMAIL} value={messageFields[EMAIL]} onChange={onChangeInputHandler} />
                    <PhoneInput
                        international
                        defaultCountry="RU"
                        placeholder='Введите ваш номер телефона'
                        value={messageFields[PHONE]}
                        onChange={() => onChangeInputHandler}
                    />

                    <input placeholder='Тема сообщения' type="text" name={THEME} value={messageFields[THEME]} onChange={onChangeInputHandler} />
                    <input placeholder='Выше сообщение' type="text" name={TEXT} value={messageFields[TEXT]} onChange={onChangeInputHandler} />
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
                            Отправить сообщение
                        </Button>
                        <Button
                            onClick={closeModal}
                            className={classes.messageModal_button}
                        >
                            Закрыть окно
                        </Button>
                    </div>
                </form>

            </div>
        </Modal>
    )
})

export default HeaderMessageForm
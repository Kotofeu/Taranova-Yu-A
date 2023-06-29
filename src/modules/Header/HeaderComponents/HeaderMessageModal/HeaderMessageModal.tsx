import { FC, useEffect } from 'react';
import Modal from '../../../../components/Modal/Modal';
import { appealStore } from '../../../../store';
import Loader from '../../../../components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import HeaderMessageForm from '../HeaderMessageForm/HeaderMessageForm';
import classes from './HeaderMessageModal.module.scss';
import Button from '../../../../UI/Button/Button';

interface IHeaderMessageForm {
    className?: string;
    isOpen: boolean;
    closeModal: () => void;
}

const HeaderMessageModal: FC<IHeaderMessageForm> = observer((props) => {
    const { className = '', isOpen, closeModal } = props;

    console.log(appealStore.isEnable)
    useEffect(() => {
        const storedDate = localStorage.getItem(appealStore.lastAppealCreate);
        const timeToNext = (): number => {
            const storedTimestamp = parseInt(storedDate!, 10);
            const currentTime = Date.now();
            return storedTimestamp - currentTime;
        };
        if (storedDate) {
            if (timeToNext() < 0) {
                appealStore.setIsEnable(true);
                localStorage.removeItem(appealStore.lastAppealCreate);
            } else {
                appealStore.setIsEnable(false);
            }
        } else {
            appealStore.setIsEnable(true);
        }
    }, [isOpen]);

    const formatTimeDelay = (delay: number): string => {
        const hours = Math.floor(delay / 1000 / 60 / 60);
        const minutes = Math.floor(delay / 1000 / 60) - hours * 60;
        const seconds = Math.floor(delay / 1000) % 60;
        return `${hours ? `${hours} ч.` : ''} ${minutes ? `${minutes} мин.` : ''} ${seconds ? `${seconds} сек.` : ''}`;
    };

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className={[classes.messageModal, className].join(' ')}>
                {appealStore.isEnable ? (
                    <h2 className={classes.messageModal_title}>
                        <span>Отправка обращения</span>
                        <span className={classes.messageModal_titleError}>{appealStore.error?.message}</span>
                    </h2>
                ) : null}

                {!appealStore.isEnable ? (
                    <div>
                        <h4 className={classes.messageModal_subTitle}>
                            {appealStore.code ? (
                                <>
                                    Спасибо, ваше обращение #{appealStore.code} зарегистрировано.
                                </>
                            ) : (
                                <>
                                    Спасибо, ваше обращение зарегистрировано.
                                </>
                            )}{' '}
                            <span>Следующее обращение можно отправить через {formatTimeDelay(appealStore.delay)}</span>
                        </h4>
                        <Button className={classes.messageModal_button} onClick={closeModal}>
                            Закрыть
                        </Button>
                    </div>
                ) : (
                    <HeaderMessageForm className={classes.messageModal_form} closeModal={closeModal} />
                )}

                {appealStore.isLoading ? (
                    <div className={classes.messageModal_loader}>
                        <Loader />
                    </div>
                ) : null}
            </div>
        </Modal>
    );
});

export default HeaderMessageModal;
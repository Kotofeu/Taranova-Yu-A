import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import classes from './Modal.module.scss'
interface IModal {
    key?: string;
    selectedId: any;
    children: ReactNode;
    closeModal: () => void;
}
const Modal: FC<IModal> = (props) => {
    const { key = 'modal', selectedId, children, closeModal } = props
    return (
        <AnimatePresence onExitComplete={closeModal}>
            {selectedId && (
                <motion.div className={[classes.modal, 'container'].join(' ')} key={key}>
                    {children}
                    <motion.button
                        onClick={closeModal}
                        className={classes.modal_close}
                        initial={{opacity: 0}}
                        exit={{opacity: 0}}
                        animate={{opacity: 1}}
                    />
                </motion.div >
            )}
        </AnimatePresence>
    )
}

export default Modal
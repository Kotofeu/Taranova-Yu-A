import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import classes from './Modal.module.scss'
interface IModal {
    isOpen: boolean;
    children: ReactNode;
    closeModal: () => void;
}
const Modal: FC<IModal> = (props) => {
    const { isOpen, children, closeModal } = props
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={classes.modal}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className={[classes.modal_inner, 'container'].join(' ')}
                    >
                        {children}

                    </motion.div>
                    <motion.button
                            onClick={closeModal}
                            className={classes.modal_close}
                        />
                </motion.div >
            )}
        </AnimatePresence>
    )
}

export default Modal
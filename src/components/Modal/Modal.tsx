import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import classes from './Modal.module.scss'
interface IModal {
    selectedId: any;
    children: ReactNode;
    closeModal: () => void;
}
const Modal: FC<IModal> = (props) => {
    const { selectedId, children, closeModal } = props
    return (
        <AnimatePresence>
            {selectedId && (
                <motion.div className={[classes.modal, 'container'].join(' ')}>
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
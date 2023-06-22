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
                <motion.div className={classes.modal}>
                    <motion.div
                        className={[classes.modalInner, 'container'].join(' ')}
                    >
                        {children}
                    </motion.div>
                    <motion.button
                        onClick={closeModal}
                        className={classes.modalClose}
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
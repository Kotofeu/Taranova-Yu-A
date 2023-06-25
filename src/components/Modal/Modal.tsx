import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import classes from './Modal.module.scss'
interface IModal {
    key?: string;
    selectedId: string | undefined;
    children: ReactNode;
    closeModal: () => void;
}
const Modal: FC<IModal> = (props) => {
    const { key = 'modal', selectedId, children, closeModal } = props
    return (
        <AnimatePresence initial={false}>
            {selectedId && (
                <motion.div
                    className={classes.modal}
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId={selectedId}>
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
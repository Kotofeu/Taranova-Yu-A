import { AnimatePresence, motion, useWillChange} from 'framer-motion'
import { FC, ReactNode } from 'react'
import classes from './Modal.module.scss'
interface IModal {
    selectedId: any;
    children: ReactNode;
    closeModal: () => void;
}
const Modal: FC<IModal> = (props) => {
    const { selectedId, children, closeModal } = props
    const willChange = useWillChange()
    return (
        <AnimatePresence>
            {selectedId && (
                <motion.div
                    className={classes.modal}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{willChange}}
                >
                    <motion.div
                        className={classes.modal_inner}
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
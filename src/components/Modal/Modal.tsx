import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionParent } from '../../const/animation'
import classes from './Modal.module.scss'
interface IModal {
    selectedId: string | null,
    children: ReactNode,
    closeModal: () => void
}
const Modal: FC<IModal> = (props) => {
    const { selectedId, children, closeModal } = props
    return (
        <AnimatePresence>
            {selectedId && (
                <motion.div className={classes.modal}>
                    <motion.div className='container'>
                        <motion.div className={classes.modalInner}>
                            <motion.div layoutId={selectedId} className={classes.layoutBox}>
                                {children}
                            </motion.div>
                        </motion.div>
                        <motion.button
                            onClick={closeModal}
                            className={classes.modalClose}
                            initial={ANIMATION_HIDDEN}
                            exit={ANIMATION_HIDDEN}
                            animate={ANIMATION_VISIBLE}
                            variants={MotionParent}
                        />
                    </motion.div >
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
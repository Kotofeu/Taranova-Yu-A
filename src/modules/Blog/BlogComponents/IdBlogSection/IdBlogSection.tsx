import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'
import Section, { SectionType } from '../../../../components/Section/Section';
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildRight, MotionChildUp, MotionDown, MotionFlip, MotionLeft, MotionParent, MotionRight, MotionUp } from '../../../../const/animation';
import BlogsStore from '../../../../store/BlogsStore';
import Picture, { MPicture } from '../../../../UI/Picture'
import BlogText from '../BlogText/BlogText';
import classes from './IdBlogSection.module.scss'
import { useState } from 'react';
import DateTime from '../../../../UI/DateTime/DateTime';
import { MGrid } from '../../../../components/Grid/Grid';
import Modal from '../../../../components/Modal/Modal';
export const IdBlogSection = observer(() => {
    const params = useParams();
    const [selectedId, setSelectedId] = useState<string | null>('')

    if (!params.id) {
        return <h1>Ошибка</h1>
    }
    const blog = BlogsStore.getSelectedBlog(+params.id)
    if (!blog) {
        return <h1>Ошибка</h1>
    }

    const itemsCount = blog.attachments.length
    const closeModal = () => {
        setSelectedId(null)
    }
    return (
        <Section
            className={classes.blog}
            sectionAnimation={MotionParent}
            sectionType={SectionType.fullSize}
        >
            <DateTime className={classes.dateTime} date={blog.date} />
            <BlogText text={blog.text} animationType={MotionChildRight} />
            <MGrid
                className={classes.grid}
                itemsCount={itemsCount}
                initial={ANIMATION_HIDDEN}
                whileInView={ANIMATION_VISIBLE}
                variants={MotionParent}
            >
                {blog.attachments.map((image, index) => {
                    const imageSrc = BlogsStore.getItemImage(blog.attachments[index], 1080)
                    if (image.type === 'photo') {
                        return (
                            <motion.div
                                layoutId={imageSrc}
                                onClick={() => setSelectedId(imageSrc || '')}
                                key={image.photo?.id}
                                variants={MotionChildUp}
                            >
                                <Picture
                                    className={classes.itemImage}
                                    src={imageSrc}
                                />

                            </motion.div>
                        )
                    }
                    if (image.type === 'video') {
                        return (
                            <motion.a
                                href={`https://vk.com/video${BlogsStore.ownerId}_${image.video?.id}`}
                                target="_blank"
                                rel="noreferrer"
                                key={image.video?.id}
                                className={classes.video}
                                variants={MotionChildUp}

                            >
                                <Picture className={classes.itemImage} src={imageSrc} />
                            </motion.a>

                        )
                    }
                })}
            </MGrid>
            <Modal selectedId={selectedId} closeModal={closeModal}>
                <>
                    <MPicture
                        className={classes.modalImage}
                        src={selectedId || ''}
                    />
                    <motion.button
                        onClick={closeModal}
                        className={classes.modalCross}
                    >
                        Закрыть окно
                    </motion.button>
                </>
            </Modal>

        </Section>
    )
})

import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import Section, { SectionType } from '../../../../components/Section/Section';
import { ANIMATION_HIDDEN, ANIMATION_VISIBLE, MotionChildRight, MotionChildUp, MotionParent } from '../../../../const/animation';
import BlogsStore from '../../../../store/BlogsStore';
import Picture, { MPicture } from '../../../../UI/Picture'
import BlogText from '../BlogText/BlogText';
import classes from './IdBlogSection.module.scss'
import { useState } from 'react';
import DateTime from '../../../../UI/DateTime/DateTime';
import { MGrid } from '../../../../components/Grid/Grid';
import Modal from '../../../../components/Modal/Modal';
import Error404 from '../../../../components/Error404/Error404';
export const IdBlogSection = observer(() => {
    const params = useParams();
    const [selectedId, setSelectedId] = useState<string | null>('')
    if (!params.id) return null
    BlogsStore.findSelectedBlog(+params.id)
    const blog = BlogsStore.selectedBlog
    if (!blog) {
        return (
            <Error404
                errorText='Страница не найдена'
                routTo='/blog'
                buttonText='Вернуться к публикациям'
            />
        )
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
                <motion.div className={classes.layout} layoutId={selectedId || ''}>
                    <MPicture
                        className={classes.modalImage}
                        src={selectedId || ''}
                    />
                    <motion.button
                        onClick={closeModal}
                        className={classes.closeBtn}
                    >
                        Закрыть окно
                    </motion.button>
                </motion.div>
            </Modal>

        </Section >
    )
})

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

    let itemsCountClass = classes.itemsCountMore;

    const t: number = blog.attachments.length
    switch (t) {
        case 1: itemsCountClass = classes.itemsCount1; break
        case 2: itemsCountClass = classes.itemsCount2; break
        case 3: itemsCountClass = classes.itemsCount3; break
        case 4: itemsCountClass = classes.itemsCount4; break
        case 5: itemsCountClass = classes.itemsCount5; break
        case 6: itemsCountClass = classes.itemsCount6; break
        case 7: itemsCountClass = classes.itemsCount7; break
        case 8: itemsCountClass = classes.itemsCount8; break
        case 9: itemsCountClass = classes.itemsCount9; break
    }

    return (
        <Section className={classes.blog} sectionAnimation={MotionParent} sectionType={SectionType.fullSize}>
            <DateTime className={classes.dateTime} date={blog.date}></DateTime>

            <BlogText text={blog.text} animationType={MotionChildRight}></BlogText>

            <div className={[classes.grid, itemsCountClass].join(' ')}>

                {blog.attachments.map((image, index) => {
                    const imageSrc = BlogsStore.getItemImage(blog.attachments[index], 1080)
                    if (index > t - 1) return null
                    if (image.type === 'photo') {
                        return (
                            <motion.div
                                layoutId={imageSrc}
                                onClick={() => setSelectedId(imageSrc || '')}
                                key={image.photo?.id}
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
                            <a
                                href={`https://vk.com/video${BlogsStore.ownerId}_${image.video?.id}`}
                                target="_blank"
                                rel="noreferrer"
                                key={image.video?.id}
                                className={classes.video}
                            >
                                <Picture className={classes.itemImage} src={imageSrc} />
                            </a>

                        )
                    }
                })}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div className={classes.modal}>
                        <motion.div className='container'>

                            <motion.div className={classes.modalInner}>
                                <motion.div layoutId={selectedId} className={classes.modalImageBox}>
                                    <motion.img
                                        className={classes.modalImage}
                                        src={selectedId}
                                    />
                                    <motion.button
                                        onClick={() => setSelectedId(null)}
                                        className={classes.modalCross}
                                    >
                                        Закрыть окно
                                    </motion.button>


                                </motion.div>
                            </motion.div>
                            <motion.button onClick={() => setSelectedId(null)} className={classes.modalClose} initial={ANIMATION_HIDDEN} exit={ANIMATION_HIDDEN} animate={ANIMATION_VISIBLE} variants={MotionParent} />
                        </motion.div >

                    </motion.div>

                )}
            </AnimatePresence>

        </Section>
    )
})

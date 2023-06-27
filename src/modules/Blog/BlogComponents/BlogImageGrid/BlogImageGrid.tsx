import { motion } from 'framer-motion'
import { memo, useState, FC, useMemo } from 'react'
import { Grid } from '../../../../components/Grid/Grid'
import Modal from '../../../../components/Modal/Modal'
import { MotionChildUp } from '../../../../utils/const/animation'
import { Blog } from '../../../../store/BlogsStore'
import { MButton } from '../../../../UI/Button/Button'
import Picture, { MPicture } from '../../../../UI/Picture'
import { blogStore } from '../../../../store'

import classes from './BlogImageGrid.module.scss'

interface IBlogImageGrid {
    blog: Blog;
    className?: string;
}
const BlogImageGrid: FC<IBlogImageGrid> = memo((props) => {
    const { blog, className } = props
    const [selectedImg, setSelectedImg] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const itemsCount = blog.attachments.length
    const openModal = (index: number) => {
        setIsOpen(true)
        setSelectedImg(index)
    }
    const closeModal = () => {
        setIsOpen(false)
        setSelectedImg(null)
    }
    const imagesSrc = useMemo(() => {
        const attachments = blog.attachments
        return ({
            gridImage: attachments.map(image => blogStore.getItemImage(image, 720)),
            modalImage: attachments.map(image => blogStore.getItemImage(image))
        })
    }, [blog.attachments])
    return (
        <>
            <Grid
                className={[classes.grid, className].join(' ')}
                itemsCount={itemsCount}
            >
                {blog.attachments.map((image, index) => {
                    if (image.type === 'photo') {
                        return (
                            <motion.div
                                className={classes.grid_imageBox}
                                key={image.photo?.id}
                                variants={MotionChildUp}
                                onClick={() => openModal(index)}
                            >
                                <MPicture
                                    className={classes.grid_image}
                                    src={imagesSrc.gridImage[index]}
                                    alt={image.photo?.text}
                                />

                            </motion.div>
                        )
                    }
                    if (image.type === 'video') {
                        return (
                            <motion.a
                                className={[classes.grid_video, classes.grid_imageBox].join(' ')}
                                href={`https://vk.com/video${blogStore.ownerId}_${image.video?.id}`}
                                target="_blank"
                                rel="noreferrer"
                                key={image.video?.id}
                                variants={MotionChildUp}

                            >
                                <Picture
                                    className={classes.grid_image}
                                    src={imagesSrc.gridImage[index]}
                                    alt={image.video?.description}
                                />
                            </motion.a>

                        )
                    }
                    return null
                })}
            </Grid>
            {imagesSrc.modalImage.map(image => <img style={{ display: 'none' }} src={image} key={image} alt={image} />)}
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <motion.div
                    className={classes.grid_modal}
                >
                    <motion.img
                        className={classes.grid_modalImage}
                        src={imagesSrc.modalImage[selectedImg || 0]}
                    />
                    <MButton
                        onClick={closeModal}
                        className={classes.grid_closeBtn}
                    >
                        Закрыть окно
                    </MButton>
                </motion.div>
            </Modal>
        </>
    )
})
export default BlogImageGrid
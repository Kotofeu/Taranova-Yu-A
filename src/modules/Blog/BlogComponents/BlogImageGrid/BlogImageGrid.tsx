import { motion } from 'framer-motion'
import { memo, useCallback, useState, FC, useMemo } from 'react'
import { Grid } from '../../../../components/Grid/Grid'
import Modal from '../../../../components/Modal/Modal'
import { MotionChildUp } from '../../../../utils/const/animation'
import { Item } from '../../../../store/BlogsStore'
import { MButton } from '../../../../UI/Button/Button'
import Picture, { MPicture } from '../../../../UI/Picture'
import { blogStore } from '../../../../store'

import classes from './BlogImageGrid.module.scss'

interface IBlogImageGrid {
    blog: Item;
    className?: string;
}
const BlogImageGrid: FC<IBlogImageGrid> = memo((props) => {
    const { blog, className } = props
    const [selectedId, setSelectedId] = useState<string>()
    const itemsCount = blog.attachments.length
    const closeModal = useCallback(() => {
        setSelectedId(undefined)
    }, [])
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
                                layoutId={index.toString()}
                                onClick={() => setSelectedId(index.toString())}
                                key={image.photo?.id}
                                variants={MotionChildUp}
                            >
                                <Picture
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
                                <Picture className={classes.grid_image} src={imagesSrc.gridImage[index]} alt={image.video?.description}
                                />
                            </motion.a>

                        )
                    }
                    return null
                })}
            </Grid>
            {imagesSrc.modalImage.map(image => <img style={{ display: 'none' }} src={image} key={image} alt={image} />)}
            <Modal selectedId={selectedId} closeModal={closeModal}>
                <motion.div
                    layoutId={selectedId}
                >
                    <motion.img
                        className={classes.grid_modalImage}
                        src={imagesSrc.modalImage[selectedId ? +selectedId : 0]}
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
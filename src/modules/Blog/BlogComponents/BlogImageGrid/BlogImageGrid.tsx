import { motion } from 'framer-motion'
import { memo, useCallback, useState, FC, useMemo } from 'react'
import { Grid } from '../../../../components/Grid/Grid'
import Modal from '../../../../components/Modal/Modal'
import { MotionChildUp } from '../../../../utils/const/animation'
import { Item } from '../../../../store/BlogsStore'
import { MButton } from '../../../../UI/Button/Button'
import Picture, { MPicture } from '../../../../UI/Picture'
import classes from './BlogImageGrid.module.scss'
import { blogStore } from '../../../../store'
interface IBlogImageGrid {
    blog: Item;
    className?: string;
}
const BlogImageGrid: FC<IBlogImageGrid> = memo((props) => {
    const { blog, className } = props
    const [selectedId, setSelectedId] = useState<string | null>('')
    const itemsCount = blog.attachments.length
    const closeModal = useCallback(() => {
        setSelectedId(null)
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
                                className={classes.imageBox}
                                layoutId={index.toString()}
                                onClick={() => setSelectedId(index.toString())}
                                key={image.photo?.id}
                                variants={MotionChildUp}
                            >
                                <Picture
                                    className={classes.itemImage}
                                    src={imagesSrc.gridImage[index]}
                                    alt={image.photo?.text}
                                />

                            </motion.div>
                        )
                    }
                    if (image.type === 'video') {
                        return (
                            <motion.a
                                className={[classes.video, classes.imageBox].join(' ')}
                                href={`https://vk.com/video${blogStore.ownerId}_${image.video?.id}`}
                                target="_blank"
                                rel="noreferrer"
                                key={image.video?.id}
                                variants={MotionChildUp}

                            >
                                <Picture className={classes.itemImage} src={imagesSrc.gridImage[index]} alt={image.video?.description}
                                />
                            </motion.a>

                        )
                    }
                    return null
                })}
            </Grid>
            {imagesSrc.modalImage.map(image => <img style={{ display: 'none' }} src={image} key={image} alt={image}/>)}
            <Modal selectedId={selectedId} closeModal={closeModal}>

                <motion.div className={classes.layout} layoutId={selectedId || ''}>
                    <MPicture
                        className={classes.modalImage}
                        src={imagesSrc.modalImage[selectedId ? +selectedId : 0]}
                    />
                    <MButton
                        onClick={closeModal}
                        className={classes.closeBtn}
                    >
                        Закрыть окно
                    </MButton>
                </motion.div>
            </Modal>
        </>
    )
})
export default BlogImageGrid
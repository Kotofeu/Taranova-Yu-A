import { motion , AnimatePresence} from 'framer-motion'
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
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const items = [
        {
            id: "1",
            subtitle: 'Тест1 Тест1',
            title: 'Тест1 Тест1Тест1 Тест1Тест1 Тест1'
        },
        {
            id: "2",
            subtitle: 'Тест2 Тест2 Тест2 Тест2',
            title: 'Тест2Тест2Тест2Тест2Тест2Тест2Тест2'
        },
        {
            id: "3",
            subtitle: 'Тест3Тест3Тест3Тест3',
            title: 'Тест3Тест3Тест3Тест3Тест3Тест3'
        },
        {
            id: "4",
            subtitle: 'Не тест',
            title: 'Не тестНе тестНе тестНе тестНе тест'
        }
    ]
    return (
        <>
            {items.map(item => (
                <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div className={classes.grid_modal} layoutId={selectedId}>
                        <motion.h5>{items.find(item => item.id === selectedId)?.subtitle}</motion.h5>
                        <motion.h2>{items.find(item => item.id === selectedId)?.title}</motion.h2>
                        <motion.button className={classes.grid_closeBtn} onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
})
export default BlogImageGrid
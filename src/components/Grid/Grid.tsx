import { motion } from 'framer-motion'
import { FC, ReactNode, forwardRef, useMemo } from 'react'
import classes from './Grid.module.scss'

interface IGrid {
    itemsCount: number,
    children: ReactNode,
    className?: string
}

export const Grid: FC<IGrid> = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const { itemsCount, children, className } = props
    const itemsCountClass = useMemo(() => {
        switch (itemsCount) {
            case 1: return classes.itemsCount1;
            case 2: return classes.itemsCount2;
            case 3: return classes.itemsCount3;
            case 4: return classes.itemsCount4;
            case 5: return classes.itemsCount5;
            case 6: return classes.itemsCount6;
            case 7: return classes.itemsCount7;
            case 8: return classes.itemsCount8;
            case 9: return classes.itemsCount9;
            default: return classes.itemsCountMore
        }
    }, [itemsCount]);


    return (
        <motion.div className={[className, itemsCountClass].join(' ')} ref={ref}>
            {children}
        </motion.div>
    )
})

export const MGrid = motion(Grid)
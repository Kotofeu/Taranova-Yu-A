import { motion } from 'framer-motion'
import { FC, memo, forwardRef} from 'react'
import classes from './DateTime.module.scss'
interface IDateTime {
    className?: string,
    date: number,
}

const DateTime: FC<IDateTime> = memo(forwardRef((props, ref:  React.Ref<HTMLUListElement>) => {
    const { date, className } = props
    let unixTimestamp = date
    if (unixTimestamp.toString().length < 11){
        unixTimestamp = unixTimestamp * 1000;
    }
 
    const dateTime = new Date(unixTimestamp);

    const timeString: string = `${dateTime.getHours()}:${dateTime.getMinutes() < 10 ?
        "0" + dateTime.getMinutes()
        : dateTime.getMinutes()
        }`
    const dateString: string =
        `${dateTime.getUTCDate()  < 10 ?
            "0" + dateTime.getUTCDate()
            : dateTime.getUTCDate()
        }.${(dateTime.getMonth() + 1)   < 10 ?
            "0" + (dateTime.getMonth() + 1)
            :(dateTime.getMonth() + 1)
        }.${dateTime.getFullYear()
        }`
    return (
        <motion.ul className={`${className ? className : ''} ${classes.dateTime}`} ref = {ref}>
            <li className={[classes.date, classes.timeField].join(' ')}>
                {timeString}
            </li>
            <li className={classes.date}>
                {dateString}
            </li>
        </motion.ul>
    )
}))

export default DateTime
export const MDateTime = motion(DateTime)
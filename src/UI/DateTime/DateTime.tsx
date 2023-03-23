import { FC, memo } from 'react'
import classes from './DateTime.module.scss'
interface IDateTime {
    className?: string,
    date: number,
}

const DateTime: FC<IDateTime> = memo((props) => {
    const { date, className } = props
    const dateTime = new Date(date);

    const timeString: string = `${dateTime.getHours()}:${dateTime.getMinutes() < 10 ?
            "0" + dateTime.getMinutes()
            : dateTime.getMinutes()
        }`
    const dateString: string =
        `${dateTime.getUTCDate()
        }.${dateTime.getMonth() + 1
        }.${dateTime.getFullYear()
        }`
    return (
        <ul className={`${className ? className : ''} ${classes.dateTime}`}>
            <li className={[classes.date, classes.timeField].join(' ')}>
                {timeString}
            </li>
            <li className={classes.date}>
                {dateString}
            </li>
        </ul>
    )
})

export default DateTime
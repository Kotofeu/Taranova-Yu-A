import { FC, memo } from 'react'
import classes from './DateTime.module.scss'
interface IDateTime {
    className?: string,
    date: number,
}

const DateTime: FC<IDateTime> = memo((props) => {
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
        }.${dateTime.getMonth() + 1  < 10 ?
            "0" + dateTime.getMonth()
            : dateTime.getMonth()
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
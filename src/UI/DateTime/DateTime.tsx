import { motion } from "framer-motion";
import { FC, memo, forwardRef } from "react";
import classes from "./DateTime.module.scss";

interface IDateTime {
  className?: string;
  date: number | Date;
}

const DateTime: FC<IDateTime> = memo(
  forwardRef((props, ref: React.Ref<HTMLUListElement>) => {
    const { date, className = "" } = props;
    let unixTimestamp: number | Date = date;

    if (unixTimestamp instanceof Date) {
      unixTimestamp = unixTimestamp.getTime();
    } else if (typeof unixTimestamp === "string") {
      unixTimestamp = Date.parse(unixTimestamp);
    }

    if (unixTimestamp.toString().length < 11) {
      unixTimestamp = unixTimestamp * 1000;
    }

    const addZeros = (time: number): string => {
      if (time < 10) {
        return "0" + time;
      }
      return time.toString();
    };

    const dateTime = new Date(unixTimestamp);
    const dateUTC = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const minutes = dateTime.getMinutes();
    const hours = dateTime.getHours();
    const timeString: string = `${addZeros(hours)}:${addZeros(minutes)}`;
    const dateString: string = `${addZeros(dateUTC)}.${addZeros(
      month
    )}.${dateTime.getFullYear()}`;

    return (
      <motion.ul className={`${classes.dateTime} ${className}`} ref={ref}>
        <li
          className={[classes.dateTime_date, classes.dateTime_date___time].join(
            " "
          )}
        >
          {timeString}
        </li>
        <li className={classes.dateTime_date}>{dateString}</li>
      </motion.ul>
    );
  })
);

export default DateTime;
export const MDateTime = motion(DateTime);
import React from 'react'
import Button from '../../UI/Button/Button'
import Picture from '../../UI/Picture'
import Title from '../../UI/Title/Title'
import classes from './EventCard.module.scss'

const EventCard = () => {
    return (
        <article className={classes.event}>
            <div className={classes.imageBox}>
                <Picture
                    className={classes.img}
                    src='https://sun9-38.userapi.com/impg/Ji7WMLToIr-9dPwLwKx56zkTBsSk88BY9YZHhQ/5lHH2E6mi00.jpg?size=2560x1920&quality=95&sign=69c7b9bf585ae1278eb4d4244498ad72&type=album'
                />
            </div>

            <div className={classes.desc}>
                <Title className={classes.title}>День рождения</Title>
                <p className={classes.date}>20.02.2003</p>
                <Button className={classes.button}>Подробнее</Button>
            </div>

        </article>
    )
}

export default EventCard
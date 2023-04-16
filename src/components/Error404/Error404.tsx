import { memo, FC } from 'react'
import { MotionChildUp } from '../../const/animation'
import { MButton } from '../../UI/Button/Button'
import Section, { SectionType } from '../Section/Section'
import classes from './Error404.module.scss'
interface IError404 {
    errorText: string,
    routTo?: string,
    buttonText?: string,
}
const Error404: FC<IError404> = memo((
    {
        errorText,
        routTo = '/',
        buttonText = 'Вернуться на главную'
    }: IError404) => {
    return (
        <Section
            className={classes.error404}
            title={errorText}
            sectionType={SectionType.fullSize}
        >
            <div className={classes.errorInner}>
                <MButton
                    className={classes.goHomeBtn}
                    variants={MotionChildUp}
                    routeOption={routTo}
                >
                    {buttonText}
                </MButton>
            </div>

        </Section>
    )
})

export default Error404
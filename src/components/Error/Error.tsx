import { memo, FC } from 'react'
import { MotionChildUp } from '../../utils/const/animation'
import { MButton } from '../../UI/Button/Button'
import Section, { SectionType } from '../Section/Section'
import classes from './Error.module.scss'
import { HOME_ROUTE } from '../../utils/const/routes'
interface IError404 {
    errorText: string;
    routTo?: string;
    buttonText?: string;
}
const Error: FC<IError404> = memo((
    {
        errorText,
        routTo = HOME_ROUTE,
        buttonText = 'Вернуться на главную'
    }: IError404) => {
    return (
        <Section
            className={classes.error}
            title={errorText}
            sectionType={SectionType.firstSection}
        >
            <div className={classes.error_inner}>
                <MButton
                    className={classes.error_goHome}
                    variants={MotionChildUp}
                    routeOption={routTo}
                >
                    {buttonText}
                </MButton>
            </div>

        </Section>
    )
})

export default Error
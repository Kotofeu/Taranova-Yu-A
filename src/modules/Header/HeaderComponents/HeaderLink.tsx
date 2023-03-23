import { FC, ReactNode, memo } from 'react'
import classes from './Header/Header.module.scss'

export enum HeaderLinkType {
    phone =  classes.phone,
    email =  classes.email,
}
interface IHeaderLink {
    headerLinkType?: HeaderLinkType,
    href: string,
    children?: ReactNode
}
export const HeaderLink: FC<IHeaderLink> = memo((props) => {
    const { headerLinkType, href, children } = props
    let className: string = classes.contactLink 
    let link: string = href
    if (headerLinkType === HeaderLinkType.email) {
        className = [className, HeaderLinkType.email].join(' ')
        link = `mailto:${link}`
    }
    else if (headerLinkType === HeaderLinkType.phone) {
        className  = [className, HeaderLinkType.phone].join(' ')
        link = `tel:${link}`
    }

    return (
        <li>
            <a
                className={className}
                href={link}
            >
                {children ? children : href}
            </a>
        </li>
    )
})

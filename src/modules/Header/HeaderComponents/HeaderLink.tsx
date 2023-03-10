import { FC, ReactNode, memo } from 'react'
export enum HeaderLinkType {
    phone = 'header__contact-link--phone',
    email = 'header__contact-link--email'
}
interface IHeaderLink {
    headerLinkType?: HeaderLinkType,
    href: string,
    children?: ReactNode
}
export const HeaderLink: FC<IHeaderLink> = memo((props) => {
    const { headerLinkType, href, children } = props
    let className: string = 'header__contact-link'
    let link: string = href
    if (headerLinkType === HeaderLinkType.email) {
        className = className + ` ${HeaderLinkType.email}`
        link = `mailto:${link}`
    }
    else if (headerLinkType === HeaderLinkType.phone) {
        className = className + ` ${HeaderLinkType.phone}`
        link = `tel:${link}`
    }

    return (
        <li className='header__contact-item'>
            <a
                className={className}
                href={link}
            >
                {children ? children : href}
            </a>
        </li>
    )
})

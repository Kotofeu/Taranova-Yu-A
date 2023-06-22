import { FC, ReactNode, memo } from 'react'
import classes from './HeaderLink.module.scss'

export enum HeaderLinkType {
    phone = classes.phone,
    email = classes.email,
    vk = classes.vk,
}
interface IHeaderLink {
    headerLinkType?: HeaderLinkType;
    href: string;
    children?: ReactNode;
}
export const HeaderLink: FC<IHeaderLink> = memo((props) => {
    const { headerLinkType, href, children } = props
    let className: string = classes.contactLink
    let link: string = href

    switch (headerLinkType) {
        case HeaderLinkType.vk: {
            className = [className, HeaderLinkType.vk].join(' ')
            break
        }
        case HeaderLinkType.phone: {
            className  = [className, HeaderLinkType.phone].join(' ')
            link = `tel:${link}`
            break
        }
        case  HeaderLinkType.email: {
            className = [className, HeaderLinkType.email].join(' ')
            link = `mailto:${link}`
            break
        }
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

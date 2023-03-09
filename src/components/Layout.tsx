import { Outlet } from 'react-router-dom'
import Header, { ILink } from './Header'
const Layout = () => {
    const links: ILink[] = [
        {title: "Главная", link: "/"},
        {title: "Блог", link: "/blog"}

    ]
    return (
        <>
            <Header links={links}></Header>            
            <Outlet />
        </>
    )
}

export default Layout
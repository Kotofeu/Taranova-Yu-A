import { Outlet } from 'react-router-dom'
import { Header } from '../modules/Header'
const Layout = () => {

    return (
        <>
            <Header/>            
            <Outlet />
        </>
    )
}

export default Layout
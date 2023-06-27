import { Navigate } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Blogs from '../pages/Blogs'
import ScrollToTop from '../components/ScrollToTop'
import Events from '../pages/Events'
import { Layout } from './Layout'
import { BLOG_ROUTE, EVENT_ROUTE, HOME_ROUTE } from '../utils/const/routes'
export const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path={HOME_ROUTE} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={BLOG_ROUTE}>
                        <Route index element={<Blogs />} />
                        <Route path=':id' element={<Blog />} />
                    </Route>
                    <Route path={`${EVENT_ROUTE}`} element={<Events />} />
                    <Route path='*' element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

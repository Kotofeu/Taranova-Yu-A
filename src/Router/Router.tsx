import { Navigate } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BLOG_ROUTE, EVENT_ROUTE, HOME_ROUTE } from '../utils/const/routes'

import { Layout } from './Layout'

import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Blogs from '../pages/Blogs'
import ScrollToTop from '../components/ScrollToTop'
import Events from '../pages/Events'

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
                    <Route path={EVENT_ROUTE}>
                        <Route index element={<Events />} />
                        <Route path=':id' element={<Events />} />
                    </Route>
                    <Route path='*' element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

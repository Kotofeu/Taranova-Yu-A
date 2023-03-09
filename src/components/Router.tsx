import { Navigate } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import BlogArticle from '../pages/BlogArticle'
import Layout from './Layout'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='blog'>
                        <Route index element={<Blog />} />
                        <Route path=':id' element={<BlogArticle />} />
                    </Route>
                    <Route path='*' element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
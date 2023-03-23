import { Navigate } from 'react-router'
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Blogs from '../pages/Blogs'
/*const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
    <Suspense fallback={<h1>LOADING</h1>}>
        <Component {...props} />
    </Suspense>
);

const Home = Loadable(lazy(() => import('../pages/Home')));
const Blog = Loadable(lazy(() => import('../pages/Blog')));
const Blogs = Loadable(lazy(() => import('../pages/Blogs'))); */
/*
const Home = lazy(() =>
import('../pages/Home')
  .then(({ Home }) => ({ default: Home })),
);
const Blog = lazy(() =>
    import('../pages/Blog')
        .then(({ Blog }) => ({ default: Blog })),
);
const Blogs = lazy(() =>
    import('../pages/Blogs')
        .then(({ Blogs }) => ({ default: Blogs })),
);
*/
import Layout from './Layout'
import ScrollToTop from './ScrollToTop'
const Router = () => {
    return (
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='blog'>
                        <Route index element={<Blogs />} />
                        <Route path=':id' element={<Blog />} />
                    </Route>
                    <Route path='event'>
                        <Route index element={<Blogs />} />
                        <Route path=':id' element={<Blog />} />
                        <Route path='*' element={<Navigate to="/" replace />} />
                    </Route>
                    <Route path='*' element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
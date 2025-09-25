import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PostListPage from './Pages/PostListPage'
import SinglePagePost from './Pages/SinglePagePost'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import MainLayout from './Layout/MainLayout'
import Write from './Pages/Write'

const AppRoutes = () => {
    return (
        <Routes>
            {/* Routes with layout */}
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/posts' element={<PostListPage />} />
                <Route path='/write' element={<Write />} />
                <Route path='/:slug' element={<SinglePagePost />} />
            </Route>

            {/* Routes without layout (no navbar, e.g. auth pages) */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    )
}

export default AppRoutes;
import React from 'react';

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import AboutPage from './pages/AboutPage'
import ContactLoginPage from './pages/ContacLoginPage'
import NotFoundPage from './pages/NotFoundPage'

const routes = [
    {
        exact: true, 
        path: '/',
        main: () => <HomePage />
    },
    {
        exact: false, 
        path: '/post',
        main: () => <PostPage />
    },
    {
        exact: false, 
        path: '/about',
        main: () => <AboutPage />
    },
    {
        exact: false, 
        path: '/contact',
        main: () => <ContactLoginPage />
    },
    {
        exact: false, 
        path: '',
        main: () => <NotFoundPage />
    }
]

export default routes
import React from 'react';
import { RouteProps } from 'react-router-dom';
import AddPage from './pages/AddPage';
import RedactPage from './pages/RedactPage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

interface RouteConfig extends RouteProps {
    element: React.ReactElement;
    path: string;
}

export const router: RouteConfig[] = [
    {
        element: <MainPage />,
        path: '/',
        exact: true,
    },
    {
        element: <AddPage />,
        path: '/add',
    },
    {
        element: <RedactPage />,
        path: '/redact/:id',
    },
    {
        element: <ErrorPage />,
        path: '*',
    },
];

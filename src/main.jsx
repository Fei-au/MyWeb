import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import Root from './roots/root';
import Blog from './blogs/blog';
import ErrorPage from './error-page';
import './index.less';
import Shopping from './shopping';
import Tool from './tools';
import Home from './home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {index: true, element: <Home/>},
                    {
                        path: "blog",
                        element: <Blog/>,
                    },
                    {
                        path: "shopping",
                        element: <Shopping/>,
                    },
                    {
                        path: "tool",
                        element: <Tool/>,
                    },
                ],
            },
            
        ]
    },

]);


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
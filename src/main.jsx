
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, BrowserRouter} from "react-router-dom";
import Root from './roots/root';
import ErrorPage from './error-page';
import Contact from './roots/contacts';
// import Home from './components/home';
// import Title1 from './components/Title1';
// import Title2 from './components/Title2';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
      },
]);


const root = createRoot(document.getElementById('root'));
root.render(
    // <RouterProvider router={router} />


    <BrowserRouter>
        <Root/>
    </BrowserRouter>
);

// lower 16.8 version react, and directly use react-router@2.x or 3.x as router
// ReactDOM.render(
//     <Router >
//         <Route path='/' component={Home}>
//         </Route>
//         <Route path='/title1' component={Title1}>
//         </Route>
//         <Route path='/title2' component={Title2}>
//         </Route>
//     </Router>, div
// );

// root.render(<div>ffffddd</div>)
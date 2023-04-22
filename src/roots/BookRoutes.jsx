import {Link, Routes, Route, Outlet} from 'react-router-dom';
import NewBook from './NewBook';
import BookList from './BookList';
import Book from './Book';
import BookLayout from './BookLayout';
import React from 'react';

export default function BookRoutes(){

    return (
        <Routes>
            <Route element={<BookLayout/>}>
                <Route index element={<BookList/>}/>
                <Route path=":id" element={<Book/>}/>
                <Route path="new" element={<NewBook/>}/>

            </Route>
        </Routes>
    );
}


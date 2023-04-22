import React, {useState} from 'react';
import {Route, Routes, Link, NavLink} from 'react-router-dom';
import Home from '../components/home';
import Title1 from '../components/Title1';
import Title2 from '../components/Title2';
import BookList from './BookList';
import Book from './Book';
import NotFound from './NotFound';
import BookLayout from './BookLayout';
import BookRoutes from './BookRoutes';
import NewBook from './NewBook';

export default function Root(){

    const [data, setData] = useState();
    const getData = ()=>{
        // fetch("http://www.afeiatus.com/")
        // .then((res)=>{
        //     console.log(typeof res);
        //     console.log(res);
        //     return res.text();
        // })
        // .then((d)=>{
        //     console.log(d)
        // })

        const req = new XMLHttpRequest();
        req.addEventListener("load", (res)=>{
            console.log(res.text() );
        });
        req.open("GET", "http://www.afeiatus.com/");
        req.setRequestHeader('Accept-Language', 'en-CA');

        req.send();
    }
    return (
        // <>
        //     <div id='sidebar'>
        //         <h1>Router Contracts</h1>
        //         <div>
        //             <form id="search-form" role="search">
        //                 <input
        //                     id="1"
        //                     aria-label="Search contacts"
        //                     placeholder="Search"
        //                     type="search"
        //                     name="q"
        //                 />
        //                 <div
        //                     id="search-spinner"
        //                     aria-hidden
        //                     hidden={true}
        //                 />
        //                 <div
        //                     className="sr-only"
        //                     aria-live="polite"
        //                 >
        //                 </div>
        //             </form>
        //             <form method="post">
        //                 <button type="submit">New</button>
        //             </form>
        //         </div>
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <a href={`/contacts/1`}>Your Name</a>
        //                 </li>
        //                 <li>
        //                     <a href={'/contacts/2'}>Your Friend</a>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </div>

        //     <div id='detail'></div>
        // </>

        // <>
        // <ul>
        //     <li>
        //         <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //         <Link to="/Title1">Title1</Link>
        //     </li>
        //     <li>
        //         <Link to="/Title2">Title2</Link>
        //     </li>

        //     <button onClick={getData}>Fectch</button>
        //     <p>{data}</p>
        // </ul>

    

        // <Routes>
        //     <Route exact path="/" element={<Home/>}/>
        //     <Route exact path="/title1" element={<Title1/>}/>
        //     <Route exact path="/title2" element={<Title2/>}/>
        // </Routes>
        // </>
        
        // <ul>
        //     <li><a href={'/contacts/A'}>Title1</a></li>
        // </ul>



        <>

        <nav>
            <ul>
                <li>
                    <NavLink
                        style={({isActive}) => {
                            console.log('isActive', isActive)
                            return isActive ? {color: "red"} : {}
                        }}
                        end
                        to="/"
                    >Home</NavLink>
                    <br />
                    <NavLink
                        style={({isActive}) => {
                            console.log('isActive', isActive)
                            return isActive ? {color: "red"} : {}
                        }}
                        end
                        to="/books"
                    >books</NavLink>
                </li>
            </ul>
        </nav>
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/books">BookList</Link>
            </li>

            <button onClick={getData}>Fectch</button>
            <p>{data}</p>
        </ul> */}

    

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books/*" element={<BookRoutes/>}/>

            {/* <Route path="/books" element={<BookLayout/>}> */}
                {/* <Route path=":id" element={<Book/>}/>
                <Route path="new" element={<NewBook/>}/>    
            </Route> */}

            {/* <Route path="/books" element={<BookList/>}/>
            <Route path="/books/:id" element={<Book/>}/>
            <Route path="/books/new" element={<NewBook/>}/> */}

            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>

    );
}
import {useParams, Link, Navigate, useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Book(){
    const navFunc = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navFunc("/")
        }, 1000)
    }, [])

    return (
        <>
            <h1>Not Found</h1>
            {/* <Navigate to="/"/> */}
        </>
    );
}
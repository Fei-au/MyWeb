import {useOutletContext, useParams} from 'react-router-dom';
import React from 'react';

export default function Book(){

    const {id} = useParams();
    const obj = useOutletContext();
    return (
        <>
            <h1>Book {id}, {obj.hello}</h1>
        </>
    );
}
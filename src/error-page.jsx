import { useRouteError } from "react-router-dom";
import React from 'react';

export default function ErrorPage(){

    const err = useRouteError();
    console.log(err);

    return(
        <div id="error-page">
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>
                <i>{err.statusText || err.message}</i>
            </p>
        </div>
    );
}
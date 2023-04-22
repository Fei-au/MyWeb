import React from 'react';
import {Link} from 'react-router-dom';

// export default function Title1(){

//     return (
//         <h1>This is the most upper class information summary that you need to know</h1>
//     );
// }

export default class Home extends React.Component{


    
    render(){
        return (
            <>
                <h2>title2</h2>
                <Link to="/">Back to Home</Link>
                <br></br>
                <Link to="/Title2">Go to TItle2</Link>
            </>
        );
    }
}

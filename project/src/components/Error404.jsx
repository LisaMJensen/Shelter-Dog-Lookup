import React from 'react';
import { Link } from 'react-router-dom';
import placeholderErrorDog from '../assets/images/placeholderErrorDog.png';

function Error404() {
    return (
        <div>
            <br></br>
            <h2>The page you are looking for does not exist!</h2>
            <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
            <img src={placeholderErrorDog} alt="placeholder error dog"></img>
        </div>
    );
}

export default Error404;
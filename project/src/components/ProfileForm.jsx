import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import APICall from './apiCall';


function ProfileForm(props) {
    let _location = null;


    function handleSubmit(event) {
        event.preventDefault();
        // props.onNewProfileTagsCreation({ location: _location.value })
        APICall();
        console.log(_location.value);
        
    }



    return (
        <div>
            <h2>Lifestyle/Personality Profile</h2>
            <br></br>
            <h4>Select the traits that best match you</h4>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>

                <input
                    name="location"
                    type="text"
                    placeholder='Zip/Postal Code'
                    //add validation for 5 numerical characters
                    ref={(input) => { _location = input; }} />
                <br></br>
                <br></br>
                <Button color="primary" type="submit">Set Tags</Button>
            </form>
            <div className='displayInfoDemo'></div>
        </div>
    );

}


ProfileForm.propTypes = {

};

export default ProfileForm;
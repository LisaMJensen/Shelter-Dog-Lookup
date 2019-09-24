import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';

function ProfileForm(props) {

    return (
        <div>
            <h2>Lifestyle/Personality Profile</h2>
            <br></br>
            <h4>Select the traits that best match you</h4>
            <br></br>
            <br></br>
            <form>
                <label>Active</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Playful</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Laid back</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Affectionate</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Trainable</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Clean</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <Button color="primary" type='submit'>Set Tags</Button>
            </form>
        </div>
    );
}

ProfileForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default ProfileForm;
import React from 'react';
import PropTypes from 'prop-types';

function ProfileForm(props) {

    // function handleProfileFormSubmission(event) {
    //     event.preventDefault();
    //     props.onNewKegCreation({ name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, employeeName: _employeeName.value, dateEntered: _dateEntered.value });
    //     _name.value = '';
    //     _brand.value = '';
    //     _price.value = '';
    //     _alcoholContent.value = '';
    //     _employeeName.value = '';
    //     _dateEntered.value = '';
    // }

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
                <button variant="primary" type='submit'>Set Tags</button>
            </form>
        </div>
    );
}

ProfileForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default ProfileForm;
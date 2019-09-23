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
            <style jsx>{`
          div {
                margin: 50px;
               }


        `}</style>
            <form>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
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
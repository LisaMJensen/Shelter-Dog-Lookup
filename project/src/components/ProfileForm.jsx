import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
require('dotenv').config();

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ location: event.target.value });
    }


    handleSubmit(event, dogs) {

        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });
        var dogs = [];

        client.animal.search({ type: "Dog", breed: "poodle", location: this.state.location, status: "adoptable", limit: "10" })
            .then(function (response) {
                for (let i = 0; i <= response.data.animals.length; i++) {
                    console.log(response.data.animals[i].name);

                    dogs.push(response.data.animals[i]);
                    
                    console.log(dogs);
                    
                    // console.log(response.data.animals[i].breeds);
                    // console.log(response.data.animals[i].age);
                    // console.log(response.data.animals[i].photos[0]);
                }
                
            })
            .catch(function (error) {
                console.log("There was an error");
            });

        event.preventDefault();

    }

    render() {
        return (
            <div>
                <h2>Lifestyle/Personality Profile</h2>
                <br></br>
                <h4>Select the traits that best match you</h4>
                <br></br>
                <br></br>
                <form onSubmit={this.handleSubmit}>

                    <input
                        name="location"
                        type="text"
                        placeholder='Zip/Postal Code'
                        //add validation for 5 numerical characters
                        value={this.state.location} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <Button color="primary" type="submit" value="Submit">Set Tags</Button>
                </form>
                <div className='displayInfoDemo'></div>
            </div>
        );

    }
}

ProfileForm.propTypes = {
    onNewProfileTagsCreation: PropTypes.func
};

export default ProfileForm;
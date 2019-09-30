import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { appendFile } from 'fs';
require('dotenv').config();

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSubmit(event) {

        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });

        client.animal.search({ type: "Dog", breed: "poodle", location: this.state.location, status: "adoptable", limit: "10" })
            .then(function (response) {
                for (let i = 0; i <= response.data.animals.length; i++) {
                    console.log(response.data.animals[i].name);
                    console.log(response.data.animals[i].breeds);
                    console.log(response.data.animals[i].age);
                    console.log(response.data.animals[i].photos[0].small);
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
                    {/* <label>Active</label>
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
                <br></br> */}

                    <input
                        name="location"
                        type="text"
                        placeholder='Zip/Postal Code'
                        value={this.state.location} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <Button color="primary" type="submit" value="Submit">Set Tags</Button>
                </form>
            </div>
        );

    }
}

ProfileForm.propTypes = {
    onNewProfileTagsCreation: PropTypes.func
};

export default ProfileForm;
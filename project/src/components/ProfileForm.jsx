import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { ShelterDog } from './ShelterDog';
require('dotenv').config();

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            name: '',
            dogData: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderShelterDogs = () => {
        this.state.dogData.map((value) =>

            <h1>{value.name}</h1>


        )
    }

    handleChange(event) {
        this.setState({ location: event.target.value });

    }


    handleSubmit(event, dogs) {

        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });
        var dogs = []

        client.animal.search({ type: "Dog", breed: "poodle", location: this.state.location, status: "adoptable", limit: "10" })
            .then(response => {

                for (let i = 0; i <= response.data.animals.length; i++) {
                    console.log(response.data.animals[i]);

                    // dogs.push(response.data.animals[i]);

                    // console.log(dogs);

                    console.log(response.data.animals[i].breeds);
                    console.log(response.data.animals[i].age);
                    console.log(response.data.animals[i].photos[0]);
                }
                this.setState = ({
                    dogData: response.data.animals
                });


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
                <div className='displayInfoDemo'>
                    {this.renderShelterDogs()}
                    <ShelterDog></ShelterDog>
                </div>
            </div>

        );

    }
}

ProfileForm.propTypes = {
    onNewProfileTagsCreation: PropTypes.func
};

export default ProfileForm;
import React from 'react';
import ProfileForm from './ProfileForm';
import PropTypes from 'prop-types';
require('dotenv').config();

function APICall (props){
    // let _name = null;
    // let _breed = null;
    // let _shelterLocation = null;

        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });
        var dogs = [];

        client.animal.search({ type: "Dog", breed: "poodle", location: _location.value, status: "adoptable", limit: "100" })

            .then(function (response) {
                dogs.push(response.data.animals);
                console.log(dogs);
                for (let i = 0; i <= response.data.animals.length; i++) {
                    console.log(response.data.animals[i].name);
                }

            })
            .catch(function (error) {
                console.log("There was an error");
            });

        event.preventDefault();

    

    
        return (
            <div>
                {this.state.dogs}
            </div>
        )
    }


export default APICall;







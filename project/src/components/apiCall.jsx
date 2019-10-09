import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
require('dotenv').config();

const APICall = () => {
    const [hasError, setErrors] = useState(false);
    const [dogs, setDogs] = useState({});
    // let _name = null;
    // let _breed = null;
    // let _shelterLocation = null;


    async function fetchData() {

        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });


        client.animal.search({ type: "Dog", breed: "poodle", location: 98198, status: "adoptable", limit: "100" })

            .then(response => setDogs(response))
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
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <span>{JSON.stringify(dogs)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
};


export default APICall;







import constants from './../constants';
const { firebaseConfig } = constants;
import { Client } from "@petfinder/petfinder-js";
import Firebase from 'firebase';
import v4 from 'uuid/v4';

firebase.initializeApp(firebaseConfig);

export function fetchShelterDog(location) {

    var petfinder = require("@petfinder/petfinder-js");
    var client = new petfinder.Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET });

    return function (dispatch) {
        const localShelterDogId = v4();
        client.animal.search({ type: "Dog", location: "location"}) 
            .then(function (response) {
                console.log(response.data.animals[0].name)
            })
            .catch(function (error) {
                console.log("There was an error");
            });
        }
    }

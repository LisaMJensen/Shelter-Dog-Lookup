import React from 'react';
import ProfileForm from './ProfileForm';
import PropTypes from 'prop-types';
require('dotenv').config();

// class APICall extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             dogs: [],
//         };
//     }

//     componentDidMount() {
//         const API_KEY = process.env.REACT_APP_API_KEY;
//         const SECRET = process.env.REACT_APP_SECRET;
//         var petfinder = require("@petfinder/petfinder-js");
//         var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });

//         client.animal.search({ type: "Dog", breed: "terrier", location: "98198", status: "adoptable", limit: "40" })
//             .then(function (response) {
//                 console.log(response.data.animals[0].name);
//                 console.log(response.data.animals[0].breeds);
//                 console.log(response.data.animals[0].age);
//             })
//             .catch(function (error) {
//                 console.log("There was an error");
//             });

//     }
//     render() {
//         return (
//             <div>
//                 {this.state.dogs}
//             </div>
//         )
//     }
// }

// export default APICall;







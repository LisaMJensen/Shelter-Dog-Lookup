import React from 'react';
import PropTypes from 'prop-types';
import { Client } from "@petfinder/petfinder-js";
require('dotenv').config();

class apiCall extends React.Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
        };
    }

    componentDidMount() {
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET });

        client.animal.search({ type: "Dog", location: "98198" })
            .then(function (response) {
                console.log(response.data.animals[0].name);
                console.log(response.data.animals[0].breeds);
                console.log(response.data.animals[0].age);
            })
            .catch(function (error) {
                console.log("There was an error");
            });
        //     var bearer = 'Bearer' + 
        //     var obj = {
        //         method: 'POST',
        //         withCredentials: false,
        //         credentials: 'include',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Origin': '',
        //             'Host': 'https://api.petfinder.com/v2/animals',
        //             'Authorization': 'bearer',
        //         body: JSON.stringify({
        //             'client_id': '{process.env.API_KEY}',
        //             'client_secret': '{process.env.SECRET}',
        //             'grant_type': 'client_credentials'
        //         })
        //     }
        // }
        //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
        //     const url = "https://api.petfinder.com/v2/animals?type=dog&breed=jack-russell-terrier&location=98198&status=adoptable&distance=50";

        //     fetch(proxyurl + url, obj)
        //         .then(results => {
        //             return results.json();
        //         }).then(data => {
        //             let dogs = data.results.map((name) => {
        //                 return (
        //                     <div key={name.results}>
        //                         {name.results}
        //                     </div>

        //                 )

        //             })
        //             this.setState({ name: dogs });
        //             console.log("state", this.state.name)
        //         })
    }
    render() {
        return (
            <div>
                {this.state.dogs}
            </div>
        )
    }
}

export default apiCall;







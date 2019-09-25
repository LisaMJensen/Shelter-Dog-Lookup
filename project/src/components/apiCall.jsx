import React from 'react';
import PropTypes from 'prop-types';
import { Client } from "@petfinder/petfinder-js";

class apiCall extends React.Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
        };
    }

    componentDidMount() {

        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: "process.env.API_KEY", secret: "process.env.SECRET" });

        client.animal.search({ type: "Dog", location: "98198" })
            .then(function (response) {
                console.log(response.data.animals[0].name);
                console.log(response.data.animals[0].breeds);
                console.log(response.data.animals[0].age);
            })
            .catch(function (error) {
                console.log("There was an error");
            });
        //     var bearer = 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNiODVkNWRmZjcwNWQ5NmUyNWIwODE4ZmEyZWI5YTdiMzE0ODkxYzViNWEwNWQyMWVkNTk4MmIwYzg0NDVhN2QyNTUyZDA0NmM2ZTNlN2NmIn0.eyJhdWQiOiJjTjNwcTZRMTF0WVlZZjQycmFPR21mU0NJMFJFdm5Sc29lS2FmNWlXS2p3WnhsWGVnZyIsImp0aSI6ImNiODVkNWRmZjcwNWQ5NmUyNWIwODE4ZmEyZWI5YTdiMzE0ODkxYzViNWEwNWQyMWVkNTk4MmIwYzg0NDVhN2QyNTUyZDA0NmM2ZTNlN2NmIiwiaWF0IjoxNTY5NDQxMDg4LCJuYmYiOjE1Njk0NDEwODgsImV4cCI6MTU2OTQ0NDY4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.lurewsNeXK_nLPKYv0EMHCTKjJvX1NqGpi00P1Uzns4JZ82uvpsa37OYiLt9BtYeT_asT1Tk5nnIjHZkIjwEG7dR7vyzUsQ-_dL9tlzqETf39hFH1CjE0vLz7nqLERu79QGFHJkqdVb8Lwh-JrFXOt64zxm5Y8ECtaB-INONyS1ejoQkhaWAydIXZ2r0vMYIyEMwZG9x1PFT704xAD6SIUezjTGbsvXzO1-pMs0JCT1PElq2o0GRQtY5ct5yNnKVlKwfYwpyqSTZNU0_I2_gDL99nUQ6Xa-B5O6XjbTGIygFOTA8TEtBqsTgkkfsuAQp7xV0qx45ZIeT5xeTZSzDPQ'
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







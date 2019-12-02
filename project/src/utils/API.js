export default {
    getItems: () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });
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

    }
}
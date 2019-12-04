import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { ShelterDog } from './ShelterDog';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
require('dotenv').config();

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            breed: '',
            name: '',
            dogData: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // renderShelterDogs = () => {
    //     this.state.dogData.map((value) =>

    //         <h1>{value.name}</h1>


    //     )
    // }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ [event.target.name]: value });

    }


    handleSubmit(event) {

        const API_KEY = process.env.REACT_APP_API_KEY;
        const SECRET = process.env.REACT_APP_SECRET;
        var petfinder = require("@petfinder/petfinder-js");
        var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });

        client.animal.search({ type: "Dog", breed: this.state.breed, location: this.state.location, status: "adoptable", limit: "50" })
            .then(response => {
                console.log(response.data.animals);
                // for (let i = 0; i <= response.data.animals.length; i++) {
                //     console.log(response.data.animals[i].breeds);
                //     console.log(response.data.animals[i].age);
                //     console.log(response.data.animals[i].photos[0]);
                // }

                this.setState({
                    dogData: response.data.animals
                });
                console.log(this.state.dogData);

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
                    <select name="breed" onChange={this.handleChange} value={this.state.breed}>
                        <option value="Akita">Akita</option>
                        <option value="Labrador Retriever">Labrador Retriever</option>
                        <option value="English Bulldog">English Bulldog</option>
                        <option value="Scottish Terrier">Scottish Terrier</option>
                    </select>
                    <br></br>
                    <br></br>
                    <Button color="primary" type="submit" value="Submit">Set Tags</Button>
                </form>
                <div className='displayInfoDemo'>
                    <Container>
                        <Row>
                            {this.state.dogData.map((value) =>
                                <Col><ShelterDog name={value.name} breed={value.breeds.primary} age={value.age} gender={value.gender} photo={value.photos[0].medium}></ShelterDog></Col>
                            )}
                        </Row>
                    </Container>
                </div>
            </div>

        );

    }
}

ProfileForm.propTypes = {
    onNewProfileTagsCreation: PropTypes.func
};

export default ProfileForm;
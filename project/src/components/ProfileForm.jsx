import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { ShelterDog } from './ShelterDog';
import NoImage from '../assets/images/NoImage.png';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
require('dotenv').config();

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            distance: '',
            // breed: '',
            name: '',
            good_with_children: null,
            good_with_cats: null,
            good_with_dogs: null,
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

        client.animal.search({
            type: "Dog",
            // breed: this.state.breed,
            location: this.state.location,
            distance: this.state.distance,
            good_with_children: this.state.good_with_children,
            good_with_cats: this.state.good_with_cats,
            good_with_dogs: this.state.good_with_dogs,
            status: "adoptable",
            limit: "50"
        })
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
                if (this.state.dogData.length === 0) {
                    return alert("There were no results found in your area.");
                }

            })
            .catch(function (error) {
                console.log("There was an error");
            });

        event.preventDefault();

    }


    removeNoPhotos = () => {


    }

    render() {
        // const dogDataCopy = this.state.dogData.slice();

        // for (let i = 0; i < dogDataCopy.length; i++) {
        //     if (dogDataCopy[i].photos === 0) {
        //         dogDataCopy[i].splice();
        //     } return dogDataCopy;
        // }

        return (
            <div>
                <h2>Lifestyle/Personality Profile</h2>
                <br />
                <h4>Select the traits that best match you</h4>
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>

                    <input
                        required
                        name="location"
                        type="text"
                        placeholder='Zip/Postal Code'
                        //add validation for 5 numerical characters
                        value={this.state.location} onChange={this.handleChange} />
                    <br />
                    <br />
                    {/* <select required name="breed" onChange={this.handleChange} value={this.state.breed}>
                        <option disabled selected value="">Choose a Breed</option>
                        <option value="American Staffordshire Terrier">American Staffordshire Terrier</option>
                        <option value="Dalmatian">Dalmatian</option>
                        <option value="Labrador Retriever">Labrador Retriever</option>
                        <option value="English Bulldog">English Bulldog</option>
                        <option value="Scottish Terrier">Scottish Terrier</option>
                    </select>
                    <br />
                    <br /> */}
                    <select required name="distance" onChange={this.handleChange} value={this.state.distance}>
                        <option disabled selected value="">Please choose a search distance radius</option>
                        <option value="10">10 miles</option>
                        <option value="20">20 miles</option>
                        <option value="30">30 miles</option>
                        <option value="40">40 miles</option>
                    </select>
                    <br />
                    <br />
                    <h5>Do you have children?</h5>
                    <input type="radio" id="yes" name="good_with_children" checked={this.state.good_with_children === 'true'}
                        onChange={this.handleChange} value="true"
                    />
                    <label for="childrenYes">Yes</label>
                    <br />
                    <input type="radio" id="no" name="good_with_children" checked={this.state.good_with_children === 'false'}
                        onChange={this.handleChange} value="false"
                    />
                    <label for="childrenNo">No</label>
                    <br />
                    <br />
                    <h5>Do you have cats?</h5>
                    <input type="radio" id="yes" name="good_with_cats" checked={this.state.good_with_cats === 'true'}
                        onChange={this.handleChange} value="true"
                    />
                    <label for="catYes">Yes</label>
                    <br />
                    <input type="radio" id="no" name="good_with_cats" checked={this.state.good_with_cats === 'false'}
                        onChange={this.handleChange} value="false"
                    />
                    <label for="catNo">No</label>
                    <br />
                    <br />
                    <h5>Do you have other dogs?</h5>
                    <input type="radio" id="yes" name="good_with_dogs" checked={this.state.good_with_dogs === 'true'}
                        onChange={this.handleChange} value="true"
                    />
                    <label for="dogYes">Yes</label>
                    <br />
                    <input type="radio" id="no" name="good_with_dogs" checked={this.state.good_with_dogs === 'false'}
                        onChange={this.handleChange} value="false"
                    />
                    <label for="dogNo">No</label>
                    <br />
                    <br />
                    <Button color="primary" type="submit" value="Submit">See your matches!</Button>
                </form>
                <div className='displayInfoDemo'>
                    <Container>
                        <Row>
                            {this.state.dogData.map((value) => {
                                if (value.photos[0] === undefined) {
                                    return <Col><ShelterDog link={value.url} name={value.name} breed={value.breeds.primary} age={value.age} gender={value.gender} photo={NoImage}></ShelterDog></Col>
                                } else return <Col><ShelterDog link={value.url} name={value.name} breed={value.breeds.primary} age={value.age} gender={value.gender} photo={value.photos[0].medium}></ShelterDog></Col>
                            }

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
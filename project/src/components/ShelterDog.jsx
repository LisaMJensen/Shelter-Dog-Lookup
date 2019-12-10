
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/ShelterDog.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import { ProfileForm } from './ProfileForm';

export class ShelterDog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {

        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

        return (
            <div>
                <Container>

                    <div class="dogCard">
                        {/*Instead of url for link, make new call by dog's assigned ID to pull info for dog's profile page. ID will also be used for "saving" dogs to user lists*/}
                        <a href="#" onClick={handleClick} target="_blank"><span className="cardLink"></span></a>
                        {/* <Col sm={{ size: 'auto', offset: 1 }}> */}
                        <Card top className="h-300">
                            <CardBody>
                                <CardImg style={{ width: '200px', height: 'auto' }} src={this.props.photo} alt="placeholder dog image" />
                                <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px', borderRadius: '15px' }}><h3 class="dogName">{this.props.name}</h3></CardTitle>
                                <CardSubtitle>{this.props.breed}</CardSubtitle>
                                {this.props.age}-{this.props.gender}
                            </CardBody>
                        </Card>
                        {/* </Col> */}
                    </div>
                    {/* 
                    <div class="dogCard">
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Card top className="h-300">
                                <CardBody>
                                    <CardImg style={{ width: 'auto', height: '200px' }} src={placeholderDogImage2} alt="placeholder dog image" />
                                    <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">{props.name}</h3></CardTitle>
                                    <CardSubtitle>{props.breed} - {props.age}</CardSubtitle>

                                    -{props.location}
                                </CardBody>
                            </Card>
                        </Col>
                    </div> */}




                </Container>

            </div>
        )
    }
}
ShelterDog.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    breed: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    link: PropTypes.string,
};

export default ShelterDog;
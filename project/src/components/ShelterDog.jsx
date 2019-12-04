
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import placeholderDogImage from '../assets/images/placeholderDogImage.jpeg';
import placeholderDogImage2 from '../assets/images/placeholderDogImage2.jpg';
import placeholderDogImage3 from '../assets/images/placeholderDogImage3.jpeg';
import '../assets/styles/ShelterDog.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { ProfileForm } from './ProfileForm';

export class ShelterDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogData: [],
        }

    }


    render() {



        return (
            <div>
                <Container>

                    <div class="dogCard">
                        <a href={this.props.link}><span className="cardLink"></span></a>
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
                    </div>

                    <div class="dogCard">
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Card top className="h-300">
                                <CardBody>
                                    <CardImg style={{ width: 'auto', height: '200px' }} src={placeholderDogImage3} alt="placeholder dog image" />
                                    <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">Georgia</h3></CardTitle>
                                    <CardSubtitle>{props.breed} - Dog Age</CardSubtitle>

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
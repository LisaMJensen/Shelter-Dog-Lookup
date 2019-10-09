
import React from 'react';
import PropTypes from 'prop-types';
import placeholderDogImage from '../assets/images/placeholderDogImage.jpeg';
import placeholderDogImage2 from '../assets/images/placeholderDogImage2.jpg';
import placeholderDogImage3 from '../assets/images/placeholderDogImage3.jpeg';
import '../assets/styles/ShelterDog.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function ShelterDog(props) {
    return (
        <div>
            <Container>
                <Row>
                    <div class="dogCard">
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <Card top className="h-300">
                                <CardBody>
                                    <CardImg style={{ width: 'auto', height: '200px' }} src={placeholderDogImage} alt="placeholder dog image" />
                                    <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">Roland</h3></CardTitle>
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
                                    <CardImg style={{ width: 'auto', height: '200px' }} src={placeholderDogImage2} alt="placeholder dog image" />
                                    <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">McTavish</h3></CardTitle>
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
                                    <CardSubtitle>{props.breed} - {props.age}</CardSubtitle>

                                    -{props.location}
                                </CardBody>
                            </Card>
                        </Col>
                    </div>


                </Row>

            </Container>
        </div>
    )
}
ShelterDog.propTypes = {
    breed: PropTypes.string,
    age: PropTypes.string,
    location: PropTypes.string
};

export default ShelterDog;
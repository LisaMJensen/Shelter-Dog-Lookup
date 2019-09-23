
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/ShelterDog.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardDeck, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function ShelterDog() {
    return (
        <div>
            <CardDeck>
                <div class="dogCard">
                    <Card>
                        <CardBody>
                            <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">Skippy</h3></CardTitle>
                            <CardSubtitle>Dog Breed - Dog Age</CardSubtitle>
                            -Dog picture
                            -Dog location
                    </CardBody>
                    </Card>
                </div>

                <div class="dogCard">
                    <Card>
                        <CardBody>
                            <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">Buster</h3></CardTitle>
                            <CardSubtitle>Dog Breed - Dog Age</CardSubtitle>
                            -Dog picture
                            -Dog location
                    </CardBody>
                    </Card>
                </div>

                <div class="dogCard">
                    <Card>
                        <CardBody>
                            <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px' }}><h3 class="dogName">Georgia</h3></CardTitle>
                            <CardSubtitle>Dog Breed - Dog Age</CardSubtitle>
                            -Dog picture
                            -Dog location
                    </CardBody>
                    </Card>
                </div>

                <div class="dogCard">
                    <Card >
                        <CardBody>
                            <div className="dogName">
                            <CardTitle style={{ backgroundColor: '#007bff', color: 'white', padding: '5px', height: 'auto', minHeight: '100%' }}><h3 class="dogName">Dundie</h3></CardTitle>
                            </div>
                            <CardSubtitle>Dog Breed - Dog Age</CardSubtitle>
                            -Dog picture
                            -Dog location
                    </CardBody>
                    </Card>
                </div>

                <div class="dogCard">
                    <Card>
                        <CardBody>
                            <CardTitle inverse style={{ backgroundColor: '#007bff', backgroundSize: '200px', color: 'white', padding: '5px' }}><h3 class="dogName">Caroline</h3></CardTitle>
                            <CardSubtitle>Dog Breed - Dog Age</CardSubtitle>
                            -Dog picture
                            -Dog location
                    </CardBody>
                    </Card>
                </div>
            </CardDeck>
        </div>
    )
}

export default ShelterDog;
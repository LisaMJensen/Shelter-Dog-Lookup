import React from 'react';
import ShelterDog from './ShelterDog';
import PropTypes from 'prop-types';

var masterShelterDogList = [
    {
        breed: '',
        age: '',
        location: '',
    },
    {
        breed: '',
        age: '',
        location: '',
    }, 
    {
        breed: '',
        age: '',
        location: '',
    },
];

function ShelterDogList(props) {
    return (
        <div>
        {masterShelterDogList.map((dog, index) =>
            <ShelterDog
                breed={dog.breed}
                age={dog.age}
                location={dog.location}
                key={index} />
            )}
        </div>
    );
}

export default ShelterDogList;
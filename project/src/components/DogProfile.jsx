import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import PropTypes from 'prop-types';
require('dotenv').config();

class DogProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            dogProfile: {},
        }
    }

    // getDog = () => {
    //     const API_KEY = process.env.REACT_APP_API_KEY;
    //     const SECRET = process.env.REACT_APP_SECRET;
    //     var petfinder = require("@petfinder/petfinder-js");
    //     var client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET });

    //     client.animal.show(this.state.id)
    //         .then(resp => {
    //             this.setState({
    //                 dogProfile: resp.data.animal,
    //             })

    //         });
    // }

    render() {
        { this.getDog() }
        return (
            <div>
                {/* <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel> */}

                <div>
                    <h1>{this.state.dogProfile.name}</h1>
                    <br />
                    <h3>{this.state.dogProfile.age}-{this.state.dogProfile.gender}
                    </h3>
                </div>





            </div>
        )
    }
}

export default DogProfile;
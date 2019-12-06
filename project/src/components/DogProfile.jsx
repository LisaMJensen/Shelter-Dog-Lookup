import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DogProfile extends component {
    constructor(props) {
        super(props);

    }

    goodWithChildren = () => {
        if (this.props.good_with_children === true) {
            return <h5>{this.props.name} is good with children.</h5>
        } else if (this.props.good_with_children === false) {
            return <h5>{this.props.name} needs a home without children.</h5>
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <br />
                <h3>{this.props.age}-{this.props.gender}-{this.props.breed}</h3>
                {this.goodWithChildren()}
            </div>
        )
    }
}
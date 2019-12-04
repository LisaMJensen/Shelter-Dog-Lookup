import React, { Component } from 'react';

export class DogProfile extends component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <br />
                <h3>{this.props.age}-{this.props.gender}-{this.props.breed}</h3>
            </div>
        )
    }
}
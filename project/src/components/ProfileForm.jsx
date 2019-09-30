import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.value);
        console.log(this.state.value);
        event.preventDefault();
    }

    // let _location = null;

    // function handleNewProfileFormSubmission(event) {
    //     event.preventDefault();
    //     props.onNewProfileTagsCreation({ location: _location.value,});
    //     _location.value = '';
    // }
    render() {
        return (
            <div>
                <h2>Lifestyle/Personality Profile</h2>
                <br></br>
                <h4>Select the traits that best match you</h4>
                <br></br>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Active</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Playful</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Laid back</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Affectionate</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Trainable</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br>
                <label>Clean</label>
                <input
                    name=""
                    type="checkbox" />
                <br></br>
                <br></br> */}
                    <input
                        name="location"
                        type="text"
                        placeholder='Area Code'
                        value={this.state.value} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <Button color="primary" type="submit" value="Submit">Set Tags</Button>
                </form>
            </div>
        );

    }
}

ProfileForm.propTypes = {
    onNewProfileTagsCreation: PropTypes.func
};

export default ProfileForm;
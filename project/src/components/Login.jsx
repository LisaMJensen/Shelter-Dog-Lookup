import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,  Input, } from 'reactstrap';

class loginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (

<div class="Login">

                <div>
                    <Button color="danger" onClick={this.toggle}>Login{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                        <ModalBody>
                            <Form inline>
                                <FormGroup >


                                    <Input type="email" name="email" id="Email" placeholder="Email" />

                                </FormGroup>
                                <FormGroup >


                                    <Input type="password" name="password" id="Password" placeholder="Password" />

                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                        
                    </Modal>
                </div>
</div>

        );
    }
}

export default loginModal;
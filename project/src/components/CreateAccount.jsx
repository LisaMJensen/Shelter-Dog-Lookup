import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/CreateAccount.css';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';


//Make modal?

function CreateAccount(props) {
    return (
        <div class="createAccount">
        <Form>
            <FormGroup row>
            <Col md={10}>
                {/* <Label for="exampleEmail">Email</Label> */}
                        <Input size={50} type="email" name="email" id="Email" placeholder="Email" required />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={10}>
                {/* <Label for="examplePassword">Password</Label> */}
                        <Input type="password" name="password" id="Password" placeholder="Password" required/>
                </Col>
            </FormGroup>
            <Button color="primary">Create Account</Button>
        </Form>
        </div>
    );
}
export default CreateAccount;
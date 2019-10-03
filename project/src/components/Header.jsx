import React from 'react';
import '../assets/styles/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import placeholderLogo from '../assets/images/placeholderLogo.png';
import {
    Navbar, NavbarBrand, Nav, NavLink,
    Button, Form, FormGroup, Input, Container, Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


class Header extends React.Component {
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
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/"><h3 className="headerName"><img className="headerLogo" src={placeholderLogo} alt="placeholder dog logo" />
                        Placeholder Name</h3></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <Button color="primary">
                            <NavLink href="/#/profileform">Profile</NavLink>
                        </Button>
                        <Button color="primary" onClick={this.toggle}>Login{this.props.buttonLabel}</Button>
                        <div className="loginModal">
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle} close={closeBtn}></ModalHeader>
                                <ModalBody>
                                    <h1 className="loginModalLabel">Login</h1>
                                    <br></br>
                                    <Form>

                                        <Container>
                                            <Col>

                                                <div className="loginModalForm">
                                                    <FormGroup style={{ fontSize: '12px', leftMargin: '150px', alignContent: 'center', alignItems: 'center' }} >


                                                        <Input type="email" name="email" id="Email" placeholder="Email" required />

                                                    </FormGroup>



                                                    <FormGroup style={{ fontSize: '12px', leftMargin: '150px', alignContent: 'center', alignItems: 'center' }} >


                                                        <Input type="password" name="password" id="Password" placeholder="Password"/>

                                                    </FormGroup>
                                                </div>

                                            </Col>
                                        </Container>
                                        <div className='loginModalButton'><Button size="lg" color="primary" block onClick={this.toggle}>Login</Button>{' '}</div>
                                    </Form>

                                </ModalBody>
                                <ModalFooter>

                                    <Row style={{ fontSize: '12px' }}>
                                        Not a Member?<NavLink href="/#/createaccount">
                                            <br></br>
                                            <h6 onClick={this.toggle} className="createAccountLink"> Create an Account</h6></NavLink></Row>
                                </ModalFooter>

                            </Modal>
                        </div>

                    </Nav>

                </Navbar>

            </div>
        );
    }
}

export default Header;
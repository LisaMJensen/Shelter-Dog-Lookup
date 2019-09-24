import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import placeholderLogo from '../assets/images/placeholderLogo.png';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row
} from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/"><h3 class="headerName"><img class="headerLogo" src={placeholderLogo} alt="placeholder dog logo" />
                        Placeholder Name</h3></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <p><NavLink href="/#/profileform">Profile</NavLink></p>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Login
                </DropdownToggle>
                                <DropdownMenu right>
                                    <div class="navbarLogin">
                                        <Form inline>
                                            <FormGroup >


                                                <Input type="email" name="email" id="Email" placeholder="Email" />

                                            </FormGroup>
                                            <DropdownItem divider />
                                            <FormGroup >


                                                <Input type="password" name="password" id="Password" placeholder="Password" />

                                            </FormGroup>

                                            <Button color="primary">Login</Button>

                                        </Form>
                                    </div>
                                    <NavItem>
                                        <Row style={{ fontSize: '12px', marginLeft: '20px' }}>
                                            Not a Member?<NavLink href="/#/createaccount"><h6 className="createAccountLink"> Create an Account</h6></NavLink></Row>
                                    </NavItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        );
    }
}

export default Header;
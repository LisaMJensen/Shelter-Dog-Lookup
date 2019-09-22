import React from 'react';
import '../assets/styles/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import placeholderLogo from '../assets/images/placeholderLogo.png';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/"><h3><img src={placeholderLogo} alt="placeholder dog logo" />
                    Placeholder Name</h3></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    );
}

export default Header;
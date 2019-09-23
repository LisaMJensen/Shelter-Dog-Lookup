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
} from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/"><h3 class="headerName"><img class="headerLogo" src={placeholderLogo} alt="placeholder dog logo" />
                    Placeholder Name</h3></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <p><Link to="/profileform">Profile</Link></p>
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
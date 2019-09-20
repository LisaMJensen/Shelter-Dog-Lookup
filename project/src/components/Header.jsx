import React from 'react';
import placeholderLogo from '../assets/images/placeholderLogo.png';

function Header() {
    return (
        <div>
            <h1><img src={placeholderLogo} alt="placeholder dog logo" />
                Placeholder Name</h1>
        </div>
    );
}

export default Header;
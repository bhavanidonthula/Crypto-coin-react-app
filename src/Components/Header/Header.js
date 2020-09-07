import React from 'react';
import './Header.css';
import logo from '../../Assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className="Header">
            <NavLink to="/">
                <img src={logo} alt="Logo" width="100" />
            </NavLink>
        </div>
    );
}

export default Header;
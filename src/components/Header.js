import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import '../styles/bootstrap.min.css';


class Header extends React.Component {
    render() {
        return (
        <header >
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="header">
                    <h1 className="navbar-brand title">Contacts App</h1>
                    <ul className="navbar-nav links">
                        <li className="nav-link"><NavLink className="nav-link" to="/" >Home</NavLink></li>
                        <li className="nav-link"><NavLink className="nav-link" to="/add" >Add Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )}
}

export default Header;

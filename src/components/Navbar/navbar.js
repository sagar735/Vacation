import React from 'react'
import { Link } from 'gatsby'


class Navbar extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span className="hamburger-icon"></span>
                    <span className="hamburger-icon"></span>
                    <span className="hamburger-icon"></span>

                    <ul className="menu">
                        <li className="header-logo-container">
                            <Link to="/">
                                {/* TODO Add the logo image here */}
                                <span className="header-title">Shellino Vacation</span>
                            </Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/">
                                <span className="material-icons">home</span>Home
                            </Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="packages">Packages</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="contact_us">Contact US</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="about_us">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar

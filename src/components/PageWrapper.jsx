import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/"></Link>
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ml-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/team">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                  {this.props.children} {/* This is use for visible the childern which is Home.jsx */}
            </div>
        );
    };
};

export default PageWrapper;
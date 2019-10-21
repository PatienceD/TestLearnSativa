import React, { Component } from "react";
import "./Navbar.css";
import logo from "./pics/LSUlogo.png";

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar" id="top" style={{ backgroundColor: '#212121' }}>
                    <div id="content">
                        <button>Enroll Now</button>
                        <button>Request Info</button>
                        <a href="#" id="pn"> Call (720) 295-1439</a>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-black ">
                    <img src={logo} style={{ height: '80px', margin: '15px' }}></img>
                    <a className="navbar-brand" href="#">Learn Sativa</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Find Cannabis & More</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Now Hiring</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
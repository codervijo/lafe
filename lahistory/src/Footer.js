import React, { Component } from 'react';
import './App.css';
import './Footer.css';
//import from 'react-ionicons';


class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>iOS App</li>
                        <li>Android App</li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                        <li><i className="ion-logo-facebook"></i></li>
                        <li><i className="ion-logo-twitter"></i></li>
                        <li><i className="ion-logo-googleplus"></i></li>
                        <li><i className="ion-logo-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
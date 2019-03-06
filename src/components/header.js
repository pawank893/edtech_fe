import React, { Component } from 'react';
import '../assests/css/header.css'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <div className="headerContainer">

            <div className="headerElem homeContainer">
                <Link to="/">
                    <span className="text home">Home</span>
                </Link>
            </div>


            <div className="headerElem testSeriesContainer">
                <Link to="/test-series">
                    <span className="text testSeries" >Test series</span>
                </Link>
            </div>


            <div className="headerElem loginContainer">
                <Link to="/login">
                    <span className="text logintext">Login</span>
                </Link>
            </div>

        </div>
    )
  }
}

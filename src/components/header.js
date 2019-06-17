import React, { Component } from 'react';
import '../assests/css/header.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default class Header extends Component {
  getAccessToken = () => Cookies.get('csrftoken')
  isAuthenticated = () => !!this.getAccessToken()
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
            {this.isAuthenticated() ?
                <div className="headerElem loginContainer">
                    <Link to="/logout">
                        <span className="text logintext">Logout</span>
                    </Link>
                </div>

            :
                <div className="headerElem loginContainer">
                    <Link to="/login">
                        <span className="text logintext">Login & signup</span>
                    </Link>
                </div>
            }

        </div>
    )
  }
}

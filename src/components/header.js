import React, { Component } from 'react';
import '../assests/css/home_page.css'

export default class Header extends Component {
  render() {
    return (
        <div className="headerContainer">
            <div className="homeContainer">
                <span className="home">Home</span>
            </div>
            <div className="testSeriesContainer">
                <span className="testSeries" >Test series</span>
            </div>
            <div className="loginContainer">
                <span className="login">Login</span>
            </div>
        </div>
    )
  }
}

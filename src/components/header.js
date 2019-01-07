import React, { Component } from 'react';
import '../assests/css/header.css'

export default class Header extends Component {
  render() {
    return (
        <div className="headerContainer">
            <div className="headerElem homeContainer">
                <span className="text home">Home</span>
            </div>
            <div className="headerElem testSeriesContainer">
                <span className="text testSeries" >Test series</span>
            </div>
            <div className="headerElem loginContainer">
                <span className="text logintext">Login</span>
            </div>
        </div>
    )
  }
}

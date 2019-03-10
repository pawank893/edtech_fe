import React, { Component } from 'react';
import '../assests/css/home_page.css'
import Header from './header';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePageContainer">
          <div className="header-div">
            <Header />
          </div>
          <div className="title homePageElem">
            <h2>Title</h2>
          </div>
          <div className="imageContainer homePageElem">
            <img  className="homePageImage" src="https://s3.us-east-2.amazonaws.com/edtech-ameltus/home_page.jpeg" alt="Home" />
          </div>
          <div className="descriptionContainer homePageElem">
            <span>Description</span>
          </div>
    </div>
    )
  }
}

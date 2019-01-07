import React, { Component } from 'react';
import HomePageImage from '../assests/images/homePageImage.jpeg'
import '../assests/css/home_page.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePageContainer">
          <div className="title homePageElem">
            <h2>Title</h2>
          </div>
          <div className="imageContainer homePageElem">
            <img  className="homePageImage" src={HomePageImage} alt="Home" />
          </div>
          <div className="descriptionContainer homePageElem">
            <span>Description</span>
          </div>
    </div>
    )
  }
}

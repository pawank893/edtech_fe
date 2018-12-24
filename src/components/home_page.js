import React, { Component } from 'react';
import HomePageImage from '../assests/images/homePageImage.jpeg'
import '../assests/css/home_page.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePageContainer">
        <div className="mainContainer">
          <div className="title">
            <h2>Title</h2>
          </div>
          <div className="imageContainer">
            <img  className="homePageImage" src={HomePageImage} alt="Home" />
          </div>
          <div className="descriptionContainer">
            <span>Description 1</span>
          </div>
        </div>
      </div>
    )
  }
}

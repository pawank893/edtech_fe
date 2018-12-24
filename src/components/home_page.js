import React, { Component } from 'react';
import HomePageImage from '../assests/images/homePageImage.jpeg'
import '../assests/css/home_page.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePageContainer">
        <div className="headerBar">
          <span className="textheading">Heading</span>
        </div>
        <div className="mainContainer">
          <div className="title">
            Title
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

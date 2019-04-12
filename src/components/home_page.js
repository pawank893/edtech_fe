import React, { Component } from 'react';
import '../assests/css/home_page.css'
import Header from './header';
import Cookies from 'js-cookie';

export default class HomePage extends Component {

    componentDidMount = () => {
        Cookies.remove("result_page")
    }

  render() {
    return (
      <div className="homePageContainer">
          <div className="header-div">
            <Header />
          </div>
          <div className="title homePageElem">
            <h2>Personalized NEET Prep That Adapts to You</h2>
          </div>
          <div className="imageContainer homePageElem">
            <img  className="homePageImage" src="https://cdn-imgix-open.ameltus.com/home_page.jpeg" alt="Home" />
          </div>
          <div className="descriptionContainer homePageElem">
            <span>AMELTUS will personalize a study mission tailored to your weaknesses, adapting with each practice test you take. See progress where it matters most.</span>
          </div>
    </div>
    )
  }
}

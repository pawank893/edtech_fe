import React, { Component } from 'react';
import HomePage from './components/home_page'
import ProductInformationPage from './components/product_information_page'
import QuestionPage from './components/question_page'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="public">
        <HomePage />
      </div>
    );
  }
}

export default App;

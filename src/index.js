import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import Login from './components/login';
import * as serviceWorker from './serviceWorker';

import './assests/css/common.css'

import HomePage from './components/home_page'
import ProductInformationPage from './components/product_information_page'
import QuestionPage from './components/question_page'
import ResultPage from './components/result'
import TestSeriesPage from './components/test_series'
import Header from './components/header'


const routing = (
    <div>
    <Header />
      <Router>
        <div className="router">
          <Route exact path="/" component={HomePage}/>
          <Route path="/product" component={ProductInformationPage} />
          <Route path="/question" component={QuestionPage} />
          <Route path="/login" component={Login} />
          <Route path="/result" component={ResultPage} />
          <Route path="/test-series" component={TestSeriesPage} />
        </div>
      </Router>
     </div>
)


ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

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


const routing = (
  <Router>
    <div className="router">
      <Route exact path="/" component={Login}/>
      <Route path="/product" component={ProductInformationPage} />
      <Route path="/question" component={QuestionPage} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

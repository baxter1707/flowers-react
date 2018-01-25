import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Baselayout} from './components/Baselayout'
import {ViewAllFlowers} from './components/viewallflowers'
import {AboutUs} from './components/AboutUs'
import {AddFlower} from './components/AddFlower'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <Baselayout>
  <Switch>
  <Route path='/aboutUs' component={AboutUs} />
  <Route path='/viewAll' component={ViewAllFlowers} />
  <Route path='/addFlower' component={AddFlower} />
  <Route path="/" component={App} />
</Switch>

  </Baselayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();

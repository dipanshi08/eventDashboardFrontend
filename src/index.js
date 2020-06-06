import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import Calendar from './components/main/Calendar';
import Alerts from './components/main/Alerts';
import Dash from './components/main/Dash';

const stack= (
     
   < BrowserRouter >
      <div>
        
         <Route exact path="/" component={App} />
         <Route exact path="/dash" component={Dash} />
         <Route path="/calendar" component={Calendar} />
         <Route path="/alerts" component={Alerts} />
      </div>
   </ BrowserRouter >
);

ReactDOM.render(
  stack,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

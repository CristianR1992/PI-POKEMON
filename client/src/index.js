import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'  
import store from './redux/store';
import { Provider } from 'react-redux'; 
//import {Auth0Provider} from "@auth0/auth0-react"
import axios from 'axios';
 axios.defaults.baseURL = 'https://servidor-pokemon-qo0h.onrender.com/'
//<Auth0Provider domain= "dev-yriwhkqxe3fwzb87.us.auth0.com" clientId='wxHA1T23heVQ87BUBvmShgtOVuI2cDFs'   redirectUri={window.location.origin}>
 // </Auth0Provider>
  
  ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter> 
  </Provider>, 
 document.getElementById('root')
 
)

//configuracion de la app de react
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

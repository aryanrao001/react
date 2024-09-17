import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mobile from './Mobile';
import UseState from './Usestate';
import A from './A';
import Usereducer from './Usereducer';
import ReactRouter from './ReactRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* This is props */}
    {/* <Mobile/> */}

    {/* This is Use State  */}
    {/* <UseState/> */}

    {/* This is Context Api */}
    {/* <A/> */}

    {/* This is use Reducer */}
    {/* <Usereducer/> */}
 
    {/* This is React Router  */}
    <ReactRouter/>    


    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

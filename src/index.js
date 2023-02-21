import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import swDev from './swDev';
// import swRegister from './sw-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';



// const element = <h1>Hello, world!</h1>;
const root =createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <App/>
</BrowserRouter>

);

// swRegister();
swDev();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


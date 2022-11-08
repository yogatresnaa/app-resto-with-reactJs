import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';



// const element = <h1>Hello, world!</h1>;
const root =createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <App/>
</BrowserRouter>


);
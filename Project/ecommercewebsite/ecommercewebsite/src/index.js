import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './LoginPage';
import Productlist from './Productlist';
import Signup from './Signup';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Navigation from './Navigation';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>
);


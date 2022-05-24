import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './LoginPage';
import Productlistt from './Productlist';
import Signup from './Signup';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Productlists from './Productlist';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage/>
  </React.StrictMode>
);


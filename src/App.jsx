import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin/Signin';
import Signup from './pages/Auth/Signup/Signup';
import Products from './pages/Products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import mainIndex from './pages/mainIndex/mainIndex';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Basket from './pages/Basket/Basket';
import Error from './pages/Error/Error';

function App() {

  return (
    <>
      <Router>
      <div>
        <Navbar/>
        <div id="content">
          <Switch>
            <Route path="/" exact component={mainIndex} />
            <Route path="/product/:product_id" component={ProductDetail} />
            <Route path="/product" component={Products} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/sepet" component={Basket} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="*" component={Error} />
          </Switch>
        </div>  
      </div>
    </Router>
      
    </>

  )
}


export default App

import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Order from './Order'

const App = () => {

  return (
    <>
    <header>
      <Link to='/'>Lambda Eats</Link>
    </header>
    <div>
      <h2>Now taking orders online!</h2>
      <button>Order</button>
    </div>
    <Order />
    </>
  );
};
export default App;
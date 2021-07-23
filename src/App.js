import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Order from './Order'
import Home from './Home'

const App = () => {

  return (
    <>
    <header>
      <Link id='order-pizza' to='/'>Lambda Eats</Link>
    </header>
    <Route path='/'>
      <Home />
    </Route>
    <Route path='/pizza'>
      <Order />
    </Route>
    </>
  );
};
export default App;
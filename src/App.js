import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import Pokemon from './pages/Pokemon';
import { useSelector } from 'react-redux';
import './App.scss';

const App = () => {
  const cartItemCount = useSelector((state) =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  );

  return (
    <BrowserRouter>
      <Navigation cartItemCount={cartItemCount}/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/pokemon" component={Pokemon} exact/>
        <Route path="/cart" component={Cart} exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
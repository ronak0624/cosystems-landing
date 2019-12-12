import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import Product from './pages/Product'
import Support from './pages/Support';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Product} />
          <Route exact path="/about" component={Product} />
          <Route exact path="/support" component={Support} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

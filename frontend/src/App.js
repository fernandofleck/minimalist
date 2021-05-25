import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './img/iconos/m/android-icon-48x48.png';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/product/Products';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="">
        <header className="">
          <nav>
            <div className="nav-wrapper white">
              <Link to="/" className="valign-wrapper left"><img className="valign-wrapper" src={logo} alt="Minimalist"/></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/about" className="grey-text text-darken-4">Minimalist</Link></li>
                <li><Link to="/products" className="grey-text text-darken-4">Products</Link></li>
                <li><Link to="/contact" className="grey-text text-darken-4">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

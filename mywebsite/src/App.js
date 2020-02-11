import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeNav from './components/nav';
import About from './pages/About';
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/about' exact component={About}/>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import BookPage from './components/BookPage'
import BookList from './components/BookList'
import Home from './components/Home'
import About from './components/About'
function App() {
  return (
    <div>
     <NavBar/>
     <Switch>
      <Route path='/books' component={BookList}/>
      <Route exact path='/' component={Home}/>
      <Route path="/about" component={About}/>
     </Switch>
    </div>
  );
}

export default App;

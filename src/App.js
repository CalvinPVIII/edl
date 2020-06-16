import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import BookPage from './components/BookPage'
import BookList from './components/BookList'
import Home from './components/Home'
function App() {
  return (
    <div>
     <NavBar/>
     <Switch>
      <Route path='/books' component={BookList}/>
      <Route path='' component={Home}/>
     </Switch>
        </div>
  );
}

export default App;

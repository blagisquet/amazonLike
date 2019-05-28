import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ListArticles from './Components/ListArticles/ListArticles';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Menu />
      <Route path="/account/login" exact component={Login} />
      <Route path="/account/create" exact component={Register} />
      <Route path="/" exact component={ListArticles} />
    </div>
  );
}

export default App;

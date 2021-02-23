import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from "react"
import Home from './pages/Home';
import Login from './pages/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyFavoriteCity from './pages/MyFavoriteBooks';


function App() {

  return (
    <Router>
      <Switch>
        <Route path= "/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route component={Login}/>

      </Switch>
    </Router>
   
  );
}

export default App;

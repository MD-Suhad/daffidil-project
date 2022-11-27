import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Swipe from "./components/Swipe/Swipe";


function App() {
  return (
    <Router>
      <Switch> 
      <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login}></Route>
        <Route path="/addCard" component={AddCard}></Route>
        <Route path="/swipe" component={Swipe}></Route>
      </Switch>
    
    </Router>
  );
}

export default App;

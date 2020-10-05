import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Info from "./components/Info";
import Cards from "./components/Cards";
import BackCards from "./components/CardsBack";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Info}/>
            <Route exact path="/cards" component={Cards}/>
            <Route exact path="/cards-back"/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
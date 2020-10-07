import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Info from "./components/infoPage/Info";
import Cards from "./components/cards/Cards";
import BackCards from "./components/CardsBack";
import Footer from "./components/layout/Footer"


function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Info}/>
            <Route exact path="/cards" component={Cards}/>
            <Route exact path="/cards-back" component={BackCards}/>
          </Switch>
        </Router>
        <Footer/>  
          
      </div>
  );
}

export default App;
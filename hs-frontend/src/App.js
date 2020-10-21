import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Cards from "./components/cards/Cards";
import BackCards from "./components/cardbacks/CardsBack";
import Footer from "./components/layout/Footer";
import Home from "./components/homePage/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/cards-back" component={BackCards} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

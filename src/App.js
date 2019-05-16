import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";

import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Home from "./scenes/Home";
import Visas from "./scenes/Visas";
import PlaneTickets from "./scenes/PlaneTickets";
import Agencies from "./scenes/Agencies";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/visas" component={Visas} />
                <Route path="/plane-tickets" component={PlaneTickets} />
                <Route path="/agencies" component={Agencies} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

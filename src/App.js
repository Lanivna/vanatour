import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
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
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
              >
                <Route exact path="/" component={Home} />
                <Route path="/visas" component={Visas} />
                <Route path="/plane-tickets" component={PlaneTickets} />
                <Route path="/agencies" component={Agencies} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </AnimatedSwitch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

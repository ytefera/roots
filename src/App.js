import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { withStyles } from '@material-ui/core';

import Home from "./components/home";
import About from "./components/about";
import Jobs from "./components/jobs";
import Partners from "./components/partners";
import Learn from "./components/learn";
import Contact from "./components/contact";
import Error from "./components/error";
import Navigation from "./components/navigation";
import RootsToolbar from "./components/toolbar";

import './App.css';
import './styles/global.css';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
            <RootsToolbar/>
            <Navigation />
            <div className={classes.toolbar} />
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/jobs" component={Jobs}/>
            <Route path="/partners" component={Partners}/>
            <Route path="/learn" component={Learn}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(styles)(App);

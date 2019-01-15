import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

export default class extends Component {

  state = {}
  render() {
    return (<BrowserRouter>
        <Switch>
          <Route path="/main" render={ ()=><h2>Main</h2> }/>
          <Route path="/" exact render={ ()=><h2>Home</h2> }/>
          <Route path="/about" render={ ()=><h2>About</h2> }/>
        </Switch>
    </BrowserRouter>
    );
  }
}

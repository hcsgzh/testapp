## Situation:

I have a problem with react-router when I use "Route" with webpack and babel. React-Router only rendering the "/" route.

## Problem

The problem is React-Router rendering only "/" route, If I use webpack and babel to generate the bundle.js. But when I use "react-scripts start", React-Router will render properly.

When I run the same code by using react-scripts start. The React-Router will render properly.  `npm start`

However, if I run the same code by using webpack --mode development and run the code. The React-Router will render only "/" route.  `npm run watch`

## More details

I think the problem is after the babel translated the JSX code and the result JS code is different when I use `react-scripts start` and `webpack --mode development`. 

React-scripts will translate the code correctly but the webpack will translate wrong. Hence, I guess the problem is from the bable. Maybe my babel did not configure properly. Could someone take a look in my .babelrc file? and please explain to me.

```
{
    "presets": [
        "@babel/env", "@babel/react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}

```

## The testapp
There are three routes in the project. 

> "/main" 
> "/"
> "about"

```
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

```

## Thanks

https://stackoverflow.com/questions/54193472/how-to-fix-react-router-only-rendering-the-route

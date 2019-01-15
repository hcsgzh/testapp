## Situation:

I have a problem with react-router when I use "Route" with webpack and babel. React-Router only rendering the "/" route.

## Problem

The problem is React-Router rendering only "/" route, If I use webpack and babel to generate the bundle.js. But when I use "react-scripts start", React-Router will render properly.

When I run the same code by using react-scripts start. The React-Router will render properly.  `npm start`

```

      Object(C_node_reactJS_testapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
},
            __self: this
}, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
},
            __self: this
}, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
            path: "/main",
            render: function render() {
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
},
                __self: this
}, "Main");
},
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
},
            __self: this
}), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
            path: "/",
            exact: true,
            render: function render() {
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
},
                __self: this
}, "Home");
},
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
},
            __self: this
}), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
            path: "/about",
            render: function render() {
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
},
                __self: this
}, "About");
},
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
},
            __self: this
})));
}
}]);

      return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

```

However, if I run the same code by using webpack --mode development and run the code. The React-Router will render only "/" route.  `npm run watch`

```

_createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/main",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Main");
}
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        exact: true,
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Home");
}
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/about",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About");
}
})));
}
}]);

```

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

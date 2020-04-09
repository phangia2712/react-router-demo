import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Navigation from './Navigation'
import Footer from './Footer'
import routes from '../routes-config'

function App() {
    

    function showRoutes (array) {
        let xhtml = null
        if (array.length > 0) {
            xhtml = array.map((route, index) => {
                return <Route key={index} exact={route.exact} path={route.path} component={route.main} />
            })
        }
    return <Switch>{ xhtml }</Switch>
    }
  return (
    <Router>
        <div className="App">
            <Navigation />
            { showRoutes(routes) }
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post" component={Post} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route><h1>Page not found</h1></Route>
            </Switch> */}
            <Footer />
        </div>
    </Router>
  );
}

export default App;

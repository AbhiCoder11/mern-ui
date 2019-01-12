import React,{Component} from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';

 const Routes = () => (
    <BrowserRouter>
       <Switch>
           {/* <Route exact path='/' component={Home}/> */}
           <Route exact path ="/:userid/:name" render={props => <Home {...props}/>} />
           <Route path = '/about'component= {About} />
           <Route exact path = '/contact' component={Contact} />
           <Route path = '/contact' component={Contact} />

       </Switch> 
    </BrowserRouter>
);

export default Routes


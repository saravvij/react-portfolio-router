import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/portfolio/:id" component={PortfolioItem}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
);

export default AppRouter;

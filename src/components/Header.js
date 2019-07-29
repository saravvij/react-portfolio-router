import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div>
     <h1>Portfolio</h1>
      <NavLink exact to="/" activeClassName="selected">Home</NavLink>
      <NavLink exact to="/portfolio" activeClassName="selected">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
    </div>
);

export default Home;
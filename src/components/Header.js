import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>My Blog</h1>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Add Blog</NavLink>
        <NavLink to="/login">login</NavLink>
      </div>
    );
  }
}

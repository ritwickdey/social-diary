import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Add Blog</NavLink>
        <NavLink to="/edit/15">Edit Blog</NavLink>
        <NavLink to="/login">login</NavLink>
      </div>
    );
  }
}

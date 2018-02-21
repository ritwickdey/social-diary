import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  navLinkstyle = { paddingRight: '10px' };
  render() {
    return (
      <div style={{ marginBottom: '10px' }}>
        <h1>My Blog</h1>
        <NavLink style={this.navLinkstyle} to="/">
          Dashboard
        </NavLink>
        <NavLink style={this.navLinkstyle} to="/create">
          Add Blog
        </NavLink>
        <NavLink style={this.navLinkstyle} to="/login">
          login
        </NavLink>
      </div>
    );
  }
}

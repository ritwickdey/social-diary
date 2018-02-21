import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/user';

const Header = props => {
  const navLinkstyle = { paddingRight: '10px' };
  return (
    <div style={{ marginBottom: '10px' }}>
      <h1>My Blog</h1>
      <NavLink style={navLinkstyle} to="/">
        Dashboard
      </NavLink>
      <NavLink style={navLinkstyle} to="/create">
        Add Blog
      </NavLink>
      <NavLink style={navLinkstyle} to="/login">
        login
      </NavLink>
      <button onClick={() => props.startLogout()}>logout</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

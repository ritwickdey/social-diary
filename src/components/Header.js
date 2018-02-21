import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/user';

const Header = props => {
  const navLinkstyle = { paddingRight: '10px' };
  return (
    <div style={{ marginBottom: '10px' }}>
      <h1>Social Blogs</h1>
      <NavLink style={navLinkstyle} to="/">
        Dashboard
      </NavLink>
      <NavLink style={navLinkstyle} to="/create">
        Add Blog
      </NavLink>
      {!props.user ? (
        <NavLink style={navLinkstyle} to="/login">
          login
        </NavLink>
      ) : (
        <span>
          <NavLink style={navLinkstyle} to="/myBlogs">
            My Blogs
          </NavLink>
          <button onClick={() => props.startLogout()}>logout</button>
        </span>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

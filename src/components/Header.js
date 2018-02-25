import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/user';

import CSSModules from 'react-css-modules';
import Styles from '../styles/modules/header.module.css';
 console.log('style', Styles);
const Header = props => {
  const navLinkstyle = { paddingRight: '10px' };
  return (
    <div style={{ marginBottom: '10px' }}>
      <h1>Social Diary</h1>
      <p>Share your story with others</p>
      <NavLink style={navLinkstyle} to="/">
        Dashboard
      </NavLink>
      {!props.user ? (
        <NavLink style={navLinkstyle} to="/login">
          login
        </NavLink>
      ) : (
        <span>
          <NavLink style={navLinkstyle} to="/create">
            Add Story
          </NavLink>
          <NavLink style={navLinkstyle} to="/myStory">
            My Story
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

export default CSSModules(
  connect(mapStateToProps, mapDispatchToProps)(Header),
  Styles
);

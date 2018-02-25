import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { startLogout } from '../actions/user';

import CSSModules from 'react-css-modules';
import style from '../styles/modules/header.module.css';

const Header = props => {
  console.log(props);
  return (
    <div styleName="navHeader">
      <div styleName="navHeaderContainer" className="container">
        <div styleName="brand">
          <Link styleName="headLine" to="/">
            Social Diary
          </Link>
          <p styleName="subHeader">Share your story with others</p>
        </div>
        <div styleName="navLinks">
          {!props.user ? (
            <NavLink
              styleName="navLink"
              to="/login"
              activeClassName={style.navLinkActive}
            >
              login
            </NavLink>
          ) : (
            <span>
              <NavLink
                styleName="navLink"
                to="/create"
                activeClassName={style.navLinkActive}
              >
                Add Story
              </NavLink>
              <NavLink
                styleName="navLink"
                to="/myStory"
                activeClassName={style.navLinkActive}
              >
                My Story
              </NavLink>
              <button styleName="navLink" onClick={() => props.startLogout()}>
                logout
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps, undefined, {
  pure: false
})(
  CSSModules(Header, style, {
    allowMultiple: true
  })
);

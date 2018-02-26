import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import { startLogin } from '../actions/user';

import styles from '../styles/modules/login.module.css';

const LoginPage = props => (
  <div styleName="loginContainer" className="container">
    <div styleName="loginScreen">
      <div styleName="loginHeadSection">
        <h2 styleName="loginHeadline">Login</h2>
        <p styleName="loginSubHeadline">Just a signal click!</p>
      </div>
      <div styleName="loginBtns">
        <button styleName="loginBtn_google" onClick={() => props.startLogin()}>
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(
  CSSModules(LoginPage, styles)
);

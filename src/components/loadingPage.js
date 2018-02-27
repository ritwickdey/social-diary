import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

// https://codepen.io/ritwickdey/pen/WMdpyE

import styles from '../styles/modules/loading.module.css';

const LoadingPage = ({ showLoading }) => (
  <div>
    {showLoading && (
      <div styleName="loader-root-container">
        <div styleName="loader-container">
          <div styleName="cicle-loader" />
        </div>
      </div>
    )}
  </div>
);

const mapStateToProp = state => ({
  showLoading: state.appStatus.showLoading
});

export default connect(mapStateToProp)(CSSModules(LoadingPage, styles));

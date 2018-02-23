import React from 'react';
import { connect } from 'react-redux';

const LoadingPage = ({ showLoading }) => (
  <div>{showLoading && <p>Loading...</p>}</div>
);

const mapStateToProp = state => ({
  showLoading: state.appStatus.showLoading
});

export default connect(mapStateToProp)(LoadingPage);

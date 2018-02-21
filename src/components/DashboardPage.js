import React from 'react';
import { connect } from 'react-redux';
import { filterBlogs } from '../selectors/filters';

import BlogList from './BlogList';
import FilterPage from './filterPage';

const DashboardPage = props => (
  <div>
    <FilterPage />
    <BlogList blogs={props.blogs} />
  </div>
);

const mapStateToProp = state => ({
  blogs: filterBlogs(state.blogs, state.filters)
});

export default connect(mapStateToProp)(DashboardPage);

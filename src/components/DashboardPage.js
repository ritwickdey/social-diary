import React from 'react';
import { connect } from 'react-redux';
import { filterStories } from '../selectors/filters';

import StoryList from './StoryList';
import FilterPage from './filterPage';

const DashboardPage = props => (
  <div>
    <FilterPage />
    <StoryList blogs={props.blogs} />
  </div>
);

const mapStateToProp = state => ({
  blogs: filterStories(state.blogs, state.filters)
});

export default connect(mapStateToProp)(DashboardPage);

import React from 'react';
import { connect } from 'react-redux';
import { filterStories } from '../selectors/filters';

import StoryList from './StoryList';
import FilterPage from './filterPage';

const DashboardPage = props => (
  <div>
    <FilterPage />
    <StoryList stories={props.stories} />
  </div>
);

const mapStateToProp = state => ({
  stories: filterStories(state.stories, state.filters)
});

export default connect(mapStateToProp)(DashboardPage);

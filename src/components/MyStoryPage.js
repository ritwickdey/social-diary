import React from 'react';
import { connect } from 'react-redux';

import StoryList from './StoryList';
import FilterPage from './filterPage';
import { filterStories } from '../selectors/filters';
import { getMyStories } from '../selectors/stories';

const MyStoryPage = props => (
  <div>
    <h4>My Story</h4>
    <FilterPage />
    <StoryList nextUrl="/edit/" blogs={props.blogs} />
  </div>
);

const mapStateToProp = state => ({
  blogs: filterStories(getMyStories(state.blogs, state.user.uid), state.filters)
});

export default connect(mapStateToProp)(MyStoryPage);

import React from 'react';
import { connect } from 'react-redux';

import StoryView from './StoryView';

const ReadStoryPage = props => (
  <div className="container">
    <StoryView story={props.story} />
  </div>
);

const mapStateToProp = (state, props) => {
  const story = state.stories.find(e => e.id === props.match.params.id);
  return { story };
};

export default connect(mapStateToProp)(ReadStoryPage);

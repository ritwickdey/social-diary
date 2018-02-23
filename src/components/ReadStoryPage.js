import React from 'react';
import moment from 'moment';
import Interweave from 'interweave';
import { connect } from 'react-redux';

const ReadStoryPage = props => (
  <div>
    <h2>{props.story.title}</h2>
    <div>
      {props.story.uName} {' | '}
      {moment(props.story.postedAt).format('DD MMM YYYY')}
    </div>
    <Interweave tagName="p" content={props.story.body} />
  </div>
);

const mapStateToProp = (state, props) => {
  const story = state.stories.find(e => e.id === props.match.params.id);
  return { story };
};

export default connect(mapStateToProp)(ReadStoryPage);

import React from 'react';
import Interweave from 'interweave';
import moment from 'moment';

const StoryView = props => (
  <div>
    <h2>{props.story.title}</h2>
    {props.story.uName &&
      props.story.postedAt && (
        <div>
          {props.story.uName} {' | '}
          {moment(props.story.postedAt).format('DD MMM YYYY')}
        </div>
      )}
    <Interweave tagName="p" content={props.story.body} />
  </div>
);

export default StoryView;

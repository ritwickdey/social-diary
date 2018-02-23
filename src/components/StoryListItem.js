import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const StoryListItem = props => (
  <div>
    <h4>
      <Link to={(props.nextUrl || '/read/') + props.story.id}>
        {props.story.title}
      </Link>
    </h4>
    <p>{moment(props.story.postedAt).format('DD MMM YYYY')}</p>
  </div>
);

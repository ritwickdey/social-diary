import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const StoryListItem = props => (
  <div>
    <h4>
      <Link to={(props.nextUrl || '/read/') + props.blog.id}>
        {props.blog.title}
      </Link>
    </h4>
    <p>{moment(props.blog.postedAt).format('DD MMM YYYY')}</p>
  </div>
);

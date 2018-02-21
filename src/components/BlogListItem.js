import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const BlogListItem = ({ blog }) => (
  <div>
    <h4>
      <Link to={'/edit/' + blog.id}>{blog.title}</Link>
    </h4>
    <p>{moment(blog.postedAt).format('DD MMM YYYY')}</p>
  </div>
);

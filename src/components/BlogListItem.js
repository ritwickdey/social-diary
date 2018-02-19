import React from 'react';
import { Link } from 'react-router-dom';
export const BlogListItem = ({ blog }) => (
  <div>
    <h4>
      <Link to={'/edit/' + blog.id}>{blog.title}</Link>
    </h4>
    <p>{blog.postedAt}</p>
  </div>
);

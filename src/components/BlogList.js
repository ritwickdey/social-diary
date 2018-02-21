import React from 'react';
import { connect } from 'react-redux';
import { BlogListItem } from './BlogListItem';
import { filterBlogs } from '../selectors/filters';

const BlogList = props => {
  return (
    <div>
      {props.blogs.length === 0 ? (
        <p>No Blogs </p>
      ) : (
        props.blogs.map(blog => <BlogListItem key={blog.id} blog={blog} />)
      )}
    </div>
  );
};

export default BlogList;

import React from 'react';
import { BlogListItem } from './BlogListItem';

const BlogList = props => {
  return (
    <div>
      {props.blogs.length === 0 ? (
        <p>No Blogs </p>
      ) : (
        props.blogs.map(blog => (
          <BlogListItem {...props} key={blog.id} blog={blog} />
        ))
      )}
    </div>
  );
};

export default BlogList;

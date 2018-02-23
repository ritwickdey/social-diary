import React from 'react';
import { StoryListItem } from './StoryListItem';

const BlogList = props => {
  return (
    <div>
      {props.blogs.length === 0 ? (
        <p>No Blogs </p>
      ) : (
        props.blogs.map(blog => (
          <StoryListItem {...props} key={blog.id} blog={blog} />
        ))
      )}
    </div>
  );
};

export default BlogList;

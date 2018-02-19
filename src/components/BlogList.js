import React from 'react';
import { connect } from 'react-redux';
import { BlogListItem } from './BlogListItem';

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

const mapStateToProp = state => ({
  blogs: state.blogs || []
});

export default connect(mapStateToProp)(BlogList);

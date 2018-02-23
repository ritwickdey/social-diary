import React from 'react';
import { connect } from 'react-redux';

import BlogList from './BlogList';
import FilterPage from './filterPage';
import { filterBlogs } from '../selectors/filters';
import { getMyBlogs } from '../selectors/blogs';

const MyBlogPage = props => (
  <div>
    <h4>My Story</h4>
    <FilterPage />
    <BlogList nextUrl="/edit/" blogs={props.blogs} />
  </div>
);

const mapStateToProp = state => ({
  blogs: filterBlogs(getMyBlogs(state.blogs, state.user.uid), state.filters)
});

export default connect(mapStateToProp)(MyBlogPage);

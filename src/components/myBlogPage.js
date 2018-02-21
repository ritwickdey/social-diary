import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogList from './BlogList';
import FilterPage from './filterPage';
import { filterBlogs } from '../selectors/filters';
import { getMyBlogs } from '../selectors/blogs';

class MyBlogPage extends Component {
  render() {
    return (
      <div>
        <BlogList blogs={this.props.blogs} />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  blogs: filterBlogs(getMyBlogs(state.blogs, state.user.uid), state.filters)
});

export default connect(mapStateToProp)(MyBlogPage);

import React from 'react';
import { connect } from 'react-redux';
import { BlogForm } from './BlogForm';
import { startAddBlog } from '../actions/blogs';

class AddBlogPage extends React.Component {
  onSubmitHandler = blog => {
    this.props.startAddBlog(blog);
    this.props.history.push('/myBlogs');
  };
  render() {
    return (
      <div>
        <h3>Add Story</h3>
        <BlogForm
          submitBtnTitle="Create Story"
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  startAddBlog: blog => dispatch(startAddBlog(blog))
});
export default connect(undefined, mapDispathToProps)(AddBlogPage);

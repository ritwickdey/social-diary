import React from 'react';
import { connect } from 'react-redux';
import { BlogForm } from './BlogForm';
import { addBlog } from '../actions/blogs';

class AddBlogPage extends React.Component {
  onSubmitHandler = blog => {
    this.props.addBlog(blog);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h3>Add Blog</h3>
        <BlogForm onSubmit={this.onSubmitHandler} />
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addBlog: blog => dispatch(addBlog(blog))
});
export default connect(undefined, mapDispathToProps)(AddBlogPage);

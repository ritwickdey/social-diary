import React from 'react';
import { BlogForm } from './BlogForm';
import { connect } from 'react-redux';
import { startEditBlog, startDeleteBlog } from '../actions/blogs';

class EditBlogPage extends React.Component {
  onDeleteHandle = () => {
    if (!window.confirm('are you sure to delete?')) return;
    this.props.startDeleteBlog(this.props.blog.id);
    this.props.history.push('/myBlogs');
  };
  onSubmitHandle = blog => {
    this.props.startEditBlog(this.props.blog.id, blog);
    this.props.history.push('/myBlogs');
  };
  render() {
    return (
      <div>
        <h4>Edit Story</h4>
        <BlogForm
          blog={this.props.blog}
          submitBtnTitle="Edit Blog"
          onSubmit={this.onSubmitHandle}
        />
        <button onClick={this.onDeleteHandle}>Delete Story</button>
      </div>
    );
  }
}

const mapStateToProp = (state, props) => {
  const blog = state.blogs.find(e => e.id === props.match.params.id);
  return { blog };
};

const mapDispatchToProp = dispatch => ({
  startEditBlog: (id, updates) => dispatch(startEditBlog(id, updates)),
  startDeleteBlog: id => dispatch(startDeleteBlog(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(EditBlogPage);

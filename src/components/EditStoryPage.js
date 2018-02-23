import React from 'react';
import { BlogForm } from './BlogForm';
import { connect } from 'react-redux';
import { startEditStory, startDeleteStory } from '../actions/stories';

class EditBlogPage extends React.Component {
  onDeleteHandle = () => {
    if (!window.confirm('are you sure to delete?')) return;
    this.props.startDeleteStory(this.props.blog.id);
    this.props.history.push('/myBlogs');
  };
  onSubmitHandle = blog => {
    this.props.startEditStory(this.props.blog.id, blog);
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
  startEditStory: (id, updates) => dispatch(startEditStory(id, updates)),
  startDeleteStory: id => dispatch(startDeleteStory(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(EditBlogPage);

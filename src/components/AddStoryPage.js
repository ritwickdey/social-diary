import React from 'react';
import { connect } from 'react-redux';
import { StoryForm } from './StoryForm';
import { startAddStory } from '../actions/stories';

class AddBlogPage extends React.Component {
  onSubmitHandler = blog => {
    this.props.startAddStory(blog);
    this.props.history.push('/myBlogs');
  };
  render() {
    return (
      <div>
        <h3>Add Story</h3>
        <StoryForm
          submitBtnTitle="Create Story"
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  startAddStory: blog => dispatch(startAddStory(blog))
});
export default connect(undefined, mapDispathToProps)(AddBlogPage);

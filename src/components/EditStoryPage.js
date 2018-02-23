import React from 'react';
import { StoryForm } from './StoryForm';
import { connect } from 'react-redux';
import { startEditStory, startDeleteStory } from '../actions/stories';

class EditStoryPage extends React.Component {
  onDeleteHandle = () => {
    if (!window.confirm('are you sure to delete?')) return;
    this.props
      .startDeleteStory(this.props.story.id)
      .then(() => this.props.history.push('/myStory'));
  };
  onSubmitHandle = story => {
    this.props
      .startEditStory(this.props.story.id, story)
      .then(e => this.props.history.push(e.id ? `/read/${e.id}` : '/myStory'));
  };
  render() {
    return (
      <div>
        <h4>Edit Story</h4>
        <StoryForm
          story={this.props.story}
          submitBtnTitle="Edit Story"
          onSubmit={this.onSubmitHandle}
        />
        <button onClick={this.onDeleteHandle}>Delete Story</button>
      </div>
    );
  }
}

const mapStateToProp = (state, props) => {
  const story = state.stories.find(e => e.id === props.match.params.id);
  return { story };
};

const mapDispatchToProp = dispatch => ({
  startEditStory: (id, updates) => dispatch(startEditStory(id, updates)),
  startDeleteStory: id => dispatch(startDeleteStory(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(EditStoryPage);

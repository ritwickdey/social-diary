import React from 'react';
import { StoryForm } from './StoryForm';
import { connect } from 'react-redux';
import { startEditStory, startDeleteStory } from '../actions/stories';

class EditStoryPage extends React.Component {
  onDeleteHandle = () => {
    if (!window.confirm('are you sure to delete?')) return;
    const history = this.props.history;
    this.props.startDeleteStory(this.props.story.id).then(e => {
      const storyId = e.story ? e.story.id : null;
      history.push(storyId ? `/read/${storyId}` : '/myStory');
    });
  };
  onSubmitHandle = story => {
    const history = this.props.history;
    this.props
      .startEditStory(this.props.story.id, story)
      .then(() => this.props.history.push('/myStory'));
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

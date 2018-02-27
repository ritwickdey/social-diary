import React from 'react';
import { connect } from 'react-redux';

import StoryForm from './StoryForm';
import { startEditStory, startDeleteStory } from '../actions/stories';

class EditStoryPage extends React.Component {
  onDeleteHandle = () => {
    if (!window.confirm('are you sure to delete?')) return;
    this.props
      .startDeleteStory(this.props.story.id)
      .then(() => this.props.history.push('/myStory'));
  };
  
  render() {
    return (
      <div>
        <StoryForm
          title="Edit Story"
          story={this.props.story}
          submitBtnTitle="Edit Story"
          onSubmit={this.onSubmitHandle}
        />
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

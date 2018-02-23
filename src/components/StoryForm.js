import React from 'react';
import StoryView from './StoryView';

export class StoryForm extends React.Component {
  defaultState = () => ({ story: { title: '', body: '' }, error: undefined });

  state = {
    ...this.defaultState(),
    story: {
      title: this.props.story ? this.props.story.title : '',
      body: this.props.story ? this.props.story.body : ''
    }
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(prev => ({ story: { ...prev.story, title } }));
  };

  onBodyChange = e => {
    const body = e.target.value;
    this.setState(prev => ({ story: { ...prev.story, body } }));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const title = this.state.story.title.trim();
    const body = this.state.story.body.trim();
    if (!title || !body) {
      return this.setState(() => ({
        error: 'Both title & body fields are requried'
      }));
    }
    this.props.onSubmit({ title, body: body });
    this.setState(() => ({ ...this.defaultState() }));
  };

  render() {
    return (
      <div>
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmitHandler}>
            <div>
              <input
                onChange={this.onTitleChange}
                value={this.state.story.title}
                type="text"
                name="title"
                placeholder="Story Title"
              />
            </div>
            <div>
              <textarea
                onChange={this.onBodyChange}
                value={this.state.story.body}
                type="text"
                name="body"
                placeholder="What's happening?"
              />
            </div>
            <button type="submit">
              {this.props.submitBtnTitle || 'Create'}
            </button>
          </form>
        </div>
        <div>
          <StoryView story={this.state.story} />
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import StoryView from './StoryView';
import CSSModules from 'react-css-modules';

import styles from '../styles/modules/storyForm.module.css';

class StoryForm extends Component {
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
      <div styleName="container" className="container">
        {this.props.title && <h4 styleName="heading">{this.props.title}</h4>}
        <div styleName="story">
          <div styleName="storyForm">
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmitHandler}>
              <div>
                <input
                  styleName="inputBox"
                  onChange={this.onTitleChange}
                  value={this.state.story.title}
                  type="text"
                  name="title"
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea
                  styleName="inputArea"
                  onChange={this.onBodyChange}
                  value={this.state.story.body}
                  type="text"
                  name="body"
                  placeholder="What's happening?"
                />
              </div>
              <button styleName="btn" type="submit">
                {this.props.submitBtnTitle || 'Create'}
              </button>
            </form>
          </div>
          {this.state.story &&
            (this.state.story.title || this.state.story.body) && (
              <div styleName="storyPreview">
                <StoryView story={this.state.story} />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default CSSModules(StoryForm, styles);

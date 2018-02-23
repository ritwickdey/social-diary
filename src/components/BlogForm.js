import React from 'react';

export class BlogForm extends React.Component {
  defaultState = () => ({ title: '', body: '', error: undefined });

  state = {
    ...this.defaultState(),
    title: this.props.blog ? this.props.blog.title : '',
    body: this.props.blog ? this.props.blog.body : ''
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const title = this.state.title.trim();
    const body = this.state.body.trim();
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <input
              onChange={this.onTitleChange}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Story Title"
            />
          </div>
          <div>
            <textarea
              onChange={this.onBodyChange}
              value={this.state.body}
              type="text"
              name="body"
              placeholder="What's happening?"
            />
          </div>
          <button type="submit">{this.props.submitBtnTitle || 'Create'}</button>
        </form>
      </div>
    );
  }
}

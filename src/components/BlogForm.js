import React from 'react';

export class BlogForm extends React.Component {
  defaultState = () => ({ title: '', blog: '', error: undefined });

  state = { ...this.defaultState() };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBlogChange = e => {
    const blog = e.target.value;
    this.setState(() => ({ blog }));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const title = this.state.title.trim();
    const blog = this.state.blog.trim();
    if (!title || !blog) {
      return this.setState(() => ({
        error: 'Both title & blog fields are requried'
      }));
    }
    this.props.onSubmit({ title, body: blog });
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
              id="title"
              placeholder="Blog Title"
            />
          </div>
          <div>
            <textarea
              onChange={this.onBlogChange}
              value={this.state.blog}
              type="text"
              name="blog"
              id="blog"
              placeholder="What is happening?"
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

import React from 'react';
import { BlogForm } from './BlogForm';

export class EditBlogPage extends React.Component {
  render() {
    return (
      <div>
        Edit Blog Page. id: {this.props.match.params.id}
        <BlogForm />
      </div>
    );
  }
}

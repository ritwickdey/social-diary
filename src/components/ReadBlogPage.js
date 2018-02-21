import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const ReadBlogPage = props => (
  <div>
    <h2>{props.blog.title}</h2>
    <div>
      {props.blog.uName} {' | '}
      {moment(props.blog.postedAt).format('DD MMM YYYY')}
    </div>
    <p>{props.blog.body}</p>
  </div>
);

const mapStateToProp = (state, props) => {
  const blog = state.blogs.find(e => e.id === props.match.params.id);
  return { blog };
};

export default connect(mapStateToProp)(ReadBlogPage);

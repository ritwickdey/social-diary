import React from 'react';
import { StoryListItem } from './StoryListItem';

const BlogList = props => {
  return (
    <div>
      {props.stories.length === 0 ? (
        <p>No Blogs </p>
      ) : (
        props.stories.map(story => (
          <StoryListItem {...props} key={story.id} blog={story} />
        ))
      )}
    </div>
  );
};

export default BlogList;

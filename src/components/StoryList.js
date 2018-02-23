import React from 'react';
import { StoryListItem } from './StoryListItem';

const StoryList = props => {
  return (
    <div>
      {props.stories.length === 0 ? (
        <p>No Stories</p>
      ) : (
        props.stories.map(story => (
          <StoryListItem {...props} key={story.id} story={story} />
        ))
      )}
    </div>
  );
};

export default StoryList;

import React from 'react';
import { StoryListItem } from './StoryListItem';
import CSSModules from 'react-css-modules';

import styles from '../styles/modules/storyList.module.css';

const StoryList = props => {
  return (
    <div className="container">
      <div styleName="StoryListContainer">
        <div styleName="header">
          <div>Story Name</div>
          <div className="hideOnExtraSmall">Author</div>
          <div className="hideOnExtraSmall">Published Date</div>
        </div>
        {props.stories.length === 0 ? (
          <p styleName="textFormat">No Stories</p>
        ) : (
          props.stories.map(story => (
            <StoryListItem {...props} key={story.id} story={story} />
          ))
        )}
      </div>
    </div>
  );
};

export default CSSModules(StoryList, styles);

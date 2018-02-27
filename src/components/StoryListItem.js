import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CSSModules from 'react-css-modules';

import styles from '../styles/modules/storyListItem.module.css';

export const StoryListItem = props => (
  <Link
    styleName="noDefaultLinkUI"
    to={(props.nextUrl || '/read/') + props.story.id}
  >
    <div className={styles.listItem}>
      <p style={{ flex: 3 }}>{props.story.title}</p>
      <p style={{ flex: 1 }} className="hideOnSmall hideOnExtraSmall">
        {props.story.uName.split(' ')[0]}
      </p>
      <p style={{ flex: 1 }} className="hideOnExtraSmall ">
        {moment(props.story.postedAt).format('DDD MMM, YY')}
      </p>
    </div>
  </Link>
);

export default CSSModules(StoryListItem, styles);

import React from 'react';
import Interweave from 'interweave';
import moment from 'moment';

const styles = {
  headLine: {
    fontSize: '2.6rem',
    padding: '1rem 0',
    wordBreak: 'keep-all'
  },
  subHeadline: {
    fontSize: '1.6rem',
    paddingBottom: '1rem',
    fontStyle: 'italic',
    wordBreak: 'keep-all'
  },
  content: {
    marginTop: '1.5rem'
  }
};

const StoryView = props => (
  <div>
    <h2 style={styles.headLine}>{props.story.title}</h2>
    {props.story.uName &&
      props.story.postedAt && (
        <div style={styles.subHeadline}>
          {props.story.uName} {' | '}
          {moment(props.story.postedAt).format('DD MMM YYYY')}
        </div>
      )}
    <div style={styles.content}>
      <Interweave
        tagName="p"
        content={props.story.body}
        onBeforeParse={content => content.split('\n').join('<br>')}
      />
    </div>
  </div>
);

export default StoryView;

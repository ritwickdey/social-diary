import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startDeleteStory } from '../actions/stories';

import styles from '../styles/modules/myStoryList.module.css';

class MyStoryList extends Component {
  onDeleteHandle = id => {
    if (!window.confirm('are you sure to delete?')) return;
    this.props.startDeleteStory(id);
  };
  render() {
    return (
      <div className="container">
        <div>
          <div styleName="header">
            <div style={{ flex: 3 }}>Story Title</div>
          </div>
          {this.props.stories.length === 0 ? (
            <p styleName="textFormat">No Stories</p>
          ) : (
            this.props.stories.map(story => (
              <div key={story.id} className={styles.listItem}>
                <p style={{ flex: 1 }}>{story.title}</p>
                <Link
                  styleName="btn"
                  to={'/edit/' + story.id}
                >
                  Edit
                </Link>
                <button
                  styleName="btn_danger"
                  onClick={() => this.onDeleteHandle(story.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => ({
  startDeleteStory: id => dispatch(startDeleteStory(id))
});

export default connect(undefined, mapDispatchToProp)(
  CSSModules(MyStoryList, styles)
);

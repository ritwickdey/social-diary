import { db } from '../firebase/firestore';
import { hideLoader, showLoader } from './appStatus';

const ROOT_DB = '/stories';

const addStory = ({
  id = Date.now(),
  title = '',
  postedAt = Date.now(),
  body = '',
  uId = '',
  uName = ''
} = {}) => ({
  type: 'ADD_STORY',
  story: { id, title, body, postedAt, uId, uName }
});

export const startAddStory = story => (dispatch, getState) => {
  const { user: { uid, name } } = getState();
  story.uId = uid;
  story.uName = name;
  story.postedAt = Date.now();
  dispatch(showLoader());
  return db
    .collection(ROOT_DB)
    .add(story)
    .then(result => {
      dispatch(hideLoader());
      story.id = result.id;
      return dispatch(addStory(story));
    });
};

const editStory = (id, { title, body }) => ({
  type: 'EDIT_STORY',
  id,
  updates: { title, body }
});

export const startEditStory = (id, { title, body }) => dispatch => {
  dispatch(showLoader());
  return db
    .collection(ROOT_DB)
    .doc(id)
    .update({ title, body })
    .then(() => {
      dispatch(hideLoader());
      return dispatch(editStory(id, { title, body }));
    });
};

const deleteStory = id => ({ type: 'DELETE_STORY', id });

export const startDeleteStory = id => dispatch => {
  dispatch(showLoader());
  return db
    .collection(ROOT_DB)
    .doc(id)
    .delete()
    .then(() => {
      dispatch(hideLoader());
      return dispatch(deleteStory(id));
    });
};

const setStory = stories => ({ type: 'SET_STORY', stories });

export const startSetStory = () => {
  return dispatch => {
    dispatch(showLoader());
    return db
      .collection(ROOT_DB)
      .get()
      .then(results => {
        const story = [];
        results.forEach(e => story.push({ ...e.data(), id: e.id }));
        dispatch(hideLoader());
        return dispatch(setStory(story));
      });
  };
};

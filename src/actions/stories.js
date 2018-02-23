import { db } from '../firebase/firestore';

const ROOT_DB = '/blogs';

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

export const startAddStory = story => {
  return (dispatch, getState) => {
    const { user: { uid, name } } = getState();
    story.uId = uid;
    story.uName = name;
    db
      .collection(ROOT_DB)
      .add(story)
      .then(result => {
        story.id = result.id;
        return dispatch(addStory(story));
      });
  };
};

const editStory = (id, { title, body }) => ({
  type: 'EDIT_STORY',
  id,
  updates: { title, body }
});

export const startEditStory = (id, { title, body }) => dispatch =>
  db
    .collection(ROOT_DB)
    .doc(id)
    .update({ title, body })
    .then(() => dispatch(editStory(id, { title, body })));

const deleteStory = id => ({ type: 'DELETE_STORY', id });

export const startDeleteStory = id => dispatch =>
  db
    .collection(ROOT_DB)
    .doc(id)
    .delete()
    .then(() => dispatch(deleteStory(id)));

const setStory = stories => ({ type: 'SET_STORY', stories });

export const startSetStory = () => {
  return dispatch =>
    db
      .collection(ROOT_DB)
      .get()
      .then(results => {
        const story = [];
        results.forEach(e => story.push({ ...e.data(), id: e.id }));
        return dispatch(setStory(story));
      });
};

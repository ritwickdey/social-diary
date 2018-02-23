import { db } from '../firebase/firestore';

const addStory = ({
  id = Date.now(),
  title = '',
  postedAt = Date.now(),
  body = '',
  uId = '',
  uName = ''
} = {}) => ({
  type: 'ADD_STORY',
  blog: { id, title, body, postedAt, uId, uName }
});

export const startAddStory = blog => {
  return (dispatch, getState) => {
    const { user: { uid, name } } = getState();
    blog.uId = uid;
    blog.uName = name;
    db
      .collection('/blogs')
      .add(blog)
      .then(result => {
        blog.id = result.id;
        return dispatch(addStory(blog));
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
    .collection(`/blogs`)
    .doc(id)
    .update({ title, body })
    .then(() => dispatch(editStory(id, { title, body })));

const deleteStory = id => ({ type: 'DELETE_STORY', id });

export const startDeleteStory = id => dispatch =>
  db
    .collection(`/blogs`)
    .doc(id)
    .delete()
    .then(() => dispatch(deleteStory(id)));

const setStory = blogs => ({ type: 'SET_STORY', blogs });

export const startSetStory = () => {
  return dispatch =>
    db
      .collection('/blogs')
      .get()
      .then(results => {
        const blogs = [];
        results.forEach(e => blogs.push({ ...e.data(), id: e.id }));
        return dispatch(setStory(blogs));
      });
};

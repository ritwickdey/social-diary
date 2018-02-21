import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBxw5DvJVRcq1TO6W_pEgGZ9K6D8eXxnsM',
  authDomain: 'ritwick-my-blog.firebaseapp.com',
  databaseURL: 'https://ritwick-my-blog.firebaseio.com',
  projectId: 'ritwick-my-blog',
  storageBucket: 'ritwick-my-blog.appspot.com',
  messagingSenderId: '517958639490'
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

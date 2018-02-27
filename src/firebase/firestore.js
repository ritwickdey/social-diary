import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBJ2GLCqKp1GsFVZOQtfqeJGWx42oU-vts',
  authDomain: 'ritwick-social-diary.firebaseapp.com',
  databaseURL: 'https://ritwick-social-diary.firebaseio.com',
  projectId: 'ritwick-social-diary',
  storageBucket: 'ritwick-social-diary.appspot.com',
  messagingSenderId: '759177371707'
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

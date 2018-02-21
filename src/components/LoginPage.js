import React from 'react';
import firebase, { googleProvider } from '../firebase/firestore';

export class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => firebase.auth().signInWithPopup(googleProvider)}>
          Login with Google
        </button>
      </div>
    );
  }
}

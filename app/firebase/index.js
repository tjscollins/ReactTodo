import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyD_Z8j_aesnRA0pcmJy5_SdaSbGkNgah0g",
    authDomain: "react-todo-app-bc187.firebaseapp.com",
    databaseURL: "https://react-todo-app-bc187.firebaseio.com",
    storageBucket: "react-todo-app-bc187.appspot.com",
    messagingSenderId: "1027131711679"
  };
  firebase.initializeApp(config);
} catch (e) {}

export var firebaseRef = firebase.database().ref();
export default firebase;

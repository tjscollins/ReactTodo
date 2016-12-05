import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_Z8j_aesnRA0pcmJy5_SdaSbGkNgah0g",
  authDomain: "react-todo-app-bc187.firebaseapp.com",
  databaseURL: "https://react-todo-app-bc187.firebaseio.com",
  storageBucket: "react-todo-app-bc187.appspot.com",
  messagingSenderId: "1027131711679"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Tyler',
    age: '29'
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key);
});

todosRef.push({text: 'Shave the whales!'});
todosRef.push({text: 'Bathe the dog'});

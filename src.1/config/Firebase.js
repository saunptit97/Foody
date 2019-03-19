import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDuiS7bYSd_HIIx8fi2WKdUibJpw5CI42M",
    authDomain: "food-c4614.firebaseapp.com",
    databaseURL: "https://food-c4614.firebaseio.com",
    projectId: "food-c4614",
    storageBucket: "food-c4614.appspot.com",
    messagingSenderId: "752684496596"
  };
  export const firebaseApp = firebase.initializeApp(config);

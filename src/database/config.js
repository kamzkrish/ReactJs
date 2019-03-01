import * as firebase from 'firebase'



  var config = {
    apiKey: "AIzaSyCzbh1onlpWwnqQXM1o0Ck3iRAv4bIJR0k",
    authDomain: "photowall-81639.firebaseapp.com",
    databaseURL: "https://photowall-81639.firebaseio.com",
    projectId: "photowall-81639",
    storageBucket: "photowall-81639.appspot.com",
    messagingSenderId: "1045833184264"
  };
  

firebase.initializeApp(config)


const database = firebase.database()

export {database}

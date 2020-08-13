importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDt6e5ZdzbBqx7otdLCbxRrby3OnZhPLSY",
    authDomain: "expense-tracker-17db7.firebaseapp.com",
    databaseURL: "https://expense-tracker-17db7.firebaseio.com",
    projectId: "expense-tracker-17db7",
    storageBucket: "expense-tracker-17db7.appspot.com",
    messagingSenderId: "574744200106",
    appId: "1:574744200106:web:ce4f0f992ce90a6b1121d3"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging();
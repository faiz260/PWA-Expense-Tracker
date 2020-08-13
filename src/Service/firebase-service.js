import firebase from "firebase";

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
const messaging = firebase.messaging();

export function configureNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("Token => ", currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}

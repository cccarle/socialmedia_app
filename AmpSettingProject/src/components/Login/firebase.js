import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDgQSNevIQuthf2xR4kYnm3CW5Dho_KZ64",
  authDomain: "ampsettingproject-9356f.firebaseapp.com",
  databaseURL: "https://ampsettingproject-9356f.firebaseio.com"
};

module.exports const firebaseRef = firebase.initializeApp(config);

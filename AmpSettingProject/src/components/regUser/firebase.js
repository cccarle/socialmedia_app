import * as Firebase from "firebase";

var config = {
  apiKey: "AIzaSyDgQSNevIQuthf2xR4kYnm3CW5Dho_KZ64",
  authDomain: "ampsettingproject-9356f.firebaseapp.com",
  databaseURL: "https://ampsettingproject-9356f.firebaseio.com"
};

export const firebaseRef = Firebase.initializeApp(config);

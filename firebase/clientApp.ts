import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKER,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  AppId: process.env.APP_ID,
};

if (!firebase.getApp.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;

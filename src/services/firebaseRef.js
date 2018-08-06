import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDw8NWPbPzs9KXrta7PNCaG9MGB8DMzBPE",
    authDomain: "mi-rutina-0001.firebaseapp.com",
    databaseURL: "https://mi-rutina-0001.firebaseio.com",
    projectId: "mi-rutina-0001",
    storageBucket: "mi-rutina-0001.appspot.com",
    messagingSenderId: "1090261123846"
};

const defaultApp = firebase.initializeApp(firebaseConfig);
const defaultDatabase = firebase.database();
export const Configuration = defaultDatabase.ref().child('Configuration');

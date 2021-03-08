import firebase from 'firebase/app';
import 'firebase/firestone';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBk9I_OxL1iJm2ENT00xmE0Qnu1apqz38E",
    authDomain: "todo-app-66b1a.firebaseapp.com",
    databaseURL: "https://todo-app-66b1a-default-rtdb.firebaseio.com",
    projectId: "todo-app-66b1a",
    storageBucket: "todo-app-66b1a.appspot.com",
    messagingSenderId: "1015836886122",
    appId: "1:1015836886122:web:89f54b96dfdd0244793613"
});

export { firebaseConfig as firebase };
// firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDyM0ZRtfwrNKBXwu0ew9qr0jMLhKuJHWU",
    authDomain: "point-of-care-462b2.firebaseapp.com",
    projectId: "point-of-care-462b2",
    storageBucket: "point-of-care-462b2.appspot.com",
    messagingSenderId: "1054959884915",
    appId: "1:1054959884915:web:13b7f2fe7681abd437e806"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

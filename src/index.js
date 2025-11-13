import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'

import store from './store/store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATz4SbLmIcGsX7nWZHolg5SMbonATGcAM",
    authDomain: "pryaniki-29e81.firebaseapp.com",
    projectId: "pryaniki-29e81",
    storageBucket: "pryaniki-29e81.appspot.com",
    messagingSenderId: "494761368883",
    appId: "1:494761368883:web:29c1f3b6a8be0c3ece7246",
    measurementId: "G-PWFL7GPFLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
);

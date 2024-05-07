// Import fungsi yang diperlukan dari SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDpx93BjSf9Cu03Z56wkN0cGYesrHBAb3o",
    authDomain: "database-bm2106.firebaseapp.com",
    databaseURL: "https://database-bm2106-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-bm2106",
    storageBucket: "database-bm2106.appspot.com",
    messagingSenderId: "347620717071",
    appId: "1:347620717071:web:e001f7cbe1b8259809697a",
    measurementId: "G-C4TW7TTGMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

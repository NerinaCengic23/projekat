// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1Kvk899fTLiOy6YDPLQMFz4umM4WUiFg",
    authDomain: "si-peti-113d7.firebaseapp.com",
    projectId: "si-peti-113d7",
    storageBucket: "si-peti-113d7.appspot.com",
    messagingSenderId: "941252575792",
    appId: "1:941252575792:web:78c11c8b7e57b1bd8063f5",
    measurementId: "G-FBMC24R3TY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
const auth= getAuth();
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");


window.login=function(e){
    e.preventDefault();
    var obj={
        email:email.value,
        pass: pass.value,
    }

    signInWithEmailAndPassword (auth, obj.email,obj.pass)
    .then(function(success){
        alert("Welcome on our website!");
        window.location.href="site.html";
    })
    .catch(function(err){
        window.location.replace("index.html");
        alert("error"+err)
    })
    console.log(obj);
};
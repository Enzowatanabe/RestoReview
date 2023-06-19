import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9M3OcZew0mIAg9wr_dfcijGjBC7cgS9Q",
    authDomain: "restoreview-46ff7.firebaseapp.com",
    projectId: "restoreview-46ff7",
    storageBucket: "restoreview-46ff7.appspot.com",
    messagingSenderId: "799597271043",
    appId: "1:799597271043:web:a9c958d2db46046815d636",
    measurementId: "G-JHZSJVXGXS"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
//   const db = getFirestore(app);

  document.getElementById('login').addEventListener('click', function(){
    const email = document.getElementById('userEmail').value
    const password = document.getElementById('userSenha').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            // Signed in
        const user = userCredential.user;
        window.location.href = "/HTML/paginausuario.html";
            // ...
})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Erro")
    });
})



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import * as firebase from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
      getAuth,
      onAuthStateChanged,
      signOut
  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB9M3OcZew0mIAg9wr_dfcijGjBC7cgS9Q",
    authDomain: "restoreview-46ff7.firebaseapp.com",
    projectId: "restoreview-46ff7",
    storageBucket: "restoreview-46ff7.appspot.com",
    messagingSenderId: "799597271043",
    appId: "1:799597271043:web:a9c958d2db46046815d636",
    measurementId: "G-JHZSJVXGXS"
  }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
  document.getElementById('sair').addEventListener('click', function(){
    
    signOut(auth).then(() => {
    alert("voce saiu")
    }).catch((error) => {
    alert("erro")
    console.log(error)
    });

  })



auth.onAuthStateChanged(function(user) {
    if (user) {
      // O usuário está autenticado, permita o acesso à página
      console.log(user)
    } else {
      // O usuário não está autenticado, redirecione-o para a página de login
      console.log("qualquercoisa")
      window.location.href = 'index.html';
    }
  });
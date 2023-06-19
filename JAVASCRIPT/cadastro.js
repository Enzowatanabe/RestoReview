
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
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

document.getElementById('cadastrar').addEventListener('click', function(){
    const email = document.getElementById('userEmail').value
    const password = document.getElementById('userSenha').value
      
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user
          alert('Usuario criado!')
          window.location.href = "/index.html";
      })
      .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use"){
            alert("Usuário ja cadastrado")
            window.location.href = "/index.html";
          }else{
            const errorMessage = error.errorMessage;
          alert('Error')
          }
          
      })

    })
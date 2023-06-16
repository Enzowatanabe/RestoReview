// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
          getAuth,
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          onAuthStateChanged,
          signOut
      } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore,
    collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9M3OcZew0mIAg9wr_dfcijGjBC7cgS9Q",
  authDomain: "restoreview-46ff7.firebaseapp.com",
  projectId: "restoreview-46ff7",
  storageBucket: "restoreview-46ff7.appspot.com",
  messagingSenderId: "799597271043",
  appId: "1:799597271043:web:a9c958d2db46046815d636",
  measurementId: "G-JHZSJVXGXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
    

    document.getElementById('cadastrar').addEventListener('click', function(){
    const email = document.getElementById('userEmail').value
    const password = document.getElementById('userSenha').value
      
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user
          alert('Usuario criado!')
      })
      .catch((error) => {
          const errorCode = error.code;
          console.log(1)
          if (errorCode === "auth/email-already-in-use"){
            console.log(2)
            alert("Usuário ja cadastrado")
          }else{
            const errorMessage = error.errorMessage;
          alert('Error')
          }
          
      })

    })

    

    document.getElementById('login').addEventListener('click', function(){
        const email = document.getElementById('userEmail').value
        const password = document.getElementById('userSenha').value
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                // Signed in
            const user = userCredential.user;
            window.location.href = "paginausuario.html";
                // ...
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Erro")
        });
    })

    const usuariosRef = collection(db, "usuarios");

    await setDoc(doc(usuariosRef, "usuario1"), {
        name: "enzo", state: "sp", country: "Br",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });




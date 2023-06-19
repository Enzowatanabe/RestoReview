
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
          getAuth,
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          onAuthStateChanged,
          signOut
      } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

    

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
          
          if (errorCode === "auth/email-already-in-use"){
            
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
    console.log(usuariosRef)

    await setDoc(doc(usuariosRef, "usuario1"), {
        name: "enzo", state: "sp", country: "Br",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });


  //   var fileInput = document.getElementById('imagem');
  //   var storageRef = storage.ref().child();
  //   var uploadTask = storageRef.put(file);
  //   var botaoenviar = document.getElementById('enviarimagem')
  //   botaoenviar.addEventListener('click', function(){
  //   uploadTask.on('state_changed', function(snapshot) {
  //     // Monitorar o progresso do upload aqui, se necessário
  //   }, function(error) {
  //     // Lidar com erros durante o upload aqui
  //   }, function() {
  //     // O upload foi concluído com sucesso
  //     console.log('Imagem enviada com sucesso.');
  //   })
  // });

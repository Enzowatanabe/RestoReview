
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import {
//           getAuth,
//           createUserWithEmailAndPassword,
//           signInWithEmailAndPassword,
//           onAuthStateChanged,
//           signOut
//       } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
    // import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
    import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

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
const storage = getStorage(app);


const subir = document.getElementById("inputimagem");

subir.addEventListener('change',(e)=>{
  console.log(e)
    let file = e.target.files[0];
    const imgname = document.getElementById('nomeimagem').value
    const storageRef = ref(storage, `imagens/${imgname}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');})




  });



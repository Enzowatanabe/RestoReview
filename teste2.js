import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import { getFirestore, collection, doc, addDoc, setDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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
const db = getFirestore(app);



const botaogo = document.getElementById('botaoenviar');

botaogo.addEventListener("click", async()=>{
    const nomeusu = document.getElementById('nome').value;
    const sobrenomeusu = document.getElementById('sobrenomeusu').value;
    const idadeusu = document.getElementById('idadeusu').value;
    const nomeRestaurante = document.getElementById('nomecolecao').value;
    console.log(nomeusu)
    console.log(sobrenomeusu)
    console.log(idadeusu)
  const docRef = await setDoc(doc(db, nomeRestaurante, "enzos"), {
    first: nomeusu,
    last: sobrenomeusu,
    born: idadeusu
  },{merge:true});
  console.log("Document written with ID: ", docRef);
})

const docRef = doc(db, "outback", "enzos");
const docSnap = await getDoc(docRef);


if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");}
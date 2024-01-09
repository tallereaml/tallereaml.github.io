import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from './inicioFirebase.js';

let csesion = document.getElementById('csesion');

csesion.addEventListener('click', async () => {
  console.log("boton presionado");
  
  await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
  });
  console.log(auth.currentUser);
})



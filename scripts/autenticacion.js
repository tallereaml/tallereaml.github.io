
import { auth } from "./inicioFirebase.js";

const favatar = document.getElementById('avatar');


auth.onAuthStateChanged(
 
  usuarioAuth => {
 
    if (usuarioAuth && usuarioAuth.email) {

      
      favatar.src = usuarioAuth.photoURL;
      
      
    } else {
      
      if (document.title!=='TALLER EAML') {
       
        location.href='../index.html';
      }
    }
  }
);



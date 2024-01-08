let usuario;
let avatar;
import {auth} from "./inicioFirebase.js";

const favatar=document.getElementById('avatar');


auth.onAuthStateChanged(
    /** Recibe las características del usuario o null si no ha iniciado
     * sesión. */
     usuarioAuth => {

        
      if (usuarioAuth && usuarioAuth.email) {
        // Usuario aceptado.
        usuario = usuarioAuth.email;
        // Foto del Avatar
        avatar = usuarioAuth.photoURL;

        favatar.src=avatar;
        // Muestra los mensajes del chat.
        window.open('pantallas/menu.html');
        
        
      } else {
        // No ha iniciado sesión. Pide datos para iniciar sesión.
        if (window.miPaginaEstaEnEjecucion==false) {
            // La página está en ejecución
             window.open('index.html');
          }
        
        
      }
    }
    
  );



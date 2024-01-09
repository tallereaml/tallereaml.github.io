import { setReporte } from "./firestore.js";
import { auth } from "./inicioFirebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí, incluyendo document.getElementById
 

let generareporte = document.getElementById('generareporte');
let vplaca=document.getElementById('vplaca');

 vplaca.addEventListener('click', async function(event){

    const querySnapshot = await getDocs(collection(db, "citas"));
querySnapshot.forEach((doc) => {
    
  console.log(`${doc.id} => ${doc.data()}`);
});
    event.preventDefault();
    

});


generareporte.addEventListener('submit', function (event) {
    event.preventDefault();

    const mecanico = document.getElementById('mecanico').value,
        nombre = document.getElementById('nombre').value,
        fecha = document.getElementById('fecha').value,
        hora = document.getElementById('hora').value,
        placa = document.getElementById('placa').value,
        vehiculo = document.getElementById('vehiculo').value,
        reparacion = document.getElementById('reparacion').value,
        autenticacionbase=auth.currentUser.uid;

    setReporte(mecanico, nombre, fecha, hora, placa, vehiculo, reparacion,autenticacionbase);
});



});

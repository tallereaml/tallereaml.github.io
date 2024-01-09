import { setCita } from "./firestore.js";
import { auth } from "./inicioFirebase.js";


window.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí, incluyendo document.getElementById
 
let creacita = document.getElementById('creacita');

creacita.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value,
        numerotel = document.getElementById('numerotel').value,
        fecha = document.getElementById('fecha').value,
        hora = document.getElementById('hora').value,
        placa = document.getElementById('placa').value,
        vehiculo = document.getElementById('vehiculo').value,
        falla = document.getElementById('falla').value,
        autenticacionbase=auth.currentUser.uid;

    setCita(nombre, numerotel, fecha, hora, placa, vehiculo, falla,autenticacionbase);
});

});
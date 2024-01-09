import { collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 
import { db } from "./inicioFirebase.js";


export async function setReporte(mecanico, nombre, fecha,  placa, vehiculo, reparacion,autenticacionbase){
    try {
        const docRef = await addDoc(collection(db, "citas"), {
          mecanico,
          nombre,
          fecha,
         
          placa,
          vehiculo,
          reparacion,
          autenticacionbase
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function setCita(nombre,numerotel,fecha,hora,placa,vehiculo,falla,autenticacionbase){
    try {
        const docRef = await addDoc(collection(db, "citas"), {
          nombre,
          numerotel,
          fecha,
          hora,
          placa,
          vehiculo,
          falla,
          autenticacionbase
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

/*export async function getCita(){
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}*/

/*export async function getReporte(){
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}*/

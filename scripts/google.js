import {auth} from "./inicioFirebase.js";
import {  signInWithPopup, GoogleAuthProvider, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


let botonGoogle=document.querySelector("#botonGoogle");
let GoogleCredential;
let GoogleToken;



botonGoogle.addEventListener('click',async()=> {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({ prompt: "select_account" });
    
    try {
        
        await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    GoogleCredential=credential;
    GoogleToken=token
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    location.href="./pantallas/menu.html";
})
    

        
    } catch (error) {
        console.log(error);
    }
})

export{GoogleCredential,GoogleToken};












import { auth } from "./inicioFirebase.js";
import { signInWithPopup, GithubAuthProvider, linkWithCredential } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let botonGitHub = document.querySelector("#botonGitHub");
let GithubCredential;
let Githubtoken;

botonGitHub.addEventListener('click', async () => {
    const provider = new GithubAuthProvider();

    try {
        // Realizar la autenticación con GitHub usando signInWithPopup
        const result = await signInWithPopup(auth, provider);

        // Obtener credenciales y token después de la autenticación exitosa
        GithubCredential = GithubAuthProvider.credentialFromResult(result);
        Githubtoken = GithubCredential.accessToken;


        // The signed-in user info.
        const user = result.user;

        // Redirigir a la página de menú después de la autenticación
        location.href = "./pantallas/menu.html";

    } catch (error) {
        const credential = GithubAuthProvider.credentialFromError(error);

    // Utilizar las credenciales, por ejemplo, vincular cuentas
    if (auth.currentUser && credential) {
        location.href = "./pantallas/menu.html";
        console.log(credential);
        console.log(auth.currentUser);
    }

    console.error("Error de autenticación con GitHub:", error);
        
    }
});







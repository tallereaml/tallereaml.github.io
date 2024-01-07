import {GoogleAuthPrvider,signInWithRedirect} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-GoogleAuthProvider.js";

//import {GoogleAuthProvider, signInWithRedirect} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);

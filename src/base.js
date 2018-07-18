import Rebase from "re-base";
import firebase from "firebase";
import config from "./keys";
// database

const fireBaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(fireBaseApp.database());
console.log(base);

// authentication

const auth = fireBaseApp.auth();

// exports

export { fireBaseApp, auth };
export default base;

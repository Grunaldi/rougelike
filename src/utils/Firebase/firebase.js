import app from "firebase/app";
import "firebase/auth";

const config= {
    apiKey: "AIzaSyDjSHLIQZmGKJB67_AtD9W_icoJO0ZGSdk",
    authDomain: "rouge-35163.firebaseapp.com",
    projectId: "rouge-35163",
    storageBucket: "rouge-35163.appspot.com",
    messagingSenderId: "86480283144",
    appId: "1:86480283144:web:563fe12a6eea8ce77d53bd"
};


    class Firebase{
    constructor() {
        app.initializeApp(config)
        this.auth=app.auth();
    }
    //App Auth

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}

export default Firebase
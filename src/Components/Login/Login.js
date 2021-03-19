import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    return (
        <div>
        
            <h1> this is login</h1>
        </div>
    );
};

export default Login;




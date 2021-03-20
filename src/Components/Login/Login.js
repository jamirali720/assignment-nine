import React, { useContext, useState } from 'react';
import { useHistory, useLocation} from "react-router-dom";
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { userContext } from '../../App';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
    const Login = () => {
        let history = useHistory();
        let location = useLocation();
        let { from } = location.state || { from: { pathname: "/" } };
        
        const [newUser, setNewUser] = useState({name:'', email: '', password: ''}); 
        const [loggedInUser, setLoggedInUser] = useContext(userContext)
         

        const handleGoogleSignIn = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
        .signInWithPopup(provider)
        .then((res) => {   
            const { displayName, email} = res.user ; 
            const signedInUser = {name: displayName, email};       
            history.replace(from)
            setLoggedInUser(signedInUser)
           
        
        
        }).catch((error) => {            
            var errorMessage = error.message;  
            var email = error.email;    
        });
  }


    const handleChange = (e) => {
      let isFormValid;
        if(e.target.name === 'name'){
            isFormValid = e.target.value;        
            console.log(isFormValid);

        }if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value) ;
            console.log(isFormValid);
         
        }if (e.target.name === 'password') {
            isFormValid = e.target.value > 6;       
        }
        if (isFormValid) {
            const newUserInfo = {...newUser};
            newUserInfo[e.target.name] = e.target.value;
            setNewUser(newUserInfo)
            setLoggedInUser(newUserInfo)
          
        }
    }

   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser);
        if(newUser.email && newUser.password){
             firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
             .then(res  => {
                console.log(res); 
                newUser(res) 
                setLoggedInUser(res)         
             })
       }
    }
    return (
        <div className="login-part">        
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit}>

                    <input onChange={handleChange} type="text" name="name" placeholder="Your Name" required/><br/>
                    <input onChange={handleChange} type="email" name="email" placeholder="Your Email" required/> <br/>
                    <input onChange={handleChange} type="password" name="password" placeholder="Your Password" required/>
                    {/* <input onChange={handleChange} type="password" name="confirmedPassword" placeholder="Your Password" required/> */}
                    <input className="submit" type="submit" value="submit"/>
                </form>
                    <p>Already have an account? <a href="/login">Login</a></p>
                    <hr/>
                    <p className="or">OR</p>
               <button className="btn" onClick={handleGoogleSignIn}>Sign In using Google</button>
           
        </div>
    );
  
}
export default Login;



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
        const [newUser, setNewUser] = useState({})
        let history = useHistory();
        let location = useLocation();     
        let { from } = location.state || { from: { pathname: "/" } };

        const [loggedInUser, setLoggedInUser] = useContext(userContext);
        
        const handleBlur = (e) => {
            let isFieldValid = true;
            if (e.target.name === 'name') {
                isFieldValid = e.target.value;
            }if (e.target.name === 'email') {
                isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
              
            }if (e.target.name === 'password'){
                isFieldValid = e.target.value >= 6;
            }
            if (isFieldValid) {
                const newUserInfo  = {...newUser}
                newUserInfo[e.target.name] = e.target.value;
                setNewUser(newUserInfo)
               
            }
        }
        
        const handleSubmit = (e) => {
           if ( newUser && newUser.email && newUser.password) {
            firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(res => {              
                const { displayName, email} = res.user ; 
                const signedInUser ={
                    isSignedIn : true,
                    name : displayName,
                    email: email,                
                } 
               
                setNewUser(signedInUser)    
                setLoggedInUser(signedInUser)
                updateUserName(newUser.name)
                history.replace(from);
            })
            .catch((error) => {
              
              var errorMessage = error.message;
              console.log(errorMessage);
            });
           }
            e.preventDefault();

            if( !newUser && newUser.email && newUser.password) {
                firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
            .then(res => {              
                const { displayName, email} = res.user ; 
                const signedInUser ={
                    isSignedIn : true,
                    name : displayName,
                    email: email,                
                } 
                history.replace(from);
                setNewUser(signedInUser)    
                setLoggedInUser(signedInUser)
                updateUserName(newUser.name)
            })
            .catch((error) => {
               
                var errorMessage = error.message;
                console.log(errorMessage);
            });
            }

        }




                 
          
        


        const updateUserName = (name) => {

            var user = firebase.auth().currentUser;
            user.updateProfile({
            displayName: name,
         
            }).then(function() {
                console.log('success');
            }).catch(function(error) {
          
            });
               
        }

         const handleGoogleSignIn = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((res) => {  
                 
            const { displayName, email} = res.user ; 
            const signedInUser ={
                isSignedIn : true,
                name : displayName,
                email: email,                
            } 
            history.replace(from);    
            setLoggedInUser(signedInUser)        
       
        
            }).catch((error) => {            
            console.log(error.user);  
            });
        }


//   const handleSignOut = () => {
//     firebase.auth().signOut()
//     .then(() =>{
//         const signOutUser = {
//             isSignedIn : false,
//             name : '',
//             email : ''
            
//            }
//            setLoggedInUser(signOutUser)
//     })
// }
  

  const handleFacebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((res) => {     
        const { displayName, email} = res.user ; 
        const signedInUser ={
            isSignedIn : true,
            name : displayName,
            email: email,                
        } 
        history.replace(from);    
        setLoggedInUser(signedInUser)   
       
    })
    .catch((error) => {   
      var errorCode = error.code;
            console.log(errorCode);
    });
  }

   

     
    
    return (
       
        <div className="login-part">        
                      
                <form onSubmit={handleSubmit}>  
                   <div>        
                        <input type="checkbox" onChange= {() => setNewUser(! newUser)} name="checkbox"/>
                        <label htmlFor="checkbox"> New user</label> <br/>
                    {
                      ! newUser ? 
                       <input onBlur={handleBlur} type="text" name="name" placeholder="Your Name" required /> : null  
                    }
                     <br/>                 
                    <input onBlur={handleBlur} type="email" name="email" placeholder="Your Email" required/> <br/>
                    <input onBlur={handleBlur} type="password" name="password" placeholder="Your Password" required/>
                    </div>
                    <br/>
                    {/* <input onChange={handleChange} type="password" name="confirmedPassword" placeholder="Your Password" required/> */}
                    <div>

                        {  newUser  ? <button type="submit"  className="submit">Login</button>  :                         
                            <button type="submit"  className="submit">Create an account</button>
                        }
                       
                    </div>
                   
                </form>
                     
                         
                    { loggedInUser.isSignedIn && <p>Already have an account? <a href="/login">Login</a></p>}
                    <hr/>
                    <p className="or">OR</p>               
                                           
                    <button className="btn" onClick={handleGoogleSignIn}>Sign In using Google</button>
                       <br/>      
                            
                    <button className="btn1" onClick={handleFacebookSignIn}>Sign In using Facebook</button>                
        </div>
       
    );
  }   
export default Login;



import './App.css';
import {
  BrowserRouter as Router,
  Switch,  
  Route  
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




  export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
      isSignedIn: false,
      name : '',
      email: '', 
      password: '',
      success: '',
      error: ''
  });

  return (
    <div className="App">     
        <userContext.Provider value ={[loggedInUser, setLoggedInUser]}>      
      <Router>
      <Header></Header>
        <Switch>          
           
            <Route path="/home">
                <Home />
            </Route>
            <PrivateRoute path="/destination">
                <Destination/>
            </PrivateRoute>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
      </Router>
    
    </userContext.Provider>
    </div>
  );
}

export default App;

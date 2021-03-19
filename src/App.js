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

  export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
        <userContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
              <Home />
          </Route>
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

import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import Chat from './pages/Chat';
import { auth } from './firebase.init.js';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Chat/> : <SignIn/>}
    </div>
  );
}



export default App;

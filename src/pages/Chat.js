import React, { useState, useRef, useEffect} from 'react';
import './Chat.css'

import { db, auth } from '../firebase.init'
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase'
import ChatMessage from '../components/ChatMessage';

const Chat = () => {

  const [allMessages,setAllMessages] = useState([])
  const userName = auth.currentUser.displayName
  const dummy = useRef(null);
  
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(snapshot => {
      setAllMessages(snapshot.docs.map(doc => doc.data()))
  })
  dummy.current.scrollIntoView({ behavior: 'smooth' });
  //eslint-disable-next-line
  }, []);
  
  
  const [message, setMessage] = useState('')

  const sendMessage = async (e) => {

    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

      await db.collection("messages").add({
      text: message.trim(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
      uniqueId: uuidv4()
    })
  
    setMessage(' ')
    dummy.current.scrollIntoView({ behavior: 'smooth'});
  }

  

  const signOutClick = () => {
    auth.signOut()
  }

  return (
    <>

      <div className='chat'>

        <nav className='head__nav'>
          <h2 className='logo__chat'>🗨️ Open Chat©️</h2>
          <p className='user__name'>Welcome <span style={{ color: '#05a040' }}> @{userName} </span> </p>
          <button onClick={signOutClick} className='button__signout'>Sign Out</button>
        </nav>

        <section className='chat__box'>

          {allMessages && allMessages.map((msg) => <ChatMessage key={msg.uniqueId} message={msg} />)}

          <div ref={dummy}></div>

        </section>

        <div className='message__area'>
          <form onSubmit={sendMessage}>
            <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="say something nice" required />
            <button className='button__send' type="submit" disabled={!message}>👻</button>
          </form>
        </div>

      </div>

    </>

  )
};





export default Chat;

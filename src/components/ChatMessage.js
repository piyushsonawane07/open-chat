import React from "react";
import { auth } from "../firebase.init";
import './ChatMessage.css'
import DefaultImage from '../defaultimg.png'

const ChatMessage = (props) => {

    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (
        <>
            <div className={`message ${messageClass}`}>
                <img src={photoURL || DefaultImage} alt='' />
                <p>{text}</p>
            </div>
        </>
    );
  };

  export default ChatMessage;
  
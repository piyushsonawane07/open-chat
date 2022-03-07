import React from 'react';
import './SignIn.css'

import firebase from 'firebase'
import { auth } from '../firebase.init.js'


const SignIn = () => {

   
    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <>
            <div className='signin'>

                <nav className='head__nav'>
                    <h2 className='logo'>🗨️ Open Chat©️</h2>
                    <button onClick={signIn} className='button'>Sign In</button>
                </nav>

                <section className='wrap__box'>

                    <div className='chat__content'>
                        <p className='welcome__txt anim__text'> Welcome to Open Chat 🗨️!</p>
                        <button onClick={signIn} type="button" className="login-with-google-btn" >
                            Sign in with Google
                        </button>
                        <p className='terms'>Do not violate the community guidelines or you will be banned for life xD !</p>
                    </div>

                </section>


            </div>
        </>
    );
};

export default SignIn;

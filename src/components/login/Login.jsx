import React, { useState } from 'react'
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const goToHome = useNavigate();

    const handelGoogleSingIn = () => {
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })

      .catch(error => {
        console.log('Google signin ERROR: ', error);
        setUser(null)
      })
    }

    const handelGithubSingIn = () => {
      signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch(error => {
        setUser(null);
        console.log('Github signin ERROR: ', error)
      });
    }

    const handelSingOut = () => {
      signOut(auth)
      .then(() => {
        console.log('Sign out done!');
        setUser(null);
        goToHome('/')
      })
      .catch(error => {
        console.log('SignOut ERROR: ', error)
      })
    }

  return (
    <div style={{marginTop: '20px'}}>

      {user ? 
      <button onClick={handelSingOut} style={{border: 'none', padding:'8px', cursor:'pointer', borderRadius:'8px', background:'#444444', color:'#ffffff', fontWeight:'bold', fontSize:'20px'}}>Sign Out</button>
      : 
    <>
      <button onClick={handelGoogleSingIn} style={{border: 'none', padding:'8px', cursor:'pointer', borderRadius:'8px', background:'#444444', color:'#ffffff', fontWeight:'bold', fontSize:'20px', marginRight:'10px'}}>Login with Google</button>
      <button onClick={handelGithubSingIn} style={{border: 'none', padding:'8px', cursor:'pointer', borderRadius:'8px', background:'#444444', color:'#ffffff', fontWeight:'bold', fontSize:'20px', marginRight:'10px'}}>Login with Github</button>
    </>
        
    }
      
        {
        user && 
        <div>
          <h3>Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt={user.displayName} />

        </div>
        }
    </div>
  )
}

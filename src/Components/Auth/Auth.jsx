import {signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db, googleProvider } from '../../Firebase/firebase_config';
import Navbar from '../Navbar/Navbar';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSignIn = async() =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
           // alert("User Signed In");
           // console.log(auth?.currentUser?.uid);
            navigate("/allExpenses");
        }catch(err){
            alert(err.message);
        }
    }

    const handleSignInGoogle = async() =>{
        try{
            const {user} = await signInWithPopup(auth, googleProvider);
            const userData = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            };
            await setDoc(doc(db,"users", user.uid), userData);
           // alert("User Signed In");
            navigate("/allExpenses");
        }catch(err){
            alert(err);
        }
    }

   

  return (
    <>
    <Navbar />
    <div className='flex  py-28 items-center justify-center'
        style={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp12426117.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight:'100vh',
        }}>
        <div className='flex flex-col justify-center items-center'> 
            <h2 className="text-xl text-white font-bold mb-4">Sign In</h2>
            <input
                className="py-3 px-4 w-9/12 md:w-80 border-2 border-gray-200 rounded-lg text-md mb-3"
                type='text'
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                className="py-3 px-4 w-9/12 md:w-80 border-2 border-gray-200 rounded-lg text-md mb-5" 
                type='password'
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='flex flex-col items-center'> 
                <button 
                    className="bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-56 mb-3 h-12"
                    onClick={handleSignIn}>Sign In</button>
                <button 
                    className="flex items-center justify-center bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-56 mb-3"
                    onClick={handleSignInGoogle}>
                    <span>Sign In with</span>
                    <img className='w-8 h-8 ml-2' src='https://static.vecteezy.com/system/resources/previews/013/760/951/original/colourful-google-logo-in-dark-background-free-vector.jpg' alt='Google Logo'/>
                </button>
                <p className='text-white'>Don't have a account? <Link to='/register'>Register Now</Link></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Auth;
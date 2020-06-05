import React, { useState } from 'react';

import './signin.styles.scss';
import FormInput from './../form-input/form-input.js'
import ButtonComp from './../button/button.js';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

function Signin(){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [state, setState] = useState({ email: "", password: "" });    

    const  handleSubmit= async event => {
        event.peventDefault();

        try{
            await auth.createUserWithEmailAndPassword(email, password);

            setEmail('');
            setPassword('');

        } catch (error){
            console.log(error);
        }
    }

    function handleChange(event){
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));

    }


    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name='email' type='email' label='email' value={state.email} handleChange={handleChange} required/>
            <FormInput name='password' type='password' label='password' value={state.password} handleChange={handleChange} required/>
            <div className='button'>
                <ButtonComp type='submit'>Sign in</ButtonComp>
                <ButtonComp onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</ButtonComp>
            </div>
        </form>
        </div>
        )}
export default Signin

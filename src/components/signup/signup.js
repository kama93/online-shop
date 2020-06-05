import React, { useState } from 'react';

import FormInput from './../form-input/form-input.js'
import ButtonComp from './../button/button.js';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';

import './signup.styles.scss'

function Signup(){
    const [displayName, setDiplayName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confrimPassword, setConfrimPassword]= useState('');
    const [state, setState] = useState({ email: "", password: "" , confrimPassword:"", displayName:""}); 

    const  handleSubmit= async event => {
        event.peventDefault();
        if (password!== confrimPassword){
            alert("password don't match");
            return
        }

        try{
            const {user}= await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName})

            setDiplayName('');
            setEmail('');
            setPassword('');
            setConfrimPassword('');

        } catch (error){
            console.log(error)
        }
    }

    function handleChange(event){
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));

    }


    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with yout email and password></span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required/>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required/>
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label= 'Password'
                    required/>
                <FormInput
                    type='password'
                    name='confrimPassword'
                    value={confrimPassword}
                    onChange={handleChange}
                    label= 'Confrim Password'
                    required/>
                <ButtonComp type='submit'>SIGN UP</ButtonComp>
            </form>
        </div>
)}

export default Signup;
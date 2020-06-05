import React from 'react';

import './sign-in-sign-up.styles.scss';
import Signin from '../../components/signin/signin.js';
import Signup from '../../components/signup/signup.js'

const SignInUp=()=>(
    <div className='sign-in-sign-up'>
    <Signin/>
    <Signup/>
    </div>
)


export default SignInUp


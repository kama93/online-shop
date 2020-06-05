import React from 'react';
import Directory from'../../components/directory/directory.js'
import {HomePageContainer} from './homepage.styles'


const Homepage =({history})=>(
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
)

export default Homepage

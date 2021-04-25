import React from 'react';
import WhatWeDo from './whatwedo.js';
import Aboutus from './aboutus.js';
import AboutusRes from './aboutusres.js';
import Homevid from './homevid.js';
import Footer from './footer.js';

import styled from 'styled-components'

const ResDiv = styled.div`
    
    @media screen and (max-width:768px){
        display:none;
    }
`
const ResDiv2 = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display: block;
    }
`

const Home = () => {

    
   

    return (<div>
        <Homevid />
        <ResDiv>
            <Aboutus />
        </ResDiv>
        <ResDiv2>
            <AboutusRes />
        </ResDiv2>
        
        <WhatWeDo />
        <Footer />
        </div>)
}

export default Home;
import React from 'react'
import { Button } from 'react-scroll';
import styled from 'styled-components';
// import video from '../video/data.mp4';
import databg from '../video/data.jpg'
import glassbg from '../video/glass.jpg'
import Collapse from '@material-ui/core/Collapse';
import {useState, useEffect } from 'react'
import ButtonMain from './styledcomp/button'

const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 660px;
    position: relative;
    z-index: 1;


`

const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height: 100%;
    overflow: hidden;
`

const Videobg = styled.video`
    width:100%;
    hieght:100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;
`
const Imagebg = styled.img`
    
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;

    
`


const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    
`
    

const HomeH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`


const HomeP = styled.p`
    margin-top: 5px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

const HomeBtnWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Homevid = () => {
    const [checked,setChecked]=useState(false)
    useEffect(() => {
        setChecked(!checked)
    }, [])

    return (
        <div id="header">
            <HomeContainer>
                <HomeBg>
                    <Imagebg src={databg}></Imagebg>
                </HomeBg>

                <HomeContent>
                <Collapse in={checked} {...(checked?{timeout:800}:{})}>
                    <HomeH1>DevDynamic</HomeH1>
                    <HomeP>A new perspective to your business....</HomeP>
                    <HomeBtnWrapper>
                        <ButtonMain to="contact" smooth={true} speed={500} spy={true} exact='true' offset={-80}>Contact Us</ButtonMain>
                    </HomeBtnWrapper>
                </Collapse>    
                </HomeContent>
            </HomeContainer>
        </div>
    )
}

export default Homevid

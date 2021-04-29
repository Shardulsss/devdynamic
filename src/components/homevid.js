import React from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components';
// import video from '../video/data.mp4';
import databg from '../video/data.jpg'
import Collapse from '@material-ui/core/Collapse';
import {useState, useEffect } from 'react'
import ButtonMain from './styledcomp/button'
import {Grid, Container, makeStyles} from '@material-ui/core'

import {SiDjango} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {SiAndroidstudio} from 'react-icons/si';
import {SiFlutter} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';


const useStyles = makeStyles((theme)=>({
    iconsclass:{
        '&:hover':{
            color: "#b84d6d",
            transform: "scale3d(1.3, 1.3, 1)",
            animation: "ease-in-out",
            transition: 0.5
        }
    }
}))

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
    width: 100%;
    height:100%

    
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

    const classes=useStyles()

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


                    <Container align="center" style={{justifyContent:"center", marginTop:45}}>
                        <Grid container spacing={5} justify="center" style={{padding:35}}>
                            <Grid item>
                            <Link to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>
                                <SiDjango size={42} color="white" className={classes.iconsclass}></SiDjango>
                            </Link>    
                            </Grid>
                            <Grid item>
                                <Link to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>
                                <FaNodeJs size={42} color="white" className={classes.iconsclass}></FaNodeJs>
                                </Link>    
                            </Grid>
                            <Grid item>
                            <Link to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>
                                <FaReact size={42} color="white" className={classes.iconsclass}></FaReact>
                                </Link>    
                            </Grid>
                            <Grid item>
                            <Link to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>
                                <SiAndroidstudio size={42} color="white" className={classes.iconsclass}></SiAndroidstudio>
                                </Link>    
                            </Grid>
                            <Grid item>
                            <Link to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>
                                <SiFlutter size={42} color="white" className={classes.iconsclass}></SiFlutter>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="whatwedo" smooth={true} speed={500} spy={true} exact='true' offset={-80}>
                                <SiAdobephotoshop size={42} color="white" className={classes.iconsclass}></SiAdobephotoshop>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container> 
                </HomeContent>
                
            </HomeContainer>
        </div>
    )
}

export default Homevid

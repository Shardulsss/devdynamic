import React from 'react'
import {Typography, Grid, makeStyles, Container, Fade,Slide} from '@material-ui/core';

import {FaGithub,FaInstagram,FaPhoneAlt,FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import biglogo from '../video/logo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import useWindowPosition from './useWindowPosition';

const Logo = styled.img`
    height:300px;
    width:300px;
`

const useStyles = makeStyles((theme)=>({
    outerdiv:{
        padding:35,
        height: 600
    },
    container:{
        paddingTop:10,

    },
    container2:{
        paddingBottom:20
        
    },
    container3:{
        paddingTop:10,
        paddingBottom:0
        
    },
    logo:{
        
    },
    brand:{
        paddingTop:0
    },
    
    
}))


const Footer = () => {
    const checked = useWindowPosition({id:'header',val:2.1})
    const classes= useStyles()
    return (
        <div name="contact" className={classes.outerdiv} >
            
            <div>
                <Typography variant="h4" gutterBottom align="center">
                    Contact Us
                </Typography>
                <Typography variant="h6" gutterBottom align="center">
                    We would like to hear from you....
                </Typography>
            </div>
            <Container maxWidth="sm" className={classes.container}>
                <Grid container justify="center">
                    <Grid container spacing={5} xs={12} justify='center' className={classes.container2}>
                        
                        <Grid item>
                            <MdEmail size={30}/>   
                        </Grid>
                        <Grid item><h5>crimsonez.web@gmail.com</h5></Grid>
                        
                    </Grid>
                    
                    
                    <Grid container spacing={5} xs={12} justify="center" className={classes.container3}>
                        <Grid item><Link to="/github" target="_blank"><FaGithub color="#364547" size={35}/></Link></Grid>
                        <Grid item><Link to="/linkedin" target="_blank"><FaLinkedin size={35} /></Link> </Grid>
                        <Grid item><Link to="/insta" target="_blank"><FaInstagram color="#ca8a8b" size={35} /></Link> </Grid>
                    </Grid>
                    
                    <Grid container spacing={5} xs={12} justify="center" className={classes.logo} >
                        <Grid item>
                        <Fade in={checked} {...(checked?{timeout:1200}:{})}>
                        <Logo src={biglogo}></Logo>
                        </Fade>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} xs={12} justify="center" className={classes.brand}>
                        <Grid item  ><Typography variant="h4">DevDynamic</Typography></Grid>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    )
}

export default Footer

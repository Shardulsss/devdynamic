import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Grid, Card, CardMedia, CardContent, Container, Typography, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import NavbarMain2 from '../pages/navbarmain2';

import sanityClient from '../sanityclient.js'

const useStyles = makeStyles((theme)=>({
    outerdiv:{
        paddingTop:'100px',
        padding:'40px',
        justifyContent:'center',
        alignContent: 'center',
        background: '#95a5a6',
    },
    blogContainer:{
        justifyContent:'center',
    
    },
    grid:{
        padding:'35px'
    },
    card:{
        width:245,
        borderRadius:25,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    link:{
        cursor: "pointer",
        textDecoration: "none",
        "&:hover, &:focus": {
            color: "#b84d6d",
            
    
        }
    },
    button:{
        "&:hover, &:focus": {
            color: "#fff",
            fontSize:14
        }
    },
    header:{
        display:"flex",
        justifyContent:"space-between"
    }

}))




const Projects = () => {
    const classes = useStyles()
    
    const [post,setPost] = useState(null)

    const search = ()=>{
        alert(post.length)
        const option=document.getElementById('textinput').value
        
        sanityClient.fetch(`*[_type=="project" && title match "${option}*"]{
            title,
            description,
            link,
            mainImage{
                asset->{_id,url},
                alt
            }
        }`).then((data)=>setPost(data)).catch(console.error);
    }

    useEffect(()=>{
        sanityClient.fetch(`*[_type=="project"]{
            title,
            description,
            link,
            mainImage{
                asset->{_id,url},
                alt
            }
        }`).then((data)=>setPost(data)).catch(console.error);
        
        
    },[]);

    return (<div>
        <NavbarMain2 />
        <div className={classes.outerdiv}>
            <Container className={classes.header} align="center">
            <Grid container >
                <Grid item xs={12} sm={4}>
                <Typography variant="h4" align="center">
                    The DevDynamic Projects
                </Typography>
                </Grid>
                <Grid item  xs={12} sm={8}>
                <div>
                <TextField id="textinput" label="Search Projects" variant="outlined" size="small" style={{margin:10, height:20}} align="right" />
                <Button variant="contained" color="primary" className={classes.button} onClick={search} style={{margin:7}}>search</Button>
                </div>
                </Grid>
            </Grid>
            </Container>
            <Container align="center" className={classes.blogContainer}>
                <Grid container spacing={3} justify="center" className={classes.grid}>
                { post && post.map((p,index)=>
                    <Grid item>
                        <Card className={classes.card}>
                            
                                <CardMedia component="img"
                                alt={p.title}
                                height="140" 
                                image={p.mainImage.asset.url}
                                title={p.title}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="left">
                                        {p.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" align="left" component="p">
                                        {p.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" className={classes.button} style={{margin:10}} href={p.link} target="_blank">View</Button>
                                    
                                </CardActions>
                        </Card>
                    </Grid>
                    )}
                </Grid>
            </Container>
        </div>
        </div>
    )
}

export default Projects;
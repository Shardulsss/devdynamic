import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Card, CardMedia, CardContent, Container, Typography, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

import sanityClient from '../sanityclient.js';
import NavbarMain2 from '../pages/navbarmain2';
import art from '../video/art.svg';

const useStyles = makeStyles((theme)=>({
    root:{
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
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
            transform: "scale3d(1.05, 1.05, 1)",
            animation: "ease-in-out",
    
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
    },
    onhower:{
        "&hower":{
            image:art
        }
    },
    
}))





const Blogs = () => {
    const classes = useStyles()
    const [post,setPost] = useState(null)
   


    const search = ()=>{
        const option=document.getElementById('textinput').value
        
        sanityClient.fetch(`*[_type=="post" && title match "${option}*"]{
            title,
            slug,
            "authorname":author->name,
            publishedAt,

            mainImage{
                asset->{_id,url},
                alt
            }
        }`).then((data)=>setPost(data)).catch(console.error);
    }
    
    useEffect(()=>{
        sanityClient.fetch(`*[_type=="post"]{
            title,
            slug,
            "authorname":author->name,
            publishedAt,

            mainImage{
                asset->{_id,url},
                alt
            }
        }`).then((data)=>{
            setPost(data)
        }).catch(console.error);
        
    },[]);

    return (
        <div>
        <NavbarMain2 />
        <div className={classes.outerdiv}>

        <Container className={classes.header} align="center">
            <Grid container >
                <Grid item sm={8} xs={12}>
                <Typography variant="h4" align="center">
                    The DevDynamic Blogs
                </Typography>
                
                </Grid>
                
                <Grid item  sm={4} xs={12}>
                    <div style={{display:'flex',justifyContent:'right'}}>
                    <TextField id="textinput" label="Search Projects" variant="outlined" size="small" style={{margin:10, height:20}} align="right" />
                    <Button variant="contained" color="primary" className={classes.button} onClick={search} style={{margin:7}}>search</Button>
                    </div>
                </Grid>
            </Grid>
    
        </Container>
            <Container align="center" className={classes.blogContainer}>
                <Grid container spacing={3} justify="center" className={classes.grid}>
                { post && post.map((p,index)=>
                    <Grid item key={p.title}>
                        <Card className={classes.card}>
                            <Link to={"/blogs/"+p.slug.current} key={p.slug.current} className={classes.link}>
                                <CardMedia component="img"
                                alt={p.title}
                                height="140" 
                                image={p.mainImage.asset.url}s
                                title={p.title}>
                                
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="h2" align="left">
                                        {p.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2" align="left">
                                        by: {p.authorname}
                                    </Typography>
                                </CardContent>
                                
                            </Link>
                        </Card>
                    </Grid>
                    )}
                </Grid>
                
            </Container>
        </div>
        </div>
    )
}

export default Blogs;
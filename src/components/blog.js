import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import NavbarMain2 from '../pages/navbarmain2';
import sanityClient from '../sanityclient.js';
// import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import {makeStyles, Typography, Container, Grid} from '@material-ui/core';
// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source){
//     return builder.image(source)
// }

const useStyles = makeStyles((theme)=>({
    outerdiv:{
        justifyContent:'center',
        alignContent: 'center',
        background: '#95a5a6',
        padding:35,
        width:'100%'
    },
    mainimage:{
        height:300,
        width:450,
        border:"solid 10px",

    },
    content:{
        padding:60
    }

}))



const Blog = () =>{
    const [blog,setBlog] = useState(null);
    const {slug } = useParams();

    
    const classes = useStyles()

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "authorname":author->name
        }`).then((data)=>setBlog(data[0])).catch(console.error)
    
    
    
    
    
    }, [slug])
    

    if(!blog){
        return (<div className={classes.outerdiv}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>Loading....</h3>
            
            </div>)
    }
    return (<div>
        <NavbarMain2 />
        <div className={classes.outerdiv}>
        
        <br></br>
        <br></br>

        <Container justifyContent="center" align="center">
            <Grid container>
            <Grid item sm={4} xs={12}>
            <img src={blog.mainImage.asset.url} className={classes.mainimage}></img>
        </Grid>
            </Grid>
            <Container justifyContent="center" align="left" className={classes.content}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Typography variant="h4" gutterBottom>
                        {blog.title}
                    </Typography>
                    <Typography variant="p" align="right" color="textSecondary" gutterBottom>
                        author: {blog.authorname}
                    </Typography>
                </div>
                <BlockContent blocks={blog.body} projectId="83qyp24l" dataset="production"></BlockContent>
            </Container>
            
        </Container>

        </div>
        </div>)
}

export default Blog
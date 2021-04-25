import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core';
import WhatWeDo from './whatwedo.js';
import svg1 from '../video/svg1.svg';
import styled from 'styled-components'

const resDiv = styled.div`
    
    @media screen and (max-width:700px){
        display:none
    }
`

const useStyles = makeStyles(()=>({
    outerdiv:{
        justifyContent:'center',
        alignContent: 'center',
        background: '#95a5a6',
        paddingTop:35
    },
    
    card: {
        width: 360,
        borderRadius:35,
        justifySelf: 'center',
        
    },
    content:{
        
        marginTop: 30,
        marginRight:30,
        marginLeft:30,
        marginBottom:30,
    },

    media: {
        height: 300,
        alignSelf: 'center',
        resizeMode:'contain'
    },
    typo:{
        fontSize:15
    }

}))




const AboutusRes = () => {
    const classes = useStyles()
    return (
    <resDiv>
        <div className={classes.outerdiv} name="aboutusres">
            <Grid container alignItems="center" justify="center">
                <Grid item >
                    <Card className={classes.card}>
                        <CardMedia
                            component="svg" 
                            className={classes.media}
                            image={svg1}
                            title="Live from space album cover"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h4" component="h4" align="center">
                                About Us
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h6" align="center" className={classes.typo}>
                            They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
                            </Typography>
                        </CardContent>
                        
                        
                    </Card>
                </Grid>
            </Grid>
            <br></br>
        </div>
    </resDiv>
    )
}


export default AboutusRes;
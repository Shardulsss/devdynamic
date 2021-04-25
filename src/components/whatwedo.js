
import styled from 'styled-components'
import { Card as CardMui, CardMedia} from '@material-ui/core';
import { CardContent, CardMenu, Grid } from '@material-ui/core';
import { makeStyles, Typography, Container} from '@material-ui/core';
import svg1 from '../video/svg1.svg';
import useWindowPosition from './useWindowPosition.js';
import {Collapse, Slide} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    outerdiv:{
        justifyContent:'center',
        alignContent: 'center',
        background: '#95a5a6',
        padding:35
    },
    grid:{
        padding:'35px'
    },

    typo:{
        
        padding: theme.spacing(1),
    },
    card:{
        width:345,
        borderRadius:15
    },

}))

const WhatWeDo = ()=>{
    const data = [{title:"Web Dev",desc:"xyx",imgsrc:svg1},{title:"app dev",desc:"adw",imgsrc:svg1},{title:"graphics",desc:"wefa",imgsrc:svg1}]
    const classes = useStyles()

    const checked = useWindowPosition({id:'header',val:1.4})
    return (
        

        <div className={classes.outerdiv} name="whatwedo">
        
            
                <Container maxWidth="sm">
                    <Typography gutterBottom variant="h4" component="h2" align='center'>
                        What We Do ?
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p" align='center'>
                    We are bunch of guys who love to design and develop on web, tech enthusiasts you can say.
                    Our strengths include
                    </Typography>
                </Container>
            
            
            
                <Grid container spacing={3} justify="center" className={classes.grid}>
                    {data.map(d=><Grid item>
                        <Slide direction="right" in={checked} mountOnEnter unmountOnExit {...(checked?{timeout:1000}:{})}>
                        <CardMui className={classes.card}>
                            <CardMedia component="img"
                            alt={d.title}
                            height="140"
                            image={d.imgsrc}
                            title="Contemplative Reptile"
                            >
                            
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {d.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {d.desc}
                                </Typography>
                
                            </CardContent>
                        </CardMui>
                        </Slide>
                    </Grid>)}
                    
                    
                </Grid>
            
            <Container maxWidth="sm">
                <Typography variant="h6" color="textPrimary" component="p" align='center'>
                We are here to make this process simpler and cheaper for you
                It would be pleasure to work with new projects and understand your concerns.
                </Typography>
            </Container>
        
        </div>
    );
}

export default WhatWeDo;
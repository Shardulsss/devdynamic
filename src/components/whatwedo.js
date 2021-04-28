
import styled from 'styled-components'
import { Card as CardMui, CardMedia} from '@material-ui/core';
import { CardContent, CardMenu, Grid } from '@material-ui/core';
import { makeStyles, Typography, Container} from '@material-ui/core';
import web from '../video/web.svg';
import web2 from '../video/web2.svg';
import app from '../video/app.svg';
import art from '../video/art.svg';
import useWindowPosition from './useWindowPosition.js';
import {Collapse, Slide} from '@material-ui/core';
import {Modal,Backdrop,Fade} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useState } from 'react';

const useStyles = makeStyles((theme)=>({
    outerdiv:{
        justifyContent:'center',
        alignContent: 'center',
        background: '#95a5a6',
        padding:65
    },
    grid:{
        padding:'35px'
    },

    typo:{
        
        padding: theme.spacing(1),
    },
    card:{
        width:345,
        borderRadius:15,
    },
    Cardmed:{
        
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(-1.05, 1.05, 1)" },
    },
    button:{
        "&:hover, &:focus": {
            color: "#fff",
            fontSize:14
        }
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius:15,
        height: 300,
        width:500,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}))

const WhatWeDo = ()=>{

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleOpen3 = () => {
        setOpen3(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };


    const data = [
        {title:"Web Application Development",desc:"Web Application Development is the future of software for enterprises....",imgsrc:web2,handler:handleOpen1},
        {title:"Mobile Application Development",desc:"Our mobile Application Development services use a creative design processes....",imgsrc:app,handler:handleOpen2},
        {title:"Graphics Designing And Digital Art",desc:"Graphics are important factor to make presense of your business....",imgsrc:art, handler:handleOpen3}]
    const classes = useStyles()

    const checked = useWindowPosition({id:'header',val:1.4})
    return (
        

        <div className={classes.outerdiv} name="whatwedo">
        
            
                <Container maxWidth="sm">
                    <Typography gutterBottom variant="h4" component="h2" align='center'>
                        What We Do ?
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p" align='center'>
                    We are here to simplify lives, improve productivity & consistently enable faster success through building online presense for your local business.
The Services we provide are
                    </Typography>
                </Container>
            
            
            
                <Grid container spacing={3} justify="center" className={classes.grid}>
                    {data.map(d=><Grid item>
                        <Slide direction="right" in={checked} mountOnEnter unmountOnExit {...(checked?{timeout:1000}:{})}>
                        <CardMui className={classes.card}>
                            <CardMedia component="img"
                            alt={d.title}
                            height="240"
                            image={d.imgsrc}
                            title={d.title}
                            className={classes.Cardmed}
                            >
                            
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {d.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {d.desc}
                                </Typography>
                                <Button 
                                variant="contained" color="primary" className={classes.button} style={{margin:10}} 
                                onClick={d.handler} >
                                Show More
                                </Button>

                            </CardContent>
                        </CardMui>
                        </Slide>
                    </Grid>)}
                    
                    
                </Grid>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open1}
                    onClose={handleClose1}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                    >
        <Fade in={open1}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Web Application Development</h2>
            <p id="transition-modal-description">Web Application Development is the future of software for enterprises.Web Application Development software allows organisations to move faster in a dynamic and ever changing environment. Not only this, Web Application Development offers ease of scaling, monitoring, changing and standardising processes within or outside the organisation.</p>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
      <Fade in={open2}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Mobile Application Development</h2>
          <p id="transition-modal-description">Our mobile Application Development services use a creative design processes, deep domain understanding and cutting edge technological resources to ensure that your application deliver the desired outcomes. Benefits of building mobile apps with us include custom mobile app development, cost effective, process driven development, cutting edge technology and highest quality standards.</p>
        </div>
      </Fade>
    </Modal>



    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open3}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Graphics Designing And Digital Art</h2>
            <p id="transition-modal-description">Graphics are important factor to make presense of your business. We as artists would like to offer our skills to benifits of your businsess.
            </p>
          </div>
        </Fade>
      </Modal>




            
            <Container maxWidth="sm">
                <Typography variant="h6" color="textPrimary" component="p" align='center'>
                We are here to make this process simpler and cheaper for you.
                It would be pleasure to work with new projects and understand your concerns.
                </Typography>
            </Container>
        
        </div>
    );
}

export default WhatWeDo;
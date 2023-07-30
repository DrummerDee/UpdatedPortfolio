import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import selfie from '../Assets/selfie.jpg';
import '../Styles/Homepage.css';



export default function Homepage() {
    return (
        <Container
            
            sx={{ mr:2 }}
            style ={{backgroundColor:'whitesmoke', margin:'0',padding:'0'}}
        >
            <div>
                <section className = 'container__left'> 
                <div className = "left_wrapper">
                <Typography variant="h5"> Hello, my name is </Typography>
                <Typography variant="h2"> Deja </Typography> 
                <Typography variant="h2"> Drummer </Typography>
                <h4>Your next </h4> 
                <div className = 'descrip'>
                    <div className = 'descrip__wrapper'>
                        <div className = 'title'> UI/UX Designer </div>
                        <div className = 'title'> Software Engineer </div>
                        <div className = 'title'> Team Player </div>
                        <div className = 'title'> Profound Employee </div>
                        </div>
                    </div>
            <div>
                    <Button 
                        variant='outlined' 
                        size = 'medium'
                        href='#' 
                        className = 'left__btn'
                        > Meet Me </Button>
                        </div>
                </div>
                </section>
            </div>
            <Box
            sx={{width:'400',height:'500'}}
            >
                <span> This shouldn't in mobile</span>
                </Box>
        </Container>
    )
}

import React from 'react';
import { Typography, Container } from '@mui/material';


export default function Home(){
    return(
       <div id="home" className='home' >
           <div>
           
            <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
                <Typography variant="h2" align="center" gutterBottom>Hi I am Arijit </Typography>
                <Typography variant="body1" align="center" paragraph>
                    This is where you can introduce yourself and highlight your skills, experience, or any other relevant information.
                </Typography>
                
                
            </Container>
        </div>
           
            
        </div>
        
    )
}
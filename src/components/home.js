import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';


export default function Home(){
    return(
       <div id="home" className='home' style={{paddingTop:"100px"}}>
           <div>
           
            <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
                <Typography variant="h2" align="center" gutterBottom>Welcome to My Portfolio</Typography>
                <Typography variant="body1" align="center" paragraph>
                    This is where you can introduce yourself and highlight your skills, experience, or any other relevant information.
                </Typography>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Project Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description of the project goes here. You can provide details about what you've worked on, technologies used, etc.
                        </Typography>
                    </CardContent>
                </Card>
                {/* Add more Card components for showcasing additional projects */}
            </Container>
        </div>
           
            
        </div>
        
    )
}
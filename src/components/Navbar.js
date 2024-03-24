import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function NavBar(){
    const [value,setValue]=useState('red')
    return(
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               Arijit Banerjee
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Contact</Button>
        </Toolbar>
    </AppBar>
    )
}
import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@mui/material';
import { Container } from 'react-bootstrap';



const data={link:"https://github.com/iamarijit360x/myportfolio",profile:"https://www.linkedin.com/in/arijit-banerjee-335447159/"}
function Footer() {
  return (
    <BottomNavigation style={{width: '100%',bottom: 0,backgroundColor: '#333',color: '#fff',marginTop:"3rem",alignItems:"center"}}>
      <Container style={{display:"flex",justifyContent:"center",gap:"2rem"}}>
        <Typography>©All rights are reserved  </Typography>
        <Typography>Made by <span style={{color:"yellow",cursor:"pointer"}} onClick={()=>{window.location.href=data.profile}}>Arijit</span></Typography>
        <Typography>View the soruce code on <span style={{color:"yellow",cursor:"pointer"}} onClick={()=>{window.location.href=data.link}}>Github</span></Typography>
      </Container>
    </BottomNavigation>
  );
}

export default Footer;

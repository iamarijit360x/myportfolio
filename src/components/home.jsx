import {useState} from 'react';
import { Typography, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export default function Home(){
    const links=[
        {id:"github",href:"https://github.com/iamarijit360x",icon:<GitHubIcon/>},
        {id:"linkedin",href:"https://www.linkedin.com/in/arijit-banerjee-335447159/",icon:<LinkedInIcon/>},
        {id:"gmail",href:"arijit.bandyos7@gmail.com",icon:<EmailIcon/>},
        
        ]


        const [hoverItem,setHoverItem]=useState(null)
        function handleMouseEnter(id){
            setHoverItem(id)
          }
          function handleMouseELeave(){
            setHoverItem(null)
          }
    return(
       
           
            <Container id="home" maxWidth="md" sx={{ marginTop: '2rem',height:'1oovh' }} style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Typography variant="h2" align="center" gutterBottom>Hi I am Arijit </Typography>
                <Typography variant="body1" align="center" paragraph>
                  Full Stack Developer
                </Typography>
                <Container style={{display:"flex",justifyContent:"space-around"}}>
                {links.map(item=>(
                <div onClick={()=>{window.location.href=item.href}} onMouseEnter={()=>handleMouseEnter(item.id)} onMouseLeave={handleMouseELeave} style={{cursor:"pointer",transform:hoverItem===item.id?'scale(1.5)':null,transition: 'transform 0.3s ease-in-out'}}>
                  {item.icon}
                  
                
                </div>

              ))}
            
                </Container>
                
            </Container>
     
           
            
  
        
    )
}
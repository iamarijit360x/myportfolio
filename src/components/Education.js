import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
const data=[{
    institutionName:"St. Thomas' College Of Engineering & Technology",
    degreeName:"Bachelor Of Technology in Computer Science & Engineering",
    graduation:"2023",
    grade:"CGPA 9.26"
},{
    institutionName:"Haripal Gurudhyal Institution",
    degreeName:"Higher Scendary",
    graduation:"2018",
    grade:"Percentage:81%"
},{
    institutionName:"Haripal Gurudhyal Institution",
    degreeName:"Scendary-Madhyamik",
    graduation:"2016",
    grade:"Percentage:83%"
}]
export default function Education(){
            return (
                <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
                    <Typography variant="h3" align="center" gutterBottom>Education</Typography>
                    {data.map((item)=>(
                      <List >
                      <ListItem>
                          <ListItemText
                              primary={item.institutionName}
                              secondary={
                                  <>
                                      <Typography 
                                          component="span"
                                          variant="body1"
                                          color="textPrimary"
                                      >
                                          {item.degreeName}({item.graduation})
                                      </Typography>
                                      <br></br>
                                      <Typography 
                                          component="span"
                                    
                                          variant="span"
                                          color="textPrimary"
                                      >
                                          {item.grade}
                                      </Typography>
                                      
                                
                                  </>
                              }
                          />
                      </ListItem>
                  </List>  
                    ))}
                    
                </Container>
            );
        }
        
    


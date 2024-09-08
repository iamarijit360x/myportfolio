import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const workExperiences = [
  {
    title: 'Web Developer Intern',
    company: '10xtech',
    location: 'Remote, India',
    duration: 'July 2024 - Present',
    description: `Developed secure authentication modules, including user registration, login, and password reset functionalities using Node.js, Express.js, and MongoDB. Worked on RESTful API creation and middleware implementation for protected routes.`,
  },

  // Add more work experiences as needed
];

const WorkExperience = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
        Work Experience
      </Typography>
      <Grid container spacing={2} sx={{justifyContent: "center"}}>
        {workExperiences.map((experience, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardHeader
                title={experience.title}
                subheader={`${experience.company} | ${experience.location}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {experience.duration}
                </Typography>
                <Typography variant="body1" paragraph>
                  {experience.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkExperience;

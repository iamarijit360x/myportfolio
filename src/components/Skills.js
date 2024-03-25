import React from 'react';
import { Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode,faSquareJs,faHtml5, faCss3,faPython } from '@fortawesome/free-brands-svg-icons';

const frontendSkills = [
  { name: 'React', icon: faReact },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3 },
  // Add more frontend skills as needed
];

const backendSkills = [
  { name: 'Node.js', icon: faNode },
  { name: 'Express.js', icon: faNode },
  // Add more backend skills as needed
];

const languageSkills = [
  { name: 'JavaScript', icon: faSquareJs }, // No specific icon for JavaScript
  { name: 'Python', icon: faPython },
  // Add more language skills as needed
];

const databaseSkills = [
  { name: 'MongoDB', icon:'' },
  { name: 'OracleDB', icon:'' },
  { name: 'MySQL', icon:'' },
  // Add more database skills as needed
];

const toolSkills = [
  { name: 'Git', icon: null },
  { name: 'Visual Studio', icon: null } // No specific icon for Git
  // Add more tool skills as needed
];

const Libaries = [
  { name: 'Bootstrap', icon: null }, // No specific icon for Git
  // Add more tool skills as needed
];

function SkillCard({ title, skills }) {
  return (
    <Card  >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                icon={skill.icon ? <FontAwesomeIcon icon={skill.icon} /> : null}
                label={skill.name}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

function SkillSection({smallScreen}) {
  return (
   
      <div id="skill" style={!smallScreen?{height:"100vh",rowGap:"10px",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"5rem"}:{paddingTop:"5rem"}}>
        <Typography variant="h4" gutterBottom align='center'>Skills</Typography>
        <Grid container spacing={smallScreen?5:10} style={{ display: "flex", justifyContent:"space-around",alignItems:"center",marginTop:"1em"}}>
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard title="Frontend" skills={frontendSkills} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard title="Backend" skills={backendSkills} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard title="Languages" skills={languageSkills} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard title="Database" skills={databaseSkills} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard title="Tools" skills={toolSkills} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SkillCard title="Libaries" skills={Libaries} />
          </Grid>
        </Grid>
      </div>
  );
}

export default SkillSection;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const skills = [
  {
    title: "JavaScript",
    icon:<JavascriptIcon sx={{fontSize:"2em"}}/>,
    description: "Proficient in modern ES6+ syntax and concepts, including asynchronous programming, closures, and functional programming.",
  },
  {
    title: "React",
    description: "Skilled in building dynamic and responsive user interfaces using ReactJS, including state management with Redux and context API.",
  },
  {
    title: "HTML & CSS",
    description: "Expertise in building semantically structured and visually appealing web pages using HTML5 and CSS3, including knowledge of Flexbox and CSS Grid for layout.",
  },
  {
    title: "Node.js",
    description: "Experience in server-side development with Node.js, creating RESTful APIs, and working with Express framework.",
  },
  {
    title: "Database Management",
    description: "Familiarity with database systems such as MongoDB and MySQL, including CRUD operations and schema design.",
  },
];

export default function Skills() {
  return (
    <Container id="skill" maxWidth="md" sx={{ marginTop: '2rem'}} style={{textAlign:"center"}}>
      <Typography variant='h3' align="center" gutterBottom>Skills</Typography>
      <Container style={{display:"flex",flexDirection:"row",gap:"10px",flexWrap:"wrap",justifyContent:"center"}}>
        {skills.map((skill, index) => (
          <Card key={index} sx={{ maxWidth: 300, minHeight: 150 }}>
            <CardContent>
             <FontAwesomeIcon icon="fa-brands fa-react" />
              <Typography gutterBottom variant="h5" component="div">
                {skill.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {skill.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

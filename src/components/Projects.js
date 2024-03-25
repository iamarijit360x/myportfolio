import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';

const data=[
  {
    title:"Student Data Collection Application",
    img:"https://user-images.githubusercontent.com/58776463/113732098-ec08b380-9716-11eb-8377-39a4142f6e60.jpg",
    des:"The student management system streamlines data collection and ensures accuracy with advanced validation mechanisms. Its robust search capabilities enable swift access to student information, facilitating informed decision-making. With a seamless user experience, it enhances administrative efficiency, catering to the diverse needs of both administrators and users.",
    sourcecode:"https://github.com/iamarijit360x/College-Admission"
  },
  {
    title:"Region Based Robust Data Hiding Technique",
    img:"https://img.wonderhowto.com/img/39/27/63645855710304/0/steganography-hide-secret-data-inside-image-audio-file-seconds.w1456.jpg",
    des:"Developed a collaborative steganography solution integrating GAN for cover image realism and skin detection algorithms. This project, part of the final year curriculum, showcased proficiency in data security and image manipulation techniques. Leveraged GAN technology to enhance security measures and applied a bucketing algorithm for minimal impact on image integrity during message embedding.",
    sourcecode:"https://github.com/iamarijit360x/Final-Year-Project-Stegenography-"
  },
  {
    title:"A Bakery - Static Responsive Website",
    img:"https://ik.imagekit.io/dcwfxnql7/image.png?updatedAt=1711293937472",
    des:"Achieved optimal viewing experience across diverse devices by employing HTML and CSS for structure and style, enhancing aesthetics. Integrated Google Fonts to elevate the visual appeal, showcasing a keen understanding of design principles. This project demonstrates proficiency in both web development and design, ensuring a polished and user-friendly website interface.",
    sourcecode:"https://github.com/iamarijit360x/iamarijit360x.lemonbakes.github.io/tree/main",
    demo:"https://iamarijit360x.github.io/iamarijit360x.lemonbakes.github.io/"
  }
];

export default function Projects() {
  return (
    <Container id="projects" maxWidth="md" sx={{ marginTop: '2rem'}} style={{textAlign:"center"}}>
      <Typography variant='h3' align="center" gutterBottom>Projects</Typography>
      <Container style={{display:"flex",flexDirection:"row",gap:"10px",flexWrap:"wrap",justifyContent:"center"}}>
        {data.map(item=>(
          <Card sx={{ maxWidth: 400, marginBottom: '20px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.des}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around',bottom:'0' }}>
              <Button size="small">Share</Button>
              <Button size="small">link</Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

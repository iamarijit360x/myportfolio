import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';

const data = [
  {
    title: "The Joy Of Computing Using Python",
    issuingBody: "NPTEL",
    link:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS41S61450010f45da2e11e9a576874a6ce388d2"
  },
  {
    title: "Relational Database",
    img: "https://ik.imagekit.io/dcwfxnql7/image.png?updatedAt=1711383767543",
    issuingBody: "freeCodeCamp",
    link:"https://www.freecodecamp.org/certification/fcc32be6e37-bba6-4bcd-9034-656609aa990b/relational-database-v8"
  },
  {
    title: "JavaSciprt",
    img: "https://ik.imagekit.io/dcwfxnql7/image(2).png?updatedAt=1711383987996",
    issuingBody: "freeCodeCamp",
    link:"https://www.freecodecamp.org/certification/fcc32be6e37-bba6-4bcd-9034-656609aa990b/responsive-web-design"
  },
  {
    title: "Back End Development and APIs",
    img: "https://ik.imagekit.io/dcwfxnql7/image(3).png?updatedAt=1711383988047",
    issuingBody: "freeCodeCamp",
    link:"https://www.freecodecamp.org/certification/fcc32be6e37-bba6-4bcd-9034-656609aa990b/back-end-development-and-apis"
  },
  {
    title: "Responsive Web Design",
    img: "https://ik.imagekit.io/dcwfxnql7/image(2).png?updatedAt=1711383987996",
    issuingBody: "freeCodeCamp",
    link:"https://www.freecodecamp.org/certification/fcc32be6e37-bba6-4bcd-9034-656609aa990b/javascript-algorithms-and-data-structures"
  },
  {
    title: "SQL(Intermediate)",
    img: "https://ik.imagekit.io/dcwfxnql7/image.png?updatedAt=1711384452590",
    issuingBody: "HackerRank",
    link:"https://www.hackerrank.com/certificates/76eed46e2a72"
  },
  {
    title: "Problem Solving(Basic)",
    img: "https://ik.imagekit.io/dcwfxnql7/image(1).png?updatedAt=1711384523996",
    issuingBody: "HackerRank",
    link:"https://www.hackerrank.com/certificates/a5b9d831c997"
  }

  // Add more items as needed
];

const Certifications = () => {

  const [smallScreen,setIsSmallScreen]=useState(window.innerWidth<=750);
    
  useEffect(() => {
    // Function to update isSmallScreen state
    function handleResize() {
      if(window.innerWidth <= 600)
        setIsSmallScreen(1);
      else if(window.innerWidth <= 1023)
        setIsSmallScreen(2);
        else if(window.innerWidth <= 1030)
        setIsSmallScreen(3);
      else
        setIsSmallScreen(4)
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set initial state
    handleResize();
    
    // Clean up by removing event listener when component unmounts
    return () => {
        window.removeEventListener('resize', handleResize);
        
    };
}, [smallScreen]);
  const [startIdx, setStartIdx] = useState(0);
  const arr=smallScreen===1?[0]:smallScreen===2?[0, 1]:smallScreen===3?[0,1,2]:[0,1,2,3];
  const nextSlide = () => {
    setStartIdx(prevStartIdx => (prevStartIdx + 1) % data.length);
  };

  const prevSlide = () => {
    setStartIdx(prevStartIdx => (prevStartIdx + data.length - 1) % data.length);
  };

  return (
    <Container id="certifications" maxWidth="md" sx={{ paddingTop: '5rem'}} style={{ textAlign: "center",alignContent:"center",marginTop:"5rem"}}>
      <Typography variant='h4' align="center" gutterBottom>Certifications</Typography>
      <Container style={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {arr.map((offset) => (
          <Card key={offset} sx={{ maxWidth: 300, marginBottom: '20px',minWidth:260}}>
            <CardMedia
              sx={{ height: 140 }}
              image={data[(startIdx + offset) % data.length].img}
              title={data[(startIdx + offset) % data.length].title}
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                {data[(startIdx + offset) % data.length].title}
              </Typography>
              <Typography variant="overline" color="text.secondary">
                {data[(startIdx + offset) % data.length].issuingBody}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around', bottom: '0' }}>
              <Button size="small" onClick={()=>{window.location.href=(data[(startIdx + offset) % data.length].link)}}>Link</Button>
            </CardActions>
          </Card>
        ))}
      </Container>
      <Container style={{ marginTop: '20px', textAlign: 'center',display:"flex",justifyContent:"center",gap:"2rem"}}>
        <Button variant="contained" onClick={prevSlide}>Prev</Button>
        <Button variant="contained" onClick={nextSlide}>Next</Button>
      </Container>
    </Container>
  );
};

export default Certifications;
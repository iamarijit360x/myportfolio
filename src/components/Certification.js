import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';

const data = [
  {
    title: "Item 1",
    img: "image_url_1",
    description: "Description of item 1"
  },
  {
    title: "Item 2",
    img: "image_url_2",
    description: "Description of item 2"
  },
  {
    title: "Item 3",
    img: "image_url_2",
    description: "Description of item 2"
  },
  {
    title: "Item 4",
    img: "image_url_2",
    description: "Description of item 2"
  },
  {
    title: "Item 5",
    img: "image_url_2",
    description: "Description of item 2"
  },
  {
    title: "Item 6",
    img: "image_url_2",
    description: "Description of item 2"
  },
  {
    title: "Item 7",
    img: "image_url_2",
    description: "Description of item 2"
  },
  {
    title: "Item 8",
    img: "image_url_2",
    description: "Description of item 2"
  }

  // Add more items as needed
];

const Certifications = () => {
  const [startIdx, setStartIdx] = useState(0);

  const nextSlide = () => {
    setStartIdx(prevStartIdx => (prevStartIdx + 1) % data.length);
  };

  const prevSlide = () => {
    setStartIdx(prevStartIdx => (prevStartIdx + data.length - 1) % data.length);
  };

  return (
    <Container id="cards-carousel" maxWidth="md" sx={{ marginTop: '2rem' }} style={{ textAlign: "center" }}>
      <Typography variant='h3' align="center" gutterBottom>Card Carousel</Typography>
      <Container style={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {[0, 1, 2, 3].map((offset) => (
          <Card key={offset} sx={{ maxWidth: 300, marginBottom: '20px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={data[(startIdx + offset) % data.length].img}
              title={data[(startIdx + offset) % data.length].title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data[(startIdx + offset) % data.length].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data[(startIdx + offset) % data.length].description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around', bottom: '0' }}>
              <Button size="small">Link</Button>
            </CardActions>
          </Card>
        ))}
      </Container>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button variant="contained" onClick={prevSlide}>Prev</Button>
        <Button variant="contained" onClick={nextSlide}>Next</Button>
      </div>
    </Container>
  );
};

export default Certifications;

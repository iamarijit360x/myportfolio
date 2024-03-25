import React from 'react';
import { Typography, Container, Card, CardContent } from '@mui/material';

const data = [
    {
        institutionName: "St. Thomas' College Of Engineering & Technology",
        degreeName: "Bachelor Of Technology in Computer Science & Engineering",
        graduation: "2023",
        grade: "CGPA 9.26"
    },
    {
        institutionName: "Haripal Gurudhyal Institution",
        degreeName: "Higher Scendary",
        graduation: "2018",
        grade: "Percentage:81%"
    },
    {
        institutionName: "Haripal Gurudhyal Institution",
        degreeName: "Scendary-Madhyamik",
        graduation: "2016",
        grade: "Percentage:83%"
    }
];

export default function Education() {
    return (
        <Container id="education" maxWidth="md" sx={{ marginTop: '2rem' }} style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h4" align="center" gutterBottom>Education</Typography>
            {data.map((item, index) => (
                <Card key={index} sx={{ marginBottom: '1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="div" color="textPrimary">
                            {item.institutionName}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            {item.degreeName} ({item.graduation})
                        </Typography>
                        <Typography variant="body1" color="textPrimary">
                            {item.grade}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}

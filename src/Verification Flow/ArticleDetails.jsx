import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import image from '../demo_image123.jpg'

const services = [
  {
    title: "METER READING SERVICE",
    description: "Give tenants verifiable accounts of their utility usage with our meter reading services. Let us eliminate inaccurate, overestimated bills.",
    imageUrl: "meter-reading-service.jpg",
  },
  {
    title: "CUSTOMIZED TENANT INVOICES",
    description: "We offer personalized invoicing for each client we serve. We also inform our customers of all leakages or other fixture issues.",
    imageUrl: "customized-tenant-invoices.jpg",
  },
  {
    title: "INSPECTION REPORTS",
    description: "Gain itemized summaries of utility usage for all main and sub-meters on your property. We offer reports on a monthly or quarterly basis.",
    imageUrl: "inspection-reports.jpg",
  },
  {
    title: "CLIENT TESTIMONIALS",
    description: "Find out what clients are saying about us! Our dedicated staff is proud to offer all of our clients prompt outstanding service.",
    imageUrl: "client-testimonials.jpg",
  },
];

const ArticleDetails = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ height: '100%' }}>
          <Box
              sx={{
                height: 140,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
             <Typography>{service.title}</Typography> 
            </Box>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
            <Button size="small" sx={{ justifyContent: 'center', margin: 2 }}>
              LEARN MORE
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleDetails;

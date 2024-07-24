import React from 'react';
import { Grid, Typography, Avatar, Button, Box } from '@mui/material';

import image from '../Assets/viewcircle_.png'
import BlogImage from './blog_image.png'


const articles = [
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
  {
    title: '5 Strategies for Effective Debt Collection in 2024',
    date: 'Jan 17, 2024',
    readingTime: '7 min read',
    author: 'Nick Garre',
    role: 'Debt Collection Specialist',
    image: `${BlogImage}`,
  },
];

const BlogSection = () => (
  <Box sx={{  padding: '40px' }}>
    <Grid container spacing={2}>
      {articles.map((article, index) => (
        <Grid  item xs={12} sm={6} md={4} lg={4} key={index}>
           <Box sx={{ position: 'relative',height : '438px', width : '387px', borderRadius : '26px', border : 'none'}}>
    <Box
      sx={{ height :"280px",width :'387px',backgroundImage : `url(${BlogImage})`, backgroundPosition : 'center', backgroundSize : 'contain'}}
    />
    <Box sx={{  position: 'absolute',top: 8,left: 8,backgroundColor: '#DBEAFE',color: 'white',padding: '6px 12px 6px 12px',borderRadius: '4px',color : '#1D4ED8',fontSize : '14px',fontWeight : 400,borderRadius : '26px'}}>
        Debt Collection Strategies
        </Box>
    <Box sx={{display : 'flex', flexDirection :'column', gap : '6px',marginTop : '12px'}}>
      <Typography sx={{display : 'flex', gap : '8px', fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
        {article.date} • {article.readingTime}
      </Typography>
      <Typography sx={{fontSize : '18px', fontWeight : 600, color : '#101828'}}>
        {article.title}
      </Typography>
      <Box sx={{  display: 'flex',alignItems: 'center',gap : '6px'}}>
        <Avatar sx={{ height : '48px', width : '48px' , border : '1px solid black', borderRadius : '50px' }} src={image} /> 
        <Box>
          <Typography sx={{fontSize : '14px', fontWeight : 600, color : '#334155'}}>
            {article.author}
          </Typography>
          <Typography sx={{fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
            {article.role}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
        </Grid>
      ))}
    </Grid>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
      <Button variant="contained" sx={{padding : '10px 16px 10px 16px',backgroundColor :'#1E3A8A',fontSize : '14px', fontWeight :'700',color :'#FFFFFF', textTransform : 'none'}}>
        See more articles
      </Button>
    </Box>
  </Box>
);

export default BlogSection;

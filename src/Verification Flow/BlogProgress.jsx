import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Link, List, ListItem, LinearProgress } from '@mui/material';

const BlogProgress = () => {
  const [progress, setProgress] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = (scrollTop / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: '24px' }}>
      {/* Progress bar at the top of the page */}


      <Box sx={{ position: 'fixed', top: '60px', left: '10px', width: '200px' }}>
        <Typography variant="h6">Table of Content</Typography>
        <List>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection('introduction')}>Introduction</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection('technology')}>Embrace Technology and Automation</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection('engagement')}>Prioritize Customer Engagement</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection('data')}>Implement Data-Driven Decision Making</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection('payment')}>Offer Flexible Payment Options</Link>
          </ListItem>
          <ListItem>
            <Link component="button" onClick={() => scrollToSection('training')}>Invest in Training and Development</Link>
          </ListItem>
        </List>
        <Box sx={{ width: '20%', position: 'fixed'}}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      </Box>

      {/* Content Sections with IDs */}
      <Box sx={{ marginLeft: '220px', padding: '16px' }}>
        <Typography variant="h4" id="introduction">Introduction</Typography>
        <Typography variant="body1" paragraph>
          In the ever-evolving landscape of debt collection, staying ahead of the curve is essential for success...
        </Typography>

        <Typography variant="h4" id="technology">Embrace Technology and Automation</Typography>
        <Typography variant="body1" paragraph>
          Embracing technology and automation can streamline your debt collection processes...
          Embracing technology and automation can streamline your debt collection processes...

          Embracing technology and automation can streamline your debt collection processes...
          Embracing technology and automation can streamline your debt collection processes...

          Embracing technology and automation can streamline your debt collection processes...

          Embracing technology and automation can streamline your debt collection processes...
          Embracing technology and automation can streamline your debt collection processes...

        </Typography>

        <Typography variant="h4" id="engagement">Prioritize Customer Engagement</Typography>
        <Typography variant="body1" paragraph>
          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...
          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...

          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...

          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...

          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...

          Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory...


        </Typography>

        <Typography variant="h4" id="data">Implement Data-Driven Decision Making</Typography>
        <Typography variant="body1" paragraph>
          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...
          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...

          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...

          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...

          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...
          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...

          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...

          Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends...

        </Typography>

        <Typography variant="h4" id="payment">Offer Flexible Payment Options</Typography>
        <Typography variant="body1" paragraph>
          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...
          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...

          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...

          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...

          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...
          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...

          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...

          Providing debtors with flexible payment options can facilitate debt resolution and increase payment compliance...

        </Typography>

        <Typography variant="h4" id="training">Invest in Training and Development</Typography>
        <Typography variant="body1" paragraph>
          Investing in training and development empowers your team with the skills necessary for effective debt collection...
          Investing in training and development empowers your team with the skills necessary for effective debt collection...

          Investing in training and development empowers your team with the skills necessary for effective debt collection...

          Investing in training and development empowers your team with the skills necessary for effective debt collection...

          Investing in training and development empowers your team with the skills necessary for effective debt collection...
          Investing in training and development empowers your team with the skills necessary for effective debt collection...

          Investing in training and development empowers your team with the skills necessary for effective debt collection...

          Investing in training and development empowers your team with the skills necessary for effective debt collection...

        </Typography>
      </Box>
    </Container>
  );
};

export default BlogProgress;

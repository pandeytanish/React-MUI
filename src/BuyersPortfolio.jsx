import React from 'react';
import { Container, Box, Typography, Chip, Grid, Paper, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';



const BuyersPortfolio = () => {


  return (
    <Container sx={{ padding: '40px' , boxShadow : 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius : '24px', width : '895px', marginTop : '1rem'}}>
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2  }}>
      <img src="https://via.placeholder.com/100" alt="Company Logo" style={{ marginRight: 16, borderRadius : '100px' }} />
      <Box>
        <Typography variant="h5">Apex Financial Solutions</Typography>
        <Typography variant="body1">www.apexfinancialsolutions.com</Typography>
      </Box>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
      <Box>
        <Typography variant="body2"><strong>Financial Services</strong></Typography>
        <Typography variant="body2">Industry/Sector Section</Typography>
      </Box>
      <Box>
        <Typography variant="body2"><strong>CRN-456789123</strong></Typography>
        <Typography variant="body2">Registration number</Typography>
      </Box>
      <Box>
        <Typography variant="body2"><strong>United States</strong></Typography>
        <Typography variant="body2">Country</Typography>
      </Box>
      <Box>
        <Typography variant="body2"><strong>Florida</strong></Typography>
        <Typography variant="body2">State</Typography>
      </Box>
      <Box>
        <Typography variant="body2"><strong>Miami</strong></Typography>
        <Typography variant="body2">City</Typography>
      </Box>
      <Box>
        <Typography variant="body2"><strong>33101</strong></Typography>
        <Typography variant="body2">Zip</Typography>
      </Box>
    </Box>

    <Divider sx={{ marginBottom: 2 }} />

    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h6">Services offered</Typography>
      <Box>
        <Chip label="Financial Consultation" sx={{ marginRight: 1, marginBottom: 1 }} />
        <Chip label="Debt Collection Services" sx={{ marginRight: 1, marginBottom: 1 }} />
        <Chip label="Business Valuation" sx={{ marginRight: 1, marginBottom: 1 }} />
        <Chip label="Risk Management" sx={{ marginRight: 1, marginBottom: 1 }} />
        <Chip label="Market Research and Analysis" sx={{ marginRight: 1, marginBottom: 1 }} />
      </Box>
    </Box>

    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h6">Bio</Typography>
      <Typography variant="body2">
        Apex Financial Solutions is a leading provider of comprehensive financial services, specializing in debt collection,
        financial consultation, and risk management. With over 20 years of industry experience, our mission is to help
        businesses and individuals navigate their financial challenges and achieve sustainable growth.
      </Typography>
    </Box>

    <Divider sx={{ marginBottom: 2 }} />

    <Box>
      <Typography variant="h6">Portfolio</Typography>
      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, marginBottom: 2 }}>
        <Typography variant="body2">File name.doc</Typography>
        <Typography variant="body2">128 KB</Typography>
      </Paper>
      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
        <Typography variant="body2">File name.doc</Typography>
        <Typography variant="body2">128 KB</Typography>
      </Paper>
    </Box>
  </Container>
  );
};

export default BuyersPortfolio;

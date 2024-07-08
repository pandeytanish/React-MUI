import React from 'react';
import {  Box, Typography, Chip, Paper, Divider, Select, MenuItem, TextField, Button } from '@mui/material';
import CompanyLogo from './Assets/viewcircle_.png'




const BuyersPortfolio = () => {


  return (
    <Box sx={{ display : 'flex' , gap : '24px', justifyContent : 'center', marginTop : "12px"}}>
      <Box sx={{ padding: '40px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '24px', width: '895px', height: '880px', display: 'flex', flexDirection : "column", gap : '24px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap : '12px' }}>
          <img src={CompanyLogo} alt="Company Logo" style={{ marginRight: 16, borderRadius: '100px', border : '2px solid #DBEAFE' }} />
          <Box>
            <Typography sx={{fontSize : '24px', fontWeight : '700',color : '#0F172A'}} >Apex Financial Solutions</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400', color : '#334155'}}>www.apexfinancialsolutions.com</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop : '40px'}}>
          <Box>
            <Typography sx={{fontSize : '18px' , fontWeight : '600', color :'#0F172A'}}>Financial Services</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400' , color : '#334155'}}>Industry/Sector Section</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize : '18px' , fontWeight : '600', color :'#0F172A'}}>CRN-456789123</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400' , color : '#334155'}}>Registration number</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize : '18px' , fontWeight : '600', color :'#0F172A'}}>United States</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400' , color : '#334155'}}>Country</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize : '18px' , fontWeight : '600', color :'#0F172A'}}>Florida</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400' , color : '#334155'}}>State</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize : '18px' , fontWeight : '600', color :'#0F172A'}}>Miami</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400' , color : '#334155'}}>City</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize : '18px' , fontWeight : '600', color :'#0F172A'}}>33101</Typography>
            <Typography sx={{fontSize : '16px', fontWeight : '400' , color : '#334155'}}>Zip</Typography>
          </Box>
        </Box>

        <Divider />

        <Box sx={{ paddingTop : '40px', display : 'flex', flexDirection : 'column', gap : '24px' }}>
          <Typography sx={{fontSize : '20px', fontWeight : '600' , color: '#0F172A'}}>Services offered</Typography>
          <Box>
            <Chip  label="Financial Consultation" sx={{ marginRight: 1, marginBottom: 1, padding: '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500' }} />
            <Chip label="Debt Collection Services" sx={{ marginRight: 1, marginBottom: 1,padding: '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500' }} />
            <Chip label="Business Valuation" sx={{ marginRight: 1, marginBottom: 1,padding: '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500' }} />
            <Chip label="Risk Management" sx={{ marginRight: 1, marginBottom: 1,padding: '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500' }} />
            <Chip label="Market Research and Analysis" sx={{ marginRight: 1, marginBottom: 1,padding: '8px 16px 8px 16px', backgroundColor : '#E2E8F0' , fontSize : '14px', fontWeight : '500'}} />
          </Box>
        </Box>
        <Divider/>
        <Box sx={{ display : 'flex', flexDirection : 'column', gap : '24px', paddingTop : '40px' }}>
          <Typography sx={{fontSize : '20px', fontWeight : '600', color : '#0F172A'}}>Bio</Typography>
          <Typography sx={{fontSize : '16px', fontWeight : '400', color : '#0F172A'}}>
            Apex Financial Solutions is a leading provider of comprehensive financial services, specializing in debt collection,
            financial consultation, and risk management. With over 20 years of industry experience, our mission is to help
            businesses and individuals navigate their financial challenges and achieve sustainable growth.
          </Typography>
        </Box>

        <Divider />

        <Box sx={{display : 'flex', gap : '24px', paddingTop: '40px'}}>
          <Box sx={{width :"50%"}}>
          <Typography variant="h6">Portfolio</Typography>
          <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, marginBottom: 2 }}>
            <Typography variant="body2">File name.doc</Typography>
            <Typography variant="body2">128 KB</Typography>
          </Paper>
          </Box>
          <Box  sx={{width :"50%"}}>
          <Typography variant="h6">Portfolio</Typography>
          <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
            <Typography variant="body2">File name.doc</Typography>
            <Typography variant="body2">128 KB</Typography>
          </Paper>
          </Box>
        </Box>
      </Box>
{/* //////////////////////// */}
      <Box
        sx={{ height : '630px', width: '300px',padding: '16px',borderRadius: '16px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <Typography variant="h6" sx={{ marginBottom: '16px' }}>
          Make Offer
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
          Offer Type
        </Typography>
        <Select
          defaultValue=""
          fullWidth
          sx={{ marginBottom: '16px' }}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select offer type
          </MenuItem>

        </Select>
        <Typography variant="body1" sx={{ marginBottom: '8px' }}>
          Enter purchase amount
        </Typography>
        <TextField fullWidth type="number"
          InputProps={{
            startAdornment: <Box component="span" sx={{ marginRight: '8px' }}>$</Box>,
          }}
          defaultValue="0.00"
          sx={{ marginBottom: '16px' }}
        />
        <TextField fullWidth multiline placeholder='Optionally, add an appeal to the owner of the debt, explaining why you are the best firm to handle this debt.' minRows={4} variant="outlined" sx={{ marginBottom: '16px' }}/>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#0d47a1', color: 'white' }}>
          Make Offer
        </Button>
      </Box>
    </Box>
  );
};

export default BuyersPortfolio;

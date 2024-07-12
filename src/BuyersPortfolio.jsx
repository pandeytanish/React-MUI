import React from 'react';
import { Card, Box, Typography, IconButton, Chip, Divider, Select, MenuItem, TextField, Button } from '@mui/material';
import CompanyLogo from './Assets/viewcircle_.png'
import { MoreVert as MoreVertIcon, Description as DescriptionIcon } from '@mui/icons-material';
const BuyersPortfolio = () => {

  return (
    <Box style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: "12px" }}>
      <Box style={{ padding: '40px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 8px', borderRadius: '24px', width: '895px', height: '880px', display: 'flex', flexDirection: "column", gap: '24px' }}>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* <img src={CompanyLogo} alt="Company Logo" style={{ marginRight: 16, borderRadius: '100px', border: '2px solid #DBEAFE' }} /> */}
          <Box>
            <Typography style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A' }}>Apex Financial Solutions</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155', textDecorationLine: 'underline', textDecorationColor: '#334155' }}>www.apexfinancialsolutions.com</Typography>
          </Box>
        </Box>
        <Divider />
        <Box style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '40px' }}>
          <Box>
            <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>Financial Services</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>Industry/Sector Section</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>CRN-456789123</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>Registration number</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>United States</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>Country</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>Florida</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>State</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>Miami</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>City</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: '18px', fontWeight: '600', color: '#0F172A' }}>33101</Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#334155' }}>Zip</Typography>
          </Box>
        </Box>

        <Divider />

        <Box style={{ paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Typography style={{ fontSize: '20px', fontWeight: '600', color: '#0F172A' }}>Services offered</Typography>
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }} >
            <Chip label="Financial Consultation" style={{ marginRight: 1, marginBottom: 1, padding: '8px 16px 8px 16px', backgroundColor: '#E2E8F0', fontSize: '14px', fontWeight: '500' }} />
            <Chip label="Debt Collection Services" style={{ marginRight: 1, marginBottom: 1, padding: '8px 16px 8px 16px', backgroundColor: '#E2E8F0', fontSize: '14px', fontWeight: '500' }} />
            <Chip label="Business Valuation" style={{ marginRight: 1, marginBottom: 1, padding: '8px 16px 8px 16px', backgroundColor: '#E2E8F0', fontSize: '14px', fontWeight: '500' }} />
            <Chip label="Risk Management" style={{ marginRight: 1, marginBottom: 1, padding: '8px 16px 8px 16px', backgroundColor: '#E2E8F0', fontSize: '14px', fontWeight: '500' }} />
            <Chip label="Market Research and Analysis" style={{ marginRight: 1, marginBottom: 1, padding: '8px 16px 8px 16px', backgroundColor: '#E2E8F0', fontSize: '14px', fontWeight: '500' }} />
          </Box>
        </Box>
        <Divider />
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '40px' }}>
          <Typography style={{ fontSize: '20px', fontWeight: '600', color: '#0F172A' }}>Bio</Typography>
          <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#0F172A' }}>
            Apex Financial Solutions is a leading provider of comprehensive financial services, specializing in debt collection,
            financial consultation, and risk management. With over 20 years of industry experience, our mission is to help
            businesses and individuals navigate their financial challenges and achieve sustainable growth.
          </Typography>
        </Box>

        <Divider />

        <Box style={{ display: 'flex', gap: '24px', paddingTop: '40px' }}>
          <Box style={{ width: "50%", display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Typography style={{ fontSize: '14px', fontWeight: '700', color: '#334155', marginLeft: '8px', marginBottom: '2px' }} >Portfolio</Typography>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: '8px 4px 8px 8px', gap: '16px' }}>
              <Box style={{ backgroundColor: '#DBEAFE', display: 'flex', gap: '10px', padding: '16px', borderRadius: '8px' }}>
                {/* <DescriptionIcon /> */}
              </Box>
              <Box sx={{ flex: '1 0 auto', marginLeft: '4px' }}>
                <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#0F172A' }}>File name.doc </Typography>
                <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#64748B' }}>
                  128KB
                </Typography>
              </Box>
              <IconButton>
                {/* <MoreVertIcon /> */}
              </IconButton>
            </Card>
          </Box>
          <Box style={{ width: "50%", flexDirection: 'column', gap: '4px' }}>
            <Typography style={{ fontSize: '14px', fontWeight: '700', color: '#334155', marginLeft: '8px', marginBottom: '2px' }}>Portfolio</Typography>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: '8px 4px 8px 8px', gap: '16px' }}>
              <Box style={{ backgroundColor: '#DBEAFE', display: 'flex', gap: '10px', padding: '16px', borderRadius: '8px' }}>
                {/* <DescriptionIcon /> */}
              </Box>
              <Box sx={{ flex: '1 0 auto', marginLeft: '4px' }}>
                <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#0F172A' }}>File name.doc </Typography>
                <Typography style={{ fontSize: '16px', fontWeight: '400', color: '#64748B' }}>
                  128KB
                </Typography>
              </Box>
              <IconButton>
                {/* <MoreVertIcon /> */}
              </IconButton>
            </Card>
          </Box>
        </Box>

      </Box>
      <Box
        style={{ height: '635px', width: '285px', padding: '24px', borderRadius: '24px', display : 'flex', flexDirection : 'column', gap : '24px' ,boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 8px' }}>
        <Typography variant="h6" style={{ fontSize : '20px' , fontWeight : '600' , color :'#334155' }}>
          Make Offer
        </Typography>
        <Box style={{display : 'flex', flexDirection : 'column', gap : '4px'}}>
        <Typography  style={{ fontSize : '14px', fontWeight :'700' , color :'#334155'  }}>
          Offer Type
        </Typography>
        <Select
          defaultValue=""
          fullWidth
          style={{  fontSize : '16px' , fontWeight : '400' , color : '#94A3B8' }}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select offer type
          </MenuItem>
          <MenuItem value="" disabled>
            Select offer type 
          </MenuItem>

        </Select>
        </Box>
        <Box style={{display : 'flex', flexDirection : 'column', gap : '4px'}}>
        <Typography style={{ fontSize : '14px', fontWeight :'700' , color :'#334155'  }}>
          Enter purchase amount
        </Typography>
        <TextField fullWidth type="number"
          InputProps={{
            startAdornment: <Box component="span" style={{ marginRight: '8px' , fontSize : '16px' , fontWeight : '700' , color :'#64748B' }}>$</Box>,
          }}
          defaultValue="0.00"
          style={{ fontSize : '16px' , fontWeight : '400' , color : '#94A3B8' }}
        />
        </Box>
        <TextField  fullWidth multiline placeholder='Describe the details of your debt ' minRows={12} variant="outlined" style={{  borderRadius : '8px' , border : '1px solid #CBD5E1' , marginBottom : '-8px'}}
          inputProps={{
            style: { 
              fontSize: '16px',
              fontWeight : '600' ,
               color : '#94A3B8',
               wordSpacing : '6px'
            },
          }} />
        <Button variant="contained" fullWidth style={{ fontSize : '16px', fontWeight : '700', backgroundColor: '#1E3A8A', color: 'white' , padding :'10px 16px 10px 16px' , borderRadius : '8px' ,textTransform: 'none' }}>
          Make Offer
        </Button>
      </Box>
    </Box>
  );
};

export default BuyersPortfolio;

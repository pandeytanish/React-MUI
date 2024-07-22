import React from 'react';
import {  Typography, Button, IconButton, Box } from '@mui/material';
import {  Description, MoreVert } from '@mui/icons-material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ProgressBar = () => {
  return (
    <Box sx={{ padding : '40px', display : 'flex', flexDirection : 'column',gap : '18px', height : '630px', width : '793px' , borderRadius : '24px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 8px' }}>
        <Typography sx={{fontSize : '20px', fontWeight : '600', color : '#1E293B', marginLeft : "16px"}}>Verification Timeline</Typography>
    <Box sx={{ position: 'relative', margin: '20px 0', padding: '0px 0px', '&:before': { content: '""', position: 'absolute', left: '28px', top: 0, bottom: 0, width: '1px', backgroundColor: '#E2E8F0' } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px',  paddingLeft: '40px' }}>
        <Box sx={{padding : '8px', backgroundColor: '#EFF6FF', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '8px', top: '0px', fontSize: '14px', fontWeight: 'bold',  color: '#1D4ED8' }}>1</Box>
        <Box sx={{ marginLeft: '20px', display : 'flex', flexDirection : 'column', gap : '8px' }}>
          <Typography sx={{fontSize : '12px', fontWeight : '400', color : '#475569'}}>22 Feb 2022</Typography>
          <Typography sx={{fontSize : '16px', fontWeight : '500', color : '#1E293B'}}>You have requested a verification for Apex Financial Solutions.</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px', position: 'relative', paddingLeft: '40px' }}>
      <Box sx={{padding : '8px', backgroundColor: '#EFF6FF', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '8px', top: '0px', fontSize: '14px', fontWeight: 'bold',  color: '#1D4ED8' }}>2</Box> 
        <Box sx={{ marginLeft: '20px', display : 'flex', flexDirection : 'column', gap : '8px' }}>
          <Typography sx={{fontSize : '12px', fontWeight : '400', color : '#475569'}}>26 Feb 2022</Typography>
          <Typography sx={{fontSize : '16px', fontWeight : '500', color : '#1E293B'}}>Apex Financial Solutions has accepted the verification request.</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px', position: 'relative', paddingLeft: '40px' }}>
      <Box sx={{padding : '8px', backgroundColor: '#EFF6FF', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '8px', top: '0px', fontSize: '14px', fontWeight: 'bold',  color: '#1D4ED8' }}>3</Box>

        <Box sx={{ marginLeft: '20px', display : 'flex', flexDirection : 'column', gap : '8px' }}>
          <Typography sx={{fontSize : '12px', fontWeight : '400', color : '#475569'}}>26 Feb 2022</Typography>
          <Typography sx={{fontSize : '16px', fontWeight : '500', color : '#1E293B'}}>The verification of Apex Financial Solutions has been completed successfully.</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px', position: 'relative', paddingLeft: '40px' }}>
      <Box sx={{padding : '8px', backgroundColor: '#EFF6FF', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '8px', top: '0px', fontSize: '14px', fontWeight: 'bold',  color: '#1D4ED8' }}>4</Box>
        
        <Box sx={{ marginLeft: '20px', display : 'flex', flexDirection : 'column', gap : '8px' }}>
          <Typography sx={{fontSize : '12px', fontWeight : '400', color : '#475569'}}>26 Feb 2022</Typography>

          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center',gap : '16px', marginBottom: '10px', padding: '8px 4px 8px 8px', borderRadius: '4px', backgroundColor: '#f5f5f5' }}>
              <Description sx={{ marginRight: '10px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{fontSize : '16px', fontWeight : '400', color : '#0F172A'}}>File name.doc</Typography>
                <Typography sx={{fontSize : '14px', fontWeight : '400', color : '#64748B'}}>128 KB</Typography>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center',gap : '16px', marginBottom: '10px', padding: '8px 4px 8px 8px', borderRadius: '4px', backgroundColor: '#f5f5f5' }}>
              <Description sx={{ marginRight: '10px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{fontSize : '16px', fontWeight : '400', color : '#0F172A'}}>File name.doc</Typography>
                <Typography sx={{fontSize : '14px', fontWeight : '400', color : '#64748B'}}>128 KB</Typography>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Typography  sx={{ display: 'flex', alignItems: 'center', color : '#059669', fontSize : '16px', fontWeight : '500' }}>
            <InfoOutlinedIcon fontSize="small" sx={{ marginRight: '4px' }} /> Low Risk Business
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', paddingLeft: '40px' }}>
      <Box sx={{padding : '8px', backgroundColor: '#EFF6FF', color: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '8px', top: '0px', fontSize: '14px', fontWeight: 'bold',  color: '#1D4ED8' }}>5</Box>
    
        <Box sx={{ marginLeft: '20px', textAlign: 'center'}}>
          <Button variant="contained" sx={{backgroundColor : '#1E3A8A', fontSize : '14px', fontWeight : '700', textTransform : 'none'}}>Create Business Deal</Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default ProgressBar;

import React from 'react';
import { Box, Button, Typography, TextField, MenuItem, Grid, Paper, IconButton, Divider } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';



const AdminDecision = () => {
  const [businessRisk, setBusinessRisk] = React.useState('High');

  return (

    <Box sx={{width : '1046px', border : '2px solid red',borderRadius : '18px', padding : '28px', display : 'flex', flexDirection : 'column', gap : '24px', gap : '18px'}}>
      <Typography sx={{fontSize : '20px', fontWeight : '600', color : '#1E293B'}}>
        Administrator's decision
      </Typography>
       <Box>
        <Typography sx={{fontSize : '14px', fontWeight : '700', color :'#334155',marginBottom : '4px'}}>Buisness Risk</Typography>
      <TextField
        select
        value={businessRisk}
        onChange={(e) => setBusinessRisk(e.target.value)}
        fullWidth
        sx={{
          '& .MuiInputBase-root': {
            height: '44px',
            '& .MuiSelect-select': {
              height: '44px',
              display: 'flex',
              alignItems: 'center',
            },
          },
          borderRadius: '8px'
        }}
      
        variant='outlined'
      >
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </TextField>
      </Box>
     <Box sx={{display : 'flex', flexDirection : 'column',gap : '16px'}}>
      <Typography sx={{fontSize : '18px', fontWeight : '600', color : '#0F172A'}}>
        Documentation
      </Typography>
      <Grid  container spacing={"32px"}>
        <Grid item xs={12} md={6}>
          <Typography sx={{fontSize : '14px', fontWeight : '700', color : '#334155'}}>Documentation</Typography>
        <Paper elevation={1} sx={{padding : '24px 64px 24px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px dashed grey' }}>
      <IconButton color="primary" component="span" sx={{ fontSize: 40 }}>
        <UploadFileIcon fontSize="inherit" />
      </IconButton>
      <Typography sx={{fontSize : '16px', fontWeight : '700', color :'#0F172A'}}>
        Upload document
      </Typography>
      <Typography sx={{fontSize : '12px', fontWeight : '400', color : '#64748B',textAlign : 'center'}} gutterBottom>
        Upload your document. Supports format: JPG, PNG, PDF, <br/> DOCX
      </Typography>
      <Button variant='text' sx={{backgroundColor : '#EFF6FF',fontSize : '16px', fontWeight : '700', color : '#0F172A', textTransform : 'none',height : '44px',marginTop : '8px',borderRadius : '8px'}}>
        Choose a File
        <input type="file" hidden />
      </Button>
    </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{fontSize : '14px', fontWeight : '700', color : '#334155'}}>Documentation</Typography>
        <Paper elevation={1} sx={{padding : '24px 64px 24px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px dashed grey' }}>
      <IconButton color="primary" component="span" sx={{ fontSize: 40 }}>
        <UploadFileIcon fontSize="inherit" />
      </IconButton>
      <Typography sx={{fontSize : '16px', fontWeight : '700', color :'#0F172A'}}>
        Upload document
      </Typography>
      <Typography sx={{fontSize : '12px', fontWeight : '400', color : '#64748B',textAlign : 'center'}} gutterBottom>
        Upload your document. Supports format: JPG, PNG, PDF, <br/> DOCX
      </Typography>
      <Button variant='text' sx={{backgroundColor : '#EFF6FF',fontSize : '16px', fontWeight : '700', color : '#0F172A', textTransform : 'none',height : '44px',marginTop : '8px',borderRadius : '8px'}}>
        Choose a File
        <input type="file" hidden />
      </Button>
    </Paper>
        </Grid>
      </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center',marginTop : '12px' }}>
        <Button variant='text' sx={{backgroundColor : '#EFF6FF',fontSize : '16px', fontWeight : '700',color :'#0F172A',textTransform : 'none',borderRadius : '8px'}} startIcon={<UploadFileIcon />}>
          Add more document
        </Button>
      </Box>
     <Divider/>
      <Box sx={{ display: 'flex', gap : '12px'}}>
        <Button fullWidth variant="text" sx={{backgroundColor : '#1E3A8A',fontSize : '14px', fontWeight :'700', color : '#FFFFFF', textTransform : 'none',borderRadius  : '8px'}}>
          Approve
        </Button>
        <Button fullWidth variant="text" sx={{backgroundColor : '#EFF6FF',fontSize : '14px', fontWeight :'700', color : '#0F172A', textTransform : 'none',borderRadius  : '8px'}}>
          Reject
        </Button>
      </Box>
    </Box>

  );
};

export default AdminDecision;

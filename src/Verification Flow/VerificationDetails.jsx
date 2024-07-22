import React from 'react';
import { Box, Typography, Paper, Button, IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VerificationDetails = () => {
  const steps = [
    { date: '22 Feb 2022', description: 'You have requested a verification for Apex Financial Solutions.' },
    { date: '26 Feb 2022', description: 'Apex Financial Solutions has accepted the verification request.' },
    { date: '26 Feb 2022', description: 'The verification of Apex Financial Solutions has been completed successfully.' },
  ];

  const files = [
    { name: 'File name.doc', size: '128 KB' },
    { name: 'File name.doc', size: '128 KB' },
  ];

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Verification Timeline
      </Typography>
      <Box>
        {steps.map((step, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <Box mr={2}>
              <Typography sx={{border : '1px', borderRadius : ''}} variant="h6" color="primary">{index + 1}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">{step.date}</Typography>
              <Typography variant="body1">{step.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box mt={2} mb={2}>
        {files.map((file, index) => (
          <Paper key={index} variant="outlined" sx={{ display: 'flex', alignItems: 'center', padding: 1, marginBottom: 1 }}>
            <Box mr={2}>
              <InsertDriveFileIcon />
            </Box>
            <Box flexGrow={1}>
              <Typography variant="body2">{file.name}</Typography>
              <Typography variant="caption" color="textSecondary">{file.size}</Typography>
            </Box>
            <Box>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <CheckCircleIcon color="primary" />
        <Box ml={1}>
          <Typography variant="body1" color="primary">Low Risk Business</Typography>
        </Box>
      </Box>
      <Button variant="contained" color="primary">
        Create Business Deal
      </Button>
    </Box>
  );
};

export default VerificationDetails;

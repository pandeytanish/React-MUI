import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ExpandableBox = () => {
  return (
    <Box
      sx={{
        height: 270,
        width: 300,
        backgroundColor: 'lightgray',
        overflow: 'hidden',
        transition: 'height 0.3s ease',
        '&:hover': {
          height: 320,
        },
        '&:hover .hover-target': {
          color: 'primary.main',
        },
      }}
    >
      <Typography
        variant="h6"
        className="hover-target"
        sx={{ padding: 2, transition: 'color 0.3s ease' }}
      >
        Hover over this text
      </Typography>
      {/* Other components */}
    </Box>
  );
};

export default ExpandableBox;

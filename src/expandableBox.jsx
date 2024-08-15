import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const expandableBox = () => {
  return (
    <Box
    sx={{
      height: 270,
      width: 300,
      backgroundColor: 'lightgray',
      overflow: 'hidden',
      transition: 'height 0.3s ease',
      '& .hover-target:hover ~ &': {
        height: 400, // Expand the box height when hovering over the text
      },
    }}
  >
    <Typography
      variant="h6"
      className="hover-target"
      sx={{ padding: 2 }}
    >
      Hover over the teffadbggf 
    </Typography>
  </Box>
  );
};

export default expandableBox;

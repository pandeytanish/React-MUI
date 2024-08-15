
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TestExpand() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded((prev) => !prev);
    };
  return (
    <Box
    sx={{
      height: expanded ? 400 : 270,
      width: 300,
      backgroundColor: 'lightgray',
      overflow: 'hidden',
      transition: 'height 0.3s ease',
    }}
  >
    <Typography
      variant="h6"
      className="hover-target"
      sx={{ padding: 2, transition: 'color 0.3s ease', cursor: 'pointer' }}
      onClick={handleToggle}
    >
      expand hojaaaaaa
    </Typography>
  </Box>
  )
}

export default TestExpand
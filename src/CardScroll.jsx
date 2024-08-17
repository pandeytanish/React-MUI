import React from 'react';
import { Box, styled } from '@mui/material';
const HorizontalScrollWrapper = styled(Box)(({}) => ({
    width: '100px',
    height: '300px',
    overflowY: 'auto',
    overflowX: 'hidden',
    transform: 'rotate(-90deg) translateY(-100px)',
    transformOrigin: 'right top',
    color: 'red',
    border: '2px solid yellow',
    margin: '200px',
  }));
  
  const StyledTypography = styled("div")(({}) => ({
    width: '100px',
    height: '100px',
    transform: 'rotate(90deg)',
    transformOrigin: 'right top',
    color: 'red',
    border: '2px solid Blue',
  }));

const CardScroll = () => {
  return (


<HorizontalScrollWrapper>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>
  <StyledTypography  >
  Text1
  </StyledTypography>

</HorizontalScrollWrapper>
  );
};

export default CardScroll;

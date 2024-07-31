import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const StyledFormControl = styled(FormControl)({
  width: '100%',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    border: '1px solid #c4c4c4',
    padding: '10px 15px',
    fontSize: '16px',
    color: '#6c757d',
    '&:hover': {
      borderColor: '#007bff',
    },
    '&.Mui-focused': {
      borderColor: '#007bff',
    },
  },
  '& .MuiInputLabel-root': {
    fontWeight: 'bold',
    color: '#333',
  },
});

const SelectMenu = () => {
  const [offerType, setOfferType] = React.useState('');

  const handleChange = (event) => {
    setOfferType(event.target.value);
  };

  return (
    <StyledFormControl>
      {/* <InputLabel id="offer-type-label">Offer Type</InputLabel> */}
      <Select
        labelId="offer-type-label"
        value={offerType}
        onChange={handleChange}
        displayEmpty
        IconComponent={ExpandMoreIcon}
        // inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Select offer type</em>
        </MenuItem>
        <MenuItem value={10}>Offer Type 1</MenuItem>
        <MenuItem value={20}>Offer Type 2</MenuItem>
        <MenuItem value={30}>Offer Type 3</MenuItem>
        <MenuItem value={10}>Offer Type 1</MenuItem>
        <MenuItem value={20}>Offer Type 2</MenuItem>
        <MenuItem value={30}>Offer Type 3</MenuItem>
        <MenuItem value={10}>Offer Type 1</MenuItem>
        <MenuItem value={20}>Offer Type 2</MenuItem>
        <MenuItem value={30}>Offer Type 3</MenuItem>
        <MenuItem value={10}>Offer Type 1</MenuItem>
        <MenuItem value={20}>Offer Type 2</MenuItem>
        <MenuItem value={30}>Offer Type 3</MenuItem>
        <MenuItem value={10}>Offer Type 1</MenuItem>
        <MenuItem value={20}>Offer Type 2</MenuItem>
        <MenuItem value={30}>Offer Type 3</MenuItem>
      </Select>
    </StyledFormControl>
  );
};

export default SelectMenu;

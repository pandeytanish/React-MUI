import React from 'react'
import { Box, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'

function MUISelect() {
    const [countries, setCountries] = useState([]);
    console.log(countries)

    const handleChange = (event) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
      };
  return (
    <>
    <Box width= '300px'>
    <TextField
        margin='normal'
        label="Select country"
        select
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        value={countries}
        onChange={handleChange}
      >
            <TextField
        margin='normal'
        label="Select country"
        select
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        value={countries}
        onChange={handleChange}
      ></TextField>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="FR">France</MenuItem>
        <MenuItem value="SA">South Africa</MenuItem>
      </TextField>
    </Box>
    </>
  )
}

export default MUISelect
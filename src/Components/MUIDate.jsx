import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, Box, Typography } from '@mui/material';

const MUIDate = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const calculateNights = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <DatePicker
          label="Check-In Date"
          value={checkInDate}
          onChange={(newValue) => setCheckInDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="Check-Out Date"
          value={checkOutDate}
          onChange={(newValue) => setCheckOutDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Typography variant="h6">
          Total Nights: {calculateNights(checkInDate, checkOutDate)}
        </Typography>
      </Box>
    </LocalizationProvider>
  );
};

export default MUIDate;

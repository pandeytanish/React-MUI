import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MUICounter = () => {
  const initialRows = [
    { id: 1, name: 'Row 1' },
    { id: 2, name: 'Row 2' },
    { id: 3, name: 'Row 3' },
  ];

  const [rows, setRows] = useState(initialRows.map(row => ({ ...row, rooms: 1 })));

  const handleIncrease = (id) => {
    setRows(rows.map(row => row.id === id ? { ...row, rooms: row.rooms + 1 } : row));
  };

  const handleDecrease = (id) => {
    setRows(rows.map(row => (row.id === id && row.rooms > 1) ? { ...row, rooms: row.rooms - 1 } : row));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Rooms</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell sx={{ padding: '4px' }}>
                <Box display="flex" alignItems="center">
                  <Button
                    variant="outlined"
                    onClick={() => handleDecrease(row.id)}
                    disabled={row.rooms <= 1}
                    size="small"
                  >
                    <RemoveIcon />
                  </Button>
                  <Typography variant="h6" component="span" mx={2}>
                    {row.rooms}
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleIncrease(row.id)}
                  >
                    <AddIcon />
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MUICounter;

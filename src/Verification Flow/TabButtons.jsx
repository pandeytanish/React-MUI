import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

export default function TabButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="custom tabs"
        sx={{
          '& .MuiTabs-flexContainer': {
            borderBottom: '1px solid #e8e8e8',
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            minWidth: 120,
            fontWeight: 'bold',
            '&.Mui-selected': {
              color: '#1976d2',
            },
            '&:hover': {
              color: '#1976d2',
              opacity: 1,
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#1976d2',
          },
        }}
      >
        <Tab label="All" />
        <Tab label="Debt Collection Strategies" />
        <Tab label="Regulatory Compliance" />
        <Tab label="Debt Buying and Investment" />
        <Tab label="Debt Portfolio Management" />
        <Tab label="Industry Insights" />
      </Tabs>
    </Box>
  );
}

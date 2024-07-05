import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    padding: 16, // Equivalent to theme.spacing(2)
    borderRadius: 12, // Equivalent to theme.shape.borderRadius
  },
  chip: {
    marginTop: 8, // Equivalent to theme.spacing(1)
    marginBottom: 8, // Equivalent to theme.spacing(1)
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 16, // Equivalent to theme.spacing(2)
  },
  statBox: {
    textAlign: 'center',
  },
});

const MedicalDebtPackage = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          Medical Debt Package
        </Typography>
        <Chip 
          label="Active Collection" 
          color="success" 
          size="small" 
          className={classes.chip}
        />
        <Typography variant="body2" color="text.secondary">
          Posted 54 minutes ago
        </Typography>
        <Box className={classes.statsContainer}>
          <Box className={classes.statBox}>
            <AccountBalanceWalletIcon />
            <Typography variant="h6">$2,500</Typography>
            <Typography variant="body2">Portfolio Size</Typography>
          </Box>
          <Box className={classes.statBox}>
            <PeopleIcon />
            <Typography variant="h6">1</Typography>
            <Typography variant="body2">Account Count</Typography>
          </Box>
          <Box className={classes.statBox}>
            <MonetizationOnIcon />
            <Typography variant="h6">$500</Typography>
            <Typography variant="body2">Average Balance per Account</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MedicalDebtPackage;

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((_theme) => ({
  box: {
    backgroundColor: '#EFF6FF',
  },
  container: {
    padding: '80px 120px',
    display: 'flex',
    flexDirection: 'column',
    gap: '44px',
  },
  title: {
    fontWeight: 600,
    fontSize: '30px',
    textAlign: 'center',
  },
  paper: {
    padding: '40px',
    borderRadius: '24px',
    textAlign: 'center',
  },
  paperTitle: {
    fontWeight: 600,
    fontSize: '24px',
  },
  paperText: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#475569',
  },
  nowrap: {
    whiteSpace: 'nowrap',
  }
}));

const DebtBuyerInfo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Typography className={classes.title}>
          What Debt Buyers should look out for
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.paperTitle} gutterBottom>
                Type of Debts to Buy
              </Typography>
              <Typography className={classes.paperTitle} gutterBottom>
                Type of Debts to Buy
              </Typography>
              <Typography className={classes.paperText}>
                Selecting the right type of debts, such as credit card debts, medical bills, or utility bills, is crucial.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.paper}>
              <Typography className={`${classes.paperTitle} ${classes.nowrap}`} gutterBottom>
                Assessing Debt Portfolios
              </Typography>
              <Typography className={classes.paperText}>
                Evaluating the potential profitability of debt portfolios by analyzing historical data on recovery rates.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.paperTitle} gutterBottom>
                Legal Considerations
              </Typography>
              <Typography className={classes.paperText}>
                Ensuring all debt buying activities align with state laws and regulations enforced by bodies like CFPB.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DebtBuyerInfo;

import React, { Component } from 'react';
import {
  Box, Typography, Card, CardContent, Avatar, Grid, Paper, ListItem, ListItemIcon, ListItemText, Button, Divider,
  TextField, MenuItem, Select
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { SelectChangeEvent } from '@mui/material/Select';

class MedicalDebt extends Component{

  render() {


    return (
      <Box sx={{ display: 'flex', gap: '2.5rem' }}>
        <Box sx={{ width: '75%'  }}>
          <Card sx={{ width: '100%', display : 'flex', flexDirection : 'column', gap : '24px', padding : '40px' , boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '24px' }}>
            <CardContent>
              <Typography variant="h6" color="black" fontWeight="bold">
                Medical Debt Package
              </Typography>
              <Typography variant="body2">
                <Box sx={{ display: 'flex', gap: '2rem' }}>
                  <Button sx={{ backgroundColor: '#b0eac7', color: 'black', borderRadius: '10px', padding: '5px 10px', fontWeight: 'bold', fontSize: '0.4rem' }}>
                    ACTIVE COLLECTION
                  </Button>
                  <span>Posted 54 minutes ago</span>
                </Box>
                <Divider sx={{ mt: '1rem' }} />
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MonetizationOnOutlinedIcon />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>$2,500</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">Portfolio Size</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <PersonOutlineIcon />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>1</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">Account Count</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AccountBalanceIcon />
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>$500</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">Average Balance per Account</Typography>
                </Box>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ padding: '20px', maxWidth: '400px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>Credit Card</Typography>
                    <Typography style={{ color: '#888', fontSize: '12px' }}>Type of Debt</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography style={{ fontWeight: 'bold', fontSize: '16px' }}>1 year</Typography>
                    <Typography style={{ color: '#888', fontSize: '12px' }}>Age of Debt</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">Detailed Information</Typography>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2">Total Number of debts: 1</Typography>
                    <Typography variant="body2">Total Amount of debts: $2,500</Typography>
                    <Typography variant="body2">Total Judgements: 0</Typography>
                    <Typography variant="body2">Total months as customer: 3</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2">Past payment made: Yes</Typography>
                    <Typography variant="body2">Month average pay time: 1</Typography>
                    <Typography variant="body2">Last collector contact: 01.02.2024</Typography>
                    <Typography variant="body2">Last creditor contact: 01.02.2024</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold">Supporting Documentation</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold">Other documents</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper elevation={3}>
                      <ListItem sx={{ width: '100%', height: '3rem' }}>
                        <ListItemIcon>
                          <ArticleTwoToneIcon sx={{ height: '3rem', width: '6rem' }} />
                        </ListItemIcon>
                        <ListItemText primary="File name.doc" secondary="128 KB" />
                        <MoreVertTwoToneIcon />
                      </ListItem>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ mt: '1rem' }} />
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold">Correspondence Address</Typography>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar src="/broken-image.jpg" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      James Carter
                    </Typography>
                    <Typography variant="body2">james.carter@example.com</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem' }}>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>(567) 890-1234</Typography>
                  <Typography>Phone number</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>United States</Typography>
                  <Typography>Country</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Florida</Typography>
                  <Typography>State</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Miami</Typography>
                  <Typography>City</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>33101</Typography>
                  <Typography>Zip</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* MakeOffer component starts here */}
        {/* <Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '16px',
              border: '1px solid #ccc',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              borderRadius: '24px',
              maxHeight: '450px',
            }}
          >
            <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Make Offer
            </Typography>
            <Typography className='label' style={{ fontWeight: 'bold' }}>
              Offer Type
            </Typography>
            <Select
              defaultValue=""
              fullWidth
              displayEmpty
              style={{ marginBottom: '16px' }}
              onChange={this.handleSelectChange}
            >
              <MenuItem value="">
                Select offer type
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </Select>
            <Typography className="label" style={{ fontWeight: 'bold' }}>Enter purchase amount</Typography>
            <TextField
              label="Enter purchase amount"
              name="purchaseAmount"
              type="number"
              value={purchaseAmount}
              onChange={this.handleInputChange}
              fullWidth
              style={{ height: '40px' }}
            />
            <TextField
              label="Additional Info"
              name="additionalInfo"
              multiline
              rows={4}
              value={additionalInfo}
              onChange={this.handleInputChange}
              fullWidth
            />
            <Button variant="contained" onClick={this.handleSubmit}>
              Make Offer
            </Button>
          </Box>
        </Box> */}
      </Box>
    );
  }
}

export default MedicalDebt;

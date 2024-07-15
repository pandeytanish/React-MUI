import { Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import GroupImage from '../Verification Flow/group_ .png'

export default class VerificationFirst extends Component {
  render() {
    return (
      <Box sx={{height : '100vh',width : '100%',border: '6px solid green', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
        <Box sx={{display : 'flex',gap : '20px', border : '2px solid red', flexDirection : 'column',alignItems : 'center',height : '328px', width : '287px'}}>
            <img style={{height : "158px", width : '150px', display : 'flex'}} src={GroupImage}></img>
            <Typography sx={{fontSize : '18px', fontWeight : '500',textAlign : 'center', color : '#000000'}}>You've never made a Verification Request yet. Make Verification Requests now.</Typography>
        <Button sx={{display : 'flex', gap : '8px', padding : '10px 16px 10px 16px', backgroundColor :'#1E3A8A',borderRadius : '8px', color : '#FFFFFF', fontSize : '14px', fontWeight : '700', textTransform :'none'}}>Request New Verification</Button>
        </Box>
      </Box>
    )
  }
}

import React, { Component } from 'react'
import { Box,Typography } from '@mui/material'

export default class ProfileCardHover extends Component {
  render() {
    return (
        <Box
      sx={{
        height: 270,
        width: 300,
        backgroundColor: 'lightgray',
        overflow: 'hidden',
        transition: 'height 0.3s ease',
        position: 'relative',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          padding: 2,
          cursor: 'pointer',
          '&:hover + .expandable-box': {
            height: 400, // Expand the box height when hovering over the text
          },
        }}
      >
        Hover over this text 
      </Typography>
      <Box
        className="expandable-box"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 'inherit',
          pointerEvents: 'none',
          zIndex: -1,
          transition: 'height 0.3s ease',
        }}
      />
    </Box>

    )
  }
}

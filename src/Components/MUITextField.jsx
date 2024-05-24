import { Stack } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
function MUITextField() {
  
  const [value,setValue] = useState ('')  
  return (
    <Stack spacing={4}>
    <Stack direction={'row'} spacing={2}>
        <TextField label='Name' variant='filled'/>
        <TextField label='Name' variant='standard'/>
        <TextField label='Name' variant='outlined'/>

        <TextField label= 'Password' 
         required  
         value={value} onChange={e => setValue(e.target.value)} 
        Z error={!value} helperText={!value ? 'Required' : "Hello world"}   / >


    </Stack>
    </Stack>
  )
}


export default MUITextField
import React from 'react'
import { Typography } from '@mui/material'

function MUITypography() {
  return (
  <>
  {/* Heading */}
  <Typography variant='h1' > Hello </Typography>
  <Typography variant='h2' > Hello </Typography>
  <Typography variant='h3' component='h1' gutterBottom > Hello </Typography>
  <Typography variant='h4' > Hello </Typography>
  <Typography variant='h5' > Hello </Typography>
  <Typography variant='h6' > Hello </Typography>

  {/* Sub Title */}
  <Typography variant='subtitle1' > Hello </Typography>
  <Typography variant='subtitle2' > Hello </Typography>

  {/* Body tag */}
  <Typography variant='body1' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam suscipit ipsam sed voluptate corrupti cum delectus nam aut amet necessitatibus iusto non et aspernatur neque voluptates, saepe placeat minus eligendi. </Typography>
  <Typography variant='body2' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nostrum ex quas doloribus nobis animi quasi qui amet quod similique. Enim culpa repellat expedita deleniti cupiditate dolore, adipisci quas reiciendis! </Typography>
  </>
  )
}

export default MUITypography
import React, { Component } from 'react'

export default class userProfileDrawer extends Component {
  render() {
    return (
      <Box sx={{ backgroundColor : '#EFF6FF'}}>
      <Container sx={{ padding : '80px 120px 80px 120px',display : 'flex', flexDirection : 'column', gap : '44px'}}>
       <Typography  align="center" sx={{fontWeight : '600', fontSize : '30px', marginBottom : ''}} >
         What Debt Buyers should look out for
       </Typography>
       <Grid container spacing={3}>
         <Grid item xs={12} md={4}>
           <Paper elevation={3} style={{ padding: '40px', borderRadius : '24px', textAlign : 'center' }}>
             <Typography sx={{fontWeight : '600', fontSize : '24px'}} gutterBottom>
               Type of Debts to Buy
             </Typography>
             <Typography sx={{fontWeight : '400', fontSize : '14px', color :'#475569'}}>
               Selecting the right type of debts, such as credit card debts, medical bills, or utility bills, is crucial.
             </Typography>
           </Paper>
         </Grid>
         <Grid item xs={12} md={4}>
           <Paper elevation={3} style={{ padding: '40px' , borderRadius : '24px' , textAlign : 'center' }}>
             <Typography sx={{fontWeight : '600', fontSize : '24px', whiteSpace : 'nowrap'}} gutterBottom>
               Assessing Debt Portfolios
             </Typography>
             <Typography sx={{fontWeight : '400', fontSize : '14px',color :'#475569'}}>
               Evaluating the potential profitability of debt portfolios by analyzing historical data on recovery rates.
             </Typography>
           </Paper>
         </Grid>
         <Grid item xs={12} md={4}>
           <Paper elevation={3} style={{ padding: '40px' , borderRadius : '24px' , textAlign : 'center' }}>
             <Typography sx={{fontWeight : '600', fontSize : '24px'}} gutterBottom>
               Legal Considerations
             </Typography>
             <Typography sx={{fontWeight : '400', fontSize : '14px',color :'#475569'}}>
               Ensuring all debt buying activities align with state laws and regulations enforced by bodies like CFPB.
             </Typography>
           </Paper>
         </Grid>
       </Grid>
     </Container>
     </Box>
    )
  }
}

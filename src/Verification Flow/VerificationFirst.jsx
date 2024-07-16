import { Box, Button, Typography, Modal, IconButton, Divider,TextField,MenuItem } from '@mui/material'
import React, { Component } from 'react'
import GroupImage from '../Verification Flow/group_ .png'
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Sucess from '../Verification Flow/image_verified.png'

const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledModal2 = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledModal3 = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const ModalContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    boxShadow: 24,
    padding: theme.spacing(4),
    textAlign: 'left',
    height : '300px',
    width : '560px',
}));

const ModalContent2 = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    boxShadow: 24,
    padding: theme.spacing(4),
    textAlign: 'left',
    height : '622px',
    width : '560px',
}));

const ModalContent3 = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    boxShadow: 24,
    padding: theme.spacing(4),
    textAlign: 'left',
    height : '521px',
    width : '686px',
    padding : '40px'
}));


const CloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
}));


export default class VerificationFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isFirstModalOpen: false,
          isSecondModalOpen: false,
          isThirdModalOpen: false,
        };
      }
    
      handleFirstModalOpen = () => {
        this.setState({ isFirstModalOpen: true });
      };
    
      handleFirstModalClose = () => {
        this.setState({ isFirstModalOpen: false });
      };
    
      handleSecondModalOpen = () => {
        console.log("button clicked")
        this.setState({ isFirstModalOpen: false, isSecondModalOpen: true });
      };
    
      handleSecondModalClose = () => {
        this.setState({ isSecondModalOpen: false });
      };

      handleThirdModalOpen = () => {
        this.setState({ isSecondModalOpen: false, isThirdModalOpen: true });
      };
    
      handleThirdModalClose = () => {
        this.setState({ isThirdModalOpen: false });
      };
    
      render() {
        const { isFirstModalOpen, isSecondModalOpen, isThirdModalOpen } = this.state;
        return (
            <Box sx={{ height: '100vh', width: '100%', border: '6px solid green', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center', height: '328px', width: '287px' }}>
                    <img style={{ height: "158px", width: '150px', display: 'flex' }} src={GroupImage}></img>
                    <Typography sx={{ fontSize: '18px', fontWeight: '500', textAlign: 'center', color: '#000000' }}>You've never made a Verification Request yet. Make Verification Requests now.</Typography>
                    <Button variant='contained' onClick={this.handleFirstModalOpen} sx={{ display: 'flex', gap: '8px', padding: '10px 16px 10px 16px', backgroundColor: '#1E3A8A', borderRadius: '8px', color: '#FFFFFF', fontSize: '14px', fontWeight: '700', textTransform: 'none' }}>Request New Verification</Button>
                </Box>

                <StyledModal
                    open={isFirstModalOpen}
                    onClose={this.handleFirstModalClose}
                    closeAfterTransition
                BackdropProps={{ timeout: 500 }}
                >
                    <ModalContent>
                        <CloseButton onClick={this.handleFirstModalClose}>
                            <CloseIcon />
                        </CloseButton>
                        <Typography sx={{fontSize : '20px', fontWeight : '700', color : '#0F172A'}}>
                            Upgrade to Access Verification Requests
                        </Typography>
                        <Typography sx={{ fontSize : '14px', fontWeight : '400', color : '#475569', marginTop : '12px' }}>
                            To make verification requests and access premium features, please choose a subscription plan. Get unlimited business checks, real-time updates, and priority support with our Yearly Subscription, or opt for a Single Use Verification for one-time needs.
                        </Typography>
                        <Divider sx={{marginTop : '24px'}}/>
                        <Box sx={{display : 'flex',justifyContent : 'left', gap : '16px', width : '560px', marginTop : '24px'}}>
                        <Button onClick={this.handleSecondModalOpen} sx={{display : 'flex',gap : '8px',padding :'16px', borderRadius : '8px', backgroundColor :'#EFF6FF',fontSize : '14px', fontWeight : '700', color : '#0F172A', height : '56px', textTransform :'none', marginLeft : '44px'}} variant="contained" >
                            Continue with basic plan
                        </Button>
                        <Button sx={{display : 'flex',gap : '8px',padding :'16px', borderRadius : '8px', backgroundColor :'#1E3A8A',fontSize : '14px', fontWeight : '700', color : '#FFFFFF', height : '56px', textTransform :'none'}} variant="contained">
                            Go to plan section
                        </Button>
                        </Box>
                    </ModalContent>
                </StyledModal>

                <StyledModal2
          open={isSecondModalOpen}
          onClose={this.handleSecondModalClose}
          closeAfterTransition
          BackdropProps={{ timeout: 500 }}
        >
          <ModalContent2>
            <CloseButton onClick={this.handleSecondModalClose}>
              <CloseIcon />
            </CloseButton>
            <Typography sx={{fontSize : '24px', fontWeight : '700', color : '#0F172A'}}>
              Request New Verification
            </Typography>
            <Box sx={{display : 'flex', flexDirection : 'column', gap : '24px', padding : '0px 40px 0px 40px'}}>
            <Typography sx={{ fontSize : '14px', fontWeight : '400', color : '#64748B' }}>
              *The verification request is completely anonymous
            </Typography>
            <Box sx={{display : 'flex',flexDirection : 'column', gap : '4px'}}>
            <Typography sx={{fontSize : '14px', fontWeight : '700', color :'#334155'}}>Name of the entity</Typography>
            <TextField sx={{ display : 'flex', gap : '8px', borderRadius : '8px'}} fullWidth placeholder='Name of the entity' variant="outlined" />
            </Box>
            <Box sx={{display : 'flex',flexDirection : 'column', gap : '4px'}}>
            <Typography sx={{fontSize : '14px', fontWeight : '700', color :'#334155'}}>Registration number</Typography>
            <TextField sx={{ display : 'flex', gap : '8px', borderRadius : '8px'}} fullWidth placeholder='Registration number' variant="outlined" />
            </Box>
            <Box sx={{display : 'flex',flexDirection : 'column', gap : '4px'}}>
            <Typography sx={{fontSize : '14px', fontWeight : '700', color :'#334155'}}>Type of entity</Typography>
            <TextField fullWidth select value="Registration number" variant="outlined">
              <MenuItem value="Type1">Type 1</MenuItem>
              <MenuItem value="Type2">Type 2</MenuItem>
            </TextField>
            </Box>
            <Box sx={{display : 'flex',flexDirection : 'column', gap : '4px'}}>
            <Typography sx={{fontSize : '14px', fontWeight : '700', color :'#334155'}}>Additional details</Typography>
            <TextField fullWidth placeholder='Additional details' variant="outlined"/>
            </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between',padding : '24px', gap : '16px' }}>
              <Button sx={{height : '56px',width : '248px', padding : '16px', borderRadius : '8px',backgroundColor :'#EFF6FF', fontSize :'14px', fontWeight : '700', color :'#0F172A',textTransform :'none'}} onClick={this.handleSecondModalClose} variant='outlined'>
                Cancel
              </Button>
              <Button onClick={this.handleThirdModalOpen} sx={{height : '56px',width : '248px', padding : '16px', borderRadius : '8px',backgroundColor :'#1E3A8A', fontSize :'14px', fontWeight : '700', color :'#FFFFFF', whiteSpace : 'nowrap',textTransform :'none'}} variant="contained" >
                Request verification
              </Button>
            </Box>
          </ModalContent2>
        </StyledModal2>

        <StyledModal3
          open={isThirdModalOpen}
          onClose={this.handleThirdModalClose}
          closeAfterTransition
          BackdropProps={{ timeout: 500 }}
        >
          <ModalContent3>
            <CloseButton onClick={this.handleThirdModalClose}>
              <CloseIcon />
            </CloseButton>
            <Box sx={{display : 'flex', flexDirection : 'column', alignItems : 'center', gap : '24px'}}>
             <img style={{height : '120px', width : '120px'}} src={Sucess}/>
            <Typography  sx={{ fontSize : '30px', fontWeight : '700', color :'#0F172A', textAlign : 'center' }}>
              Verification Request Submitted Successfully
            </Typography>
            <Typography sx={{fontSize : '18px',fontWeight : '400', color : '#475569', textAlign : 'center'}}>
              Your request is under review by the business. Once they confirm, you will get the documents in the request section of your profile.
            </Typography>
            <Button variant="contained" sx={{padding : '16px', backgroundColor : '#1E3A8A', borderRadius : '8px', fontSize : '14px', fontWeight : '700', color :'#FFFFFF', textTransform :'none'}} onClick={this.handleThirdModalClose}>
              Go to Requests
            </Button>
            </Box>
          </ModalContent3>
        </StyledModal3>


            </Box>
        )
    }
}

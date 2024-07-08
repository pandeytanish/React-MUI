import React from 'react';
import { Box, Typography, Link, Chip, Divider } from '@mui/material';

const BuyerCard = () => {
    return (
        <Box
            style={{display: 'flex',justifyContent: 'center',alignItems: 'center',padding: '2rem',background: '#f6f6f6',}}>
            <Box
                style={{display: 'flex', flexDirection: 'column',gap : '24px',alignItems: 'flex-start',padding: '40px',width: '895px',background: 'white',borderRadius: '24px',boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                <Box style={{ display: 'flex', gap : '12px', alignItems : 'center' }}>
                    <Box style={{}}>
                        <img src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" alt="Company Logo"
                            style={{
                                width: '100px',
                                height: '100px',
                                border : '2px solid #DBEAFE',
                                borderRadius : '100px'
                            }}
                        />
                    </Box>
                    <Box>
                        <Typography  style={{fontWeight: '700',fontSize: '24px', color : '#0F172A'}}>
                            Apex Financial Solutions
                        </Typography>
                        <Link
                            href="http://www.apexfinancialsolutions.com"
                            style={{ fontSize : '16px', fontWeight : '400' , color: '#334155' }}
>
                            www.apexfinancialsolutions.com
                        </Link>
                    </Box>
                </Box>
                <Divider style={{ width: '100%', backgroundColor : '#E2E8F0' }} />
                <Box style={{display : 'flex',flexDirection : 'column', gap : '24px',paddingTop : '40px'}}>
                <Typography
                    style={{fontWeight: '600',fontSize: '20px'}}>
                    Services offered
                </Typography>
                <Box
                    style={{display: 'flex',flexWrap: 'wrap',gap: '12px'}}
                >
                    <Chip label="Financial Consultation" style={{padding : '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500', color : '#334155'}} />
                    <Chip label="Debt Collection Services" style={{padding : '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500', color : '#334155'}} />
                    <Chip label="Business Valuation" style={{padding : '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500', color : '#334155'}} />
                    <Chip label="Risk Management" style={{padding : '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500', color : '#334155'}}/>
                    <Chip label="Market Research and Analysis" style={{padding : '8px 16px 8px 16px', backgroundColor : '#E2E8F0', fontSize : '14px', fontWeight : '500', color : '#334155'}} />
                </Box>
                </Box>
                
            </Box>
        </Box>
    );
};

export default BuyerCard;

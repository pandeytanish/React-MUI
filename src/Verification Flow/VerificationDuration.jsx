import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box, IconButton } from '@mui/material';
import { Description as DescriptionIcon, MoreVert as MoreVertIcon, Warning as WarningIcon } from '@mui/icons-material';

const VerificationDuration = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Box sx={{ width: '385px', padding: '28px', border: '2px solid black', display: 'flex', flexDirection: 'column', gap: '4px', borderRadius: '18px', justifyContent: 'left', alignItems: 'self-start' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: '600', color: '#1E293B' }} >
                    Verification Timeline
                </Typography>

                <Timeline sx={{ marginLeft: '-50px', display: 'flex', flexDirection: 'column', gap: '24px' }} position="right">
                    <TimelineItem >
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '24px', height: '24px', backgroundColor: '#EFF6FF', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                <Typography sx={{ color: '#1D4ED8', fontSize: '14px', fontWeight: '500' }}>1</Typography></TimelineDot>
                            <TimelineConnector sx={{ marginBottom: '-40px', marginTop: '-10px', width: '1px' }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#475569' }}>
                                22 Feb 2022
                            </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#1E293B', width: '250px' }}>
                                Initial request submitted by user
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '24px', height: '24px', backgroundColor: '#EFF6FF', padding: '4px', color: '#1D4ED8', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >2</TimelineDot>
                            <TimelineConnector sx={{ marginBottom: '-40px', marginTop: '-10px', width: '1px' }} />
                        </TimelineSeparator>
                        <TimelineContent >
                            <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#475569' }}>
                                26 Feb 2022
                            </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#1E293B', width: '250px' }}>
                                Company has accepted the verification request.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '24px', height: '24px', backgroundColor: '#EFF6FF', padding: '4px', color: '#1D4ED8', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >3</TimelineDot>
                            <TimelineConnector sx={{ marginBottom: '-40px', marginTop: '-10px', width: '1px' }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#475569' }}>
                                26 Feb 2022
                            </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#1E293B', width: '250px' }}>
                                Business details verified. Request rejected by admin.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '24px', height: '24px', backgroundColor: '#EFF6FF', padding: '4px', color: '#1D4ED8', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >4</TimelineDot>
                            <TimelineConnector sx={{ marginBottom: '-40px', marginTop: '-10px', width: '1px' }} />
                        </TimelineSeparator>
                        <TimelineContent >
                            <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#475569' }}>
                                26 Feb 2022
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px', width: '250px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, border: '2px solid red', borderRadius: '8px', padding: '8px 4px 8px 8px', width: '230px' }}>
                                    <DescriptionIcon color="action" />
                                    <Box sx={{ ml: 1 }}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#0F172A' }}>File name.doc</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#64748B' }}>128 KB</Typography>
                                    </Box>
                                    <IconButton size="small" sx={{ ml: 'auto' }}>
                                        <MoreVertIcon />
                                    </IconButton>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px 4px 8px 8px', border: '2px solid red', borderRadius: '8px', width: '230px' }}>
                                    <DescriptionIcon color="action" />
                                    <Box sx={{ ml: 1 }}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#0F172A' }}>File name.doc</Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '400', color: '#64748B' }} >128 KB</Typography>
                                    </Box>
                                    <IconButton size="small" sx={{ ml: 'auto' }}>
                                        <MoreVertIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ marginLeft: '8px' }}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <WarningIcon sx={{ marginRight: 1 }} />
                                    High Risk Business
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '24px', height: '24px', backgroundColor: '#EFF6FF', padding: '4px', color: '#1D4ED8', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >5</TimelineDot>
                            <TimelineConnector sx={{ marginBottom: '-40px', marginTop: '-10px', width: '1px' }} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#475569' }}>
                                30 Feb 2024
                            </Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#1E293B', width: '250px' }}>
                                Initial request submitted by user
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
    );
};

export default VerificationDuration;

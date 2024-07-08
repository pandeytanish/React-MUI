import React from 'react';
import { Typography, Link, Chip, Divider } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: #f6f6f6;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    padding: 40px;
    width: 895px;
    background: white;
    border-radius: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
    border: 2px solid #DBEAFE;
    border-radius: 100px;
`;

const Title = styled(Typography)`
    font-weight: 700;
    font-size: 24px;
    color: #0F172A;
`;

const StyledLink = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    color: #334155;
`;

const StyledDivider = styled(Divider)`
    width: 100%;
    background-color: #E2E8F0;
`;

const Services = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 40px;
`;

const ServicesTitle = styled(Typography)`
    font-weight: 600;
    font-size: 20px;
`;

const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const StyledChip = styled(Chip)`
    padding: 8px 16px;
    background-color: #E2E8F0;
    font-size: 14px;
    font-weight: 500;
    color: #334155;
`;

const CardDesign = () => {
    return (
        <Container>
            <Card>
                <Header>
                    <Logo src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" alt="Company Logo" />
                    <div>
                        <Title>
                            Apex Financial Solutions
                        </Title>
                        <StyledLink href="http://www.apexfinancialsolutions.com">
                            www.apexfinancialsolutions.com
                        </StyledLink>
                    </div>
                </Header>
                <StyledDivider />
                <Services>
                    <ServicesTitle>
                        Services offered
                    </ServicesTitle>
                    <ChipContainer>
                        <StyledChip label="Financial Consultation" />
                        <StyledChip label="Debt Collection Services" />
                        <StyledChip label="Business Valuation" />
                        <StyledChip label="Risk Management" />
                        <StyledChip label="Market Research and Analysis" />
                    </ChipContainer>
                </Services>
            </Card>
        </Container>
    );
};

export default CardDesign;

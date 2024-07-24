import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import image from './blog_image.png'
import BlogImage from './blog_image.png'




const ArticleDetails = () => {
  return (
    <Box style={{ padding: '40px' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-around', height: '240px' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '549px' }}>
          <Box style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Typography style={{ backgroundColor: '#DBEAFE', padding: '6px 12px 6px 12px', color: '#1D4ED8', fontSize: '14px', fontWeight: 400, borderRadius: '26px' }}>
              Debt Collection Strategies
            </Typography>
            <Typography style={{ fontSize: '14px', fontWeight: 400, color: '#64748B' }}>17 Jan, 2024</Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: '36px', fontWeight: 600, color: '#0F172A' }}>5 Strategies for Effective Debt Collection in 2024</Typography>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Avatar style={{ height: '48px', width: '48px', border: '1px solid black', borderRadius: '50px' }} src={image} />
            <Box>
              <Typography style={{ fontSize: '14px', fontWeight: 600, color: '#334155' }}>
                Nick Garre
              </Typography>
              <Typography style={{ fontSize: '14px', fontWeight: 400, color: '#64748B' }}>
                Debt Collection Specialist
              </Typography>
            </Box>
          </Box>


        </Box>
        <Box style={{ height: '240px', width: '585px' }}>
          <img style={{ height: '240px', width: '585px' }} src={image} />
        </Box>
      </Box>

      <Box style={{display : 'flex', border : '2px solid black', gap : '20px', justifyContent : 'space-around'}}>
        <Box style={{height : '464px', width : '246px', border : '1px solid red'}}></Box>
        <Box style={{width : '895px', border : '1px solid yellow',display : 'flex',flexDirection : 'column',gap : '44px'}}>
          <Box>
            <Typography style={{fontSize : '24px', fontWeight : 600, color : '#101828'}}>Introduction</Typography>
            <Typography style={{fontSize : '16px', fontWeight : 400, color : '#344054'}}>In the ever-evolving landscape of debt collection, staying ahead of the curve is essential for success. As we navigate the challenges of 2024, debt collection professionals must adapt their strategies to meet the changing needs of creditors and debtors alike. Here are five key strategies to enhance your debt collection efforts in 2024.</Typography>
          </Box>
          <Box>
            <Typography style={{fontSize : '24px', fontWeight : 600, color : '#101828'}}>Embrace Technology and Automation</Typography>
            <Typography style={{fontSize : '16px', fontWeight : 400, color : '#344054'}}>Embracing technology and automation can streamline your debt collection processes and improve efficiency. Utilize advanced software solutions for debtor communication, payment tracking, and reporting. Automated reminders and follow-ups can help you stay organized and ensure timely payments.</Typography>
          </Box>
       
          <Box>
            <Typography style={{fontSize : '24px', fontWeight : 600, color : '#101828'}}>Prioritize Customer Engagement and Communication</Typography>
            <Typography style={{fontSize : '16px', fontWeight : 400, color : '#344054'}}>Entering the real estate market as a first-time buyer can feel like stepping into uncharted territory. That's why it's essential to arm yourself with knowledge and information to navigate the process confidently. From understanding mortgage options to researching neighborhoods and negotiating offers, being informed empowers you to make smart decisions and avoid common pitfalls along the way. With the right resources and guidance, you can approach the home buying process with clarity and peace of mind, knowing that you're making choices that align with your goals and aspirations.</Typography>
          </Box>
          <Box>
            <Typography style={{fontSize : '24px', fontWeight : 600, color : '#101828'}}>Implement Data-Driven Decision Making</Typography>
            <Typography style={{fontSize : '16px', fontWeight : 400, color : '#344054'}}>Leverage data analytics to gain insights into debtor behavior, payment patterns, and collection trends. Analyze historical data to identify opportunities for improvement and optimize your collection strategies. Data-driven decision-making enables you to prioritize high-value debts, allocate resources effectively, and maximize your collection efforts.</Typography>
          </Box>
          <Box>
            <Typography style={{fontSize : '24px', fontWeight : 600, color : '#101828'}}>Summary</Typography>
            <Typography style={{fontSize : '16px', fontWeight : 400, color : '#344054'}}>By implementing these strategies, debt collection professionals can enhance their effectiveness and achieve better outcomes in 2024. Embracing technology, prioritizing customer engagement, leveraging data analytics, offering flexible payment options, and investing in training and development are key pillars of successful debt collection in the modern era. With a proactive approach and a commitment to excellence, debt collection professionals can navigate the challenges of 2024 with confidence and achieve their collection goals..</Typography>
          </Box>
        </Box>
      </Box>

      <Box style={{padding : '40px', display : 'flex', flexDirection : 'column', gap : '40px'}}>
        <Box>
          <Typography style={{fontSize : '30px', fontWeight : 600, color :'#0F172A'}}>You may also like</Typography>
        </Box>

        <Box style={{display : 'flex', justifyContent :'space-between'}}>
        <Box style={{ position: 'relative',height : '438px', width : '387px', borderRadius : '26px', border : 'none'}}>
    <Box
      style={{ height :"280px",width :'387px',backgroundImage : `url(${BlogImage})`, backgroundPosition : 'center', backgroundSize : 'contain'}}
    />
    <Box style={{  position: 'absolute',top: 8,left: 8,backgroundColor: '#DBEAFE',color: 'white',padding: '6px 12px 6px 12px',borderRadius: '4px',color : '#1D4ED8',fontSize : '14px',fontWeight : 400,borderRadius : '26px'}}>
        Debt Collection Strategies
        </Box>
    <Box style={{display : 'flex', flexDirection :'column', gap : '6px',marginTop : '12px'}}>
      <Typography style={{display : 'flex', gap : '8px', fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
      Jan 17, 2024 • 7 min read
      </Typography>
      <Typography style={{fontSize : '18px', fontWeight : 600, color : '#101828'}}>
      5 Strategies for Effective Debt Collection in 2024
      </Typography>
      <Box style={{  display: 'flex',alignItems: 'center',gap : '6px'}}>
        <Avatar style={{ height : '48px', width : '48px' , border : '1px solid black', borderRadius : '50px' }} src={image} /> 
        <Box>
          <Typography style={{fontSize : '14px', fontWeight : 600, color : '#334155'}}>
          Nick Garre
          </Typography>
          <Typography style={{fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
          Debt Collection Specialist
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>


  <Box style={{ position: 'relative',height : '438px', width : '387px', borderRadius : '26px', border : 'none'}}>
    <Box
      style={{ height :"280px",width :'387px',backgroundImage : `url(${BlogImage})`, backgroundPosition : 'center', backgroundSize : 'contain'}}
    />
    <Box style={{  position: 'absolute',top: 8,left: 8,backgroundColor: '#DBEAFE',color: 'white',padding: '6px 12px 6px 12px',borderRadius: '4px',color : '#1D4ED8',fontSize : '14px',fontWeight : 400,borderRadius : '26px'}}>
        Debt Collection Strategies
        </Box>
    <Box style={{display : 'flex', flexDirection :'column', gap : '6px',marginTop : '12px'}}>
      <Typography style={{display : 'flex', gap : '8px', fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
      Jan 17, 2024 • 7 min read
      </Typography>
      <Typography style={{fontSize : '18px', fontWeight : 600, color : '#101828'}}>
      5 Strategies for Effective Debt Collection in 2024
      </Typography>
      <Box style={{  display: 'flex',alignItems: 'center',gap : '6px'}}>
        <Avatar style={{ height : '48px', width : '48px' , border : '1px solid black', borderRadius : '50px' }} src={image} /> 
        <Box>
          <Typography style={{fontSize : '14px', fontWeight : 600, color : '#334155'}}>
          Nick Garre
          </Typography>
          <Typography style={{fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
          Debt Collection Specialist
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>

  <Box style={{ position: 'relative',height : '438px', width : '387px', borderRadius : '26px', border : 'none'}}>
    <Box
      style={{ height :"280px",width :'387px',backgroundImage : `url(${BlogImage})`, backgroundPosition : 'center', backgroundSize : 'contain'}}
    />
    <Box style={{  position: 'absolute',top: 8,left: 8,backgroundColor: '#DBEAFE',color: 'white',padding: '6px 12px 6px 12px',borderRadius: '4px',color : '#1D4ED8',fontSize : '14px',fontWeight : 400,borderRadius : '26px'}}>
        Debt Collection Strategies
        </Box>
    <Box style={{display : 'flex', flexDirection :'column', gap : '6px',marginTop : '12px'}}>
      <Typography style={{display : 'flex', gap : '8px', fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
      Jan 17, 2024 • 7 min read
      </Typography>
      <Typography style={{fontSize : '18px', fontWeight : 600, color : '#101828'}}>
      5 Strategies for Effective Debt Collection in 2024
      </Typography>
      <Box style={{  display: 'flex',alignItems: 'center',gap : '6px'}}>
        <Avatar style={{ height : '48px', width : '48px' , border : '1px solid black', borderRadius : '50px' }} src={image} /> 
        <Box>
          <Typography style={{fontSize : '14px', fontWeight : 600, color : '#334155'}}>
          Nick Garre
          </Typography>
          <Typography style={{fontSize : '14px', fontWeight : 400, color : '#64748B'}}>
          Debt Collection Specialist
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleDetails;

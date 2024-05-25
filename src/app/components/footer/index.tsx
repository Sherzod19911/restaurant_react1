import { Container, Stack, Box } from '@mui/material';
import React from 'react';

export function Footer () {
  return (
  <div className="footer_config">
    <Container >
      <Stack className="main_footer_container">
         <div>
        <div className={"section-head"}>
          
        </div>
        </div>
        <Stack flexDirection={'row'} style={{height: '243px'}}>
      
          
          <Stack className='parts'>
            <Box className='parts_subject'>Bo'limlar</Box>
            <Box className='divider'></Box>
            <Box className='targets'>Home <br/>About us <br/> Services <br/> Team  <br/>Blog</Box>
          </Stack>

         
          <Stack className='find_us'>    
            <Box className='find'>
            Our Services
            </Box>
            <Box className='divider'></Box>
            <Stack className='details' sx={{mt: '42px'}}>
            <Box className='detail_second'>Faq</Box>
            <Box className='detail_second'>Shop</Box>
            <Box className='detail_second'>Category Filter</Box>
            <Box className='detail_second'>Testimonids</Box>
            <Box className='detail_second'>Contact Us</Box>
            </Stack>
        </Stack>

          <Stack className='find_us'>    
            <Box className='find'>
            Help Center
            </Box>
            <Box className='divider'></Box>
            <Stack className='details' sx={{mt: '42px'}}>
            <Box className='detail_second'>Home</Box>
            <Box className='detail_second'>About Us</Box>
            <Box className='detail_second'>Services</Box>
            <Box className='detail_second'>Team</Box>
            <Box className='detail_second'>Blog</Box>
            </Stack>
        </Stack>
        </Stack>
        <Box className='liner'></Box>
        <Box className='copyrights'>Copyright Restaurant 2024, All right reserved.</Box>
      </Stack>
    </Container>
  </div>
  )
}
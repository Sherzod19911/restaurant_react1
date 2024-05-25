import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";

export function ContactPage() {
    return (
    <div style={{width: "100%", height: "auto", backgroundColor:"#fff"}}>
    <Container >
    <Stack style={{width: "1500px", height: "1038px", border: "1px solid green", backgroundColor:"#F4FDE7",marginLeft:"210", marginTop:"100px"}}>
   
    <Stack sx={{width: "1170px",height: "271px",border: "1px solid black",marginLeft: "165px",display: "flex",flexDirection: "row", justifyContent: "space-between"}}>
    
     <Box sx={{width: "270px", height: "270px",backgroundColor:"#FFFFFF",border: "1px solid black"}}>
      <Box sx={{width:"114px", height: "114px",marginLeft:"78px", borderRadius: "50%" ,backgroundColor:"#fff",border:"1px solid red"}}>
        <Box style={{width: "50px",height:"50px",marginLeft:"32px",backgroundColor: "#fff",marginTop: "34.5px", border: "1px solid black",display: "flex",justifyContent:"center", alignItems: "center"}}>
          <img src="/restaurant/union-1.jpg"/>
        </Box>
        
      </Box>
      <Box sx={{width:"270px",height: "214px",backgroundColor:"#F4FDE7",border: "1px solid red",marginTop: "-50px"}}>

        </Box>
     </Box>

     <Box sx={{width: "270px", height: "270px",backgroundColor:"#FFFFFF", border: "1px solid black"}}>
     </Box>
     <Box sx={{width: "270px", height: "270px",backgroundColor:"#FFFFFF",border: "1px solid black"}}>
     </Box>
     <Box sx={{width: "270px", height: "270px",backgroundColor:"#FFFFFF",border: "1px solid black"}}>
     </Box>
    </Stack>

    <Stack  sx={{width: "1500px",height: "870px",border: "1px solid black"}}>
     <Box  sx={{width: "270px", height: "75px",border: "1px solid green",marginLeft: "615px",marginTop: "85px",display: "flex", alignItems: "center", justifyContent: "center"}}>
       <div> <h1 style={{padding:"2px"}}>Reservation</h1></div>
     </Box>
     <Box  sx={{width: "1170px", height: "358px", marginTop: "36px",marginLeft: "165px",border: "1px solid green"}}>

     </Box>
     <Button style={{width:"161px", height: "55px",marginTop: "85px",marginLeft:"669px", border:"1px solid black", backgroundColor: "#F4FDE7"}}>Book a Table</Button>
    </Stack>

  

    </Stack>

    </Container>
    </div>            
    )
}
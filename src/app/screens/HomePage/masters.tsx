import { Box, Card, CardContent, Container, Stack } from "@mui/material";
import React from "react";
import Typography from "../../MaterialTheme/typography";
export function Masters () {
    return(
        <div style={{width: "1920px", height: "689px", border: "1px solid green", backgroundColor: "#F4FDE7"}}>
            <Box sx={{ width: "295px", height: "75px" ,Font: "lobster",marginLeft: "812px",marginTop: "86px", backgroundColor: "#F4FDE7",display: "flex", alignItems: "center",justifyContent: "center" }}>
             <h1>Master Chefs</h1>
            </Box>
            <Box sx={{ flexDirection:"row", width: "1394px", height: "388px",marginLeft: "264px",marginTop: "40px", backgroundColor: "#F4FDE7"}}>
            <Stack  flexDirection={"row"} width={"1170px"} height={"388px"} marginLeft={"110px"} justifyContent={"space-between"}>
           
           

                                   
                            

                                   <Card sx={{ minHeight: 350,   
                                width: 270, borderRadius: "10px",    
                                    cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"300px"}} src="/restaurant/chef1.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                             <Box sx={{display: "flex", flexDeriction: "row",justifyContent: "space-around"}}>
                                               <Box  sx={{marginTop: "10px"}} >
                                              
                                              <div>John doe</div>
                                              <div style={{color: "#7DA640"}}>karalina  Doctoraova</div>
   
                                                </Box> 
                                                <Box sx={{justifyContent: "flex-end"}}>
                                                <img src="/restaurant/share1.jpg" style={{width: "30px", height: "30px",backgroundColor: "#7da640",marginTop: "25px", border:"1px solid green" }}/>
                                                </Box>
                                             </Box>
           
                                   </Card>   

                                   <Card sx={{ minHeight: 350,   
                                width: 270,     
                                 cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"300px"}} src="/restaurant/chef.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                             <Box sx={{display: "flex", flexDeriction: "row",justifyContent: "space-around"}}>
                                               <Box  sx={{marginTop: "10px"}} >
                                              
                                              <div>John doe</div>
                                              <div style={{color: "#7DA640"}}>karalina  Doctoraova</div>
   
                                                </Box> 
                                                <Box sx={{justifyContent: "flex-end"}}>
                                                <img src="/restaurant/share1.jpg" style={{width: "30px", height: "30px",backgroundColor: "#7da640",marginTop: "25px", border:"1px solid green" }}/>
                                                </Box>
                                             </Box>
           
                                   </Card>   

                                   <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "px", border: "1px solid white", cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"300px"}} src="/restaurant/chef1.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                             <Box sx={{display: "flex", flexDeriction: "row",justifyContent: "space-around"}}>
                                               <Box  sx={{marginTop: "10px"}} >
                                              
                                              <div>John doe</div>
                                              <div style={{color: "#7DA640"}}>karalina  Doctoraova</div>
   
                                                </Box> 
                                                <Box sx={{justifyContent: "flex-end"}}>
                                                <img src="/restaurant/share1.jpg" style={{width: "30px", height: "30px",backgroundColor: "#7da640",marginTop: "25px", border:"1px solid green" }}/>
                                                </Box>
                                             </Box>
           
                                   </Card>   

                                   <Card sx={{ minHeight: 350,   
                                width: 270,     
                                marginRight: "px", border: "1px solid white", cursor: "pointer" 
                                     }}>
                                        <img style={{width: "270px", height:"300px"}} src="/restaurant/chef.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                             <Box sx={{display: "flex", flexDeriction: "row",justifyContent: "space-around"}}>
                                               <Box  sx={{marginTop: "10px"}} >
                                              
                                              <div>John doe</div>
                                              <div style={{color: "#7DA640"}}>karalina  Doctoraova</div>
   
                                                </Box> 
                                                <Box sx={{justifyContent: "flex-end"}}>
                                                <img src="/restaurant/share1.jpg" style={{width: "30px", height: "30px",backgroundColor: "#7da640",marginTop: "25px", border:"1px solid green" }}/>
                                                </Box>
                                             </Box>
           
                                   </Card>   



                                 

                                  
                                   </Stack>
            </Box>
      
        </div>
    )
}




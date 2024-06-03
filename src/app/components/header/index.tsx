import { Badge, Box, Button, Card, CardContent,Container,IconButton, Stack, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { sweetTopSuccessAlert } from '../../../lib/sweetAlert';
//import { sweetTopSuccessAlert } from '../../../lib/sweetAlert';
import { Logout } from '@mui/icons-material';
import Basket from "./basket";
//import { verifiedMemberData } from '../../apiServices/verify';


 export function NavbarHome(props: any)  {
    return (
      <div className="home_navbar">
        <Container>
            <Stack flexDirection={"row"} 
            className='navbar_config' 
            justifyContent={"space-between"}
            >
               <Box>
                 <img src="/icons/restaurant.png"/>
                </Box>
               <Stack 
               flexDirection={"row"}     
                justifyContent="space-evenly" 
                alignItems={'center'}
                className="navbar_links"
                >
                    <Box className="hover-line"  onClick={props.setPath}>
                        <NavLink to="/" 
                        activeClassName="underLine">
                            Home
                            </NavLink>
                    </Box>
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Restaurant" 
                        activeClassName="underLine">
                            Restaurant
                            </NavLink>
                    </Box>
                    {props.verifiedMemberData ? (
                    <Box className="hover-line"onClick={props.setPath}>
                        <NavLink to="/Order" 
                        activeClassName="underLine">
                            Order
                            </NavLink>
                    </Box>
                    ) : null}
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Community" 
                        activeClassName="underLine">
                            Community 
                            </NavLink>
                    </Box>
                     {props.verifiedMemberData

                    ? (
                     <Box className="hover-line" onClick={props.setPath}>
                     <NavLink to="/member" 
                     activeClassName="underLine">
                         My page
                         </NavLink>
                 </Box> ) : null }
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Help" 
                        activeClassName="underLine">
                            Help
                            </NavLink>
                    </Box>
                       
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Shops" 
                        activeClassName="underLine">
                            Shop
                            </NavLink>
                    </Box>

                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/Contact Us" 
                        activeClassName="underLine">
                            Contact Us
                            </NavLink>
                    </Box>

                    <Basket
              cartItems={props.cartItems}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              onDelete={props.onDelete}
            />  
                      {!props.verifiedMemberData ? 


                 ( <Box>
                    <Button 
                    variant='contained' 
                    style={{color: "#ffffff", background: "#1976D2"}}
                   // onClick={() => alert("clicked")}
                  // onClick={() => sweetTopSuccessAlert("clicked", 3000)}
                  onClick = {props.handleLoginOpen}
                    >
                    KIRISH
                    </Button>
                </Box>
                ) : (
                <img style={{width: "48px",height: "48px", borderRadius: "24px"}} 
                src={props.verifiedMemberData.mb_image}
                onClick={props.handleLogOutClick}
                />
                )}

               <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
              onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
                <Stack className="head_information" justifyContent={"row"} border={"black"}>
                    <Stack className="head_information1" justifyContent={"column"} border={"red"} style={{ marginTop: "86px",marginLeft: "24px" }} >
                        <Box className="header1">
                        The Quality Rest Station
                        </Box>
                        <Box className="define_restaurant">
                        
                           "Choosing The
                         <br></br>
                           <span  style={{color:"#7DA640"}}>Best Quality Food"</span>
                      

                        
                        </Box>
                        <Box className="header2">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Cumque consequuntur possimus commodi odit dolor tempore!

                        </Box>
                        
                        <Box className="button" display={"flex"}  flexDirection={"row"} >
                        <Box sx={{mt:'40px'}}>
                            {/* <Button variant='contained' style={{width:"166px", height: "57px", background: '#7DA640',color:'#ffffff'}}
                              onClick = {props.handleSignUpOpen }

                              // onClick={() => setValue(!value)} 
                                 // onClick={() => alert("clicked")}>
                            Sign Up
                            </Button> */}

                            {!props.verifiedMemberData ? (
                                <Button
                                variant='contained' 
                                style={{width:"210px", 
                                height: "60px", 
                                background: '#1976d2',      
                                color:'#ffffff',}}
                                onClick = {props.handleSignUpOpen }

                                // onClick={() => setValue(!value)} 
                                   // onClick={() => alert("clicked")}
                                >
                                RO’YHATDAN O’TISH
                                </Button>
                           )
                           :
                           null}

                        </Box>

                        <Box sx={{mt:'40px'}}   style={{marginLeft:"25px" }}>
                            <Button variant='contained' style={{width:"150px", height: "57px", background: '#ffffff',color:"#7DA640", }}>
                            View More 
                            </Button>
                        </Box>
                        </Box>

                        <Box className="pagination" sx={{mt:'8px'}} display={"flex"} flexDirection={"row"}>

                        <Card sx={{ minHeight: 85,   
                                width: 293,     
                                marginRight: "25px",  cursor: "pointer", display:"flex",backgroundColor: "#dee2e6", flexDirection: "row"
                                     }}>
                                        <img style={{width: "85px", height:"85px"}} src="/restaurant/zira.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                            <CardContent sx={{width: "218px",height: "73px",  marginLeft: "15px"}}>
                                         <Typography
                                        gutterBottom
                                      variant="h4"
                                   component="div"
                                 sx={{ textAlign: "center",color:"#7DA640" }}
                               >
                       Breakfast
                          </Typography>
                       <Typography
                        variant="body2" 
                       color="text.secondary" fontSize={"14px"}
                       sx={{ textAlign: "center" }}
                       >
                      This meals are so totally!
                      </Typography>
                  </CardContent>
           
                                   </Card>

                                   <Card sx={{ minHeight: 85,   
                                width: 293,     
                                marginRight: "25px",  cursor: "pointer",display:"flex", flexDirection: "row",backgroundColor: "#dee2e6",border: "2px solid white"
                                     }}>
                                        <img style={{width: "85px", height:"85px"}} src="/restaurant/zira.jpg"
                                     loading="lazy"
                                       alt="rasim"
                                             />
                                            <CardContent sx={{width: "218px",height: "73px", marginLeft: "15px",}}>
                                         <Typography
                                        gutterBottom
                                      variant="h4"
                                   component="div"
                                 sx={{ textAlign: "center",color:"#7DA640" }}
                               >
                 Lunch
                          </Typography>
                       <Typography
                        variant="body2" 
                       color="text.secondary" fontSize={"14px"}
                       sx={{ textAlign: "center" }}
                       >
                      This meals are so totally!
                      </Typography>
                  </CardContent>
           
                                   </Card>


                        </Box>
                    </Stack>

                    <Stack className="big_img">

                        <Box className="right_sides" sx={{mt:'0px'}}>
                        <img src='./home/blister4.png' style={{width: "327px", height: "795px",marginLeft: "-200px", marginRight: "414px"}} alt='rasim'/>  

                        </Box>
                        <Box className="right_side">
                        <img src='./home/blister3.png'  style={{width: "560px", height: "965px", marginTop: "-133px",marginLeft: "70px"}} alt='rasim'/> 
                        </Box>
                        </Stack>

                </Stack>
        </Container>
        </div>);
 };
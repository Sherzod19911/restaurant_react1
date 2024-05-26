import React from 'react';
import { Badge, Box, Button, Container, IconButton, Stack,  ListItemIcon, 
    Menu, 
    MenuItem,  } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import Basket from "./basket";

export function NavbarOthers(props: any)  {
   return(<div className='others_restaurant home_navbar'>
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
                   {props.verifiedMemberData ? (
                     <Box className="hover-line" onClick={props.setPath}>
                     <NavLink to="/member" 
                     activeClassName="underLine">
                         My page
                         </NavLink>
                 </Box> ) : null }

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

                   <Basket/>   
                   {!props.verifiedMemberData ? ( 
                     <Box>
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
              <MenuItem onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
                   </Stack>
               </Stack>
             
                   

               
       </Container>
   </div>);
};
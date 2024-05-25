// import React  from "react";
// import { Box, CardContent, Container, Stack, } from "@mui/material";
// import { CardCover } from "@mui/joy";
// import { Favorite, Visibility } from "@mui/icons-material";
// import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
// import { CardOverflow, Card, CssVarsProvider,AspectRatio, IconButton, Typography,Link } from "@mui/joy";
// import CallIcon from "@mui/icons-material/Call"

// //REDUX
// import { useSelector} from "react-redux";
// import { createSelector } from "reselect";

// import { Restaurant } from "../../../types/user";

// import { serviceApi } from "../../../lib/config";

// //REDUX SELECTOR
// const menuPanelRetriever = createSelector(
//   retrieveMenuPanel,
//   (menuPanel) => ({
//     menuPanel,
//   })
// );


// import { retrieveMenuPanel } from "./selector";
// //const card_list = Array.from(Array(3).keys());
// export function MenuPanel() {
//   const { menuPanel } = useSelector(menuPanelRetriever);
//     return (
//         <div style={ { width: "1920px", height: "850px",marginLeft:"30px",marginTop:"38px", backgroundColor: "#000000ff"}}>
            
//                 <Stack sx={{ display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"space-between"}} >
//                   <Box sx={{width:"366px", height: "75px", marginLeft: "420px",marginTop: "30px"}}>
//                   <Typography
//                       gutterBottom
//                       //variant="h2"
//                       component="div"
//                       sx={{display: "flex",  marginTop:"5px", fontFamily: "" }}
//                       style={{ fontWeight:"800px",fontSize: "45px"}}
//                     >
//                     Best Restaurants
//                     </Typography>
//                   </Box>
                
//                   <Box sx={{width:"1392px", height: "350px",marginTop: "45px", marginLeft: "-60px"}}>
//                     <Stack flexDirection={"row"} justifyContent={"space-around"} sx={{width:"1170px", height: "665px",  marginLeft: "105px",border: "1px solid red"}}>
//                     {menuPanel.map((ele: Restaurant) => {
//              const image_path = `${serviceApi}/${ele.mb_image}`;
//                         return (

//                             // <Card sx={{ minHeight: 350,   
//                             //     width: 270,     
//                             //     marginRight: "30px",  cursor: "pointer" 
//                             //          }}>
//                             //             <img style={{width: "270px", height:"350px"}} src="/restaurant/menu.jpg"
//                             //          loading="lazy"
//                             //            alt="rasim"
//                             //                  />
           
//                             //        </Card>
//                             <CssVarsProvider>
//                             <Card    
//                             variant="outlined"   
//                              sx={{ minHeight: 350,   
//                              minWidth: 325, 
//                              mr: "35px" 
            
//                              }}
//                           >      
//                               <CardOverflow>
//                                    <AspectRatio ratio="1">
//                                    <img
//                                      src={image_path}
//                                     alt=""/>       
//                                    </AspectRatio>
//                                    <IconButton
//                                      aria-label="Like minimal photography" 
//                                      size="md" 
//                                      variant="solid" 
//                                      color="neutral"
//                                           sx={{
//                                              position: "absolute",
//                                              zIndex: 2,
//                                              borderRadius: "50%",
//                                              right: "1rem",
//                                              bottom: 0 ,
//                                              transform: "translateY(50%)",
//                                              color: "rgba(0,0,0,.4)"
            
            
//                                           }}
//                                         >
//                                         <Favorite 
//                                             style={{
//                                                color: "white"
//                                               }}
//                                             />
            
//                                         </IconButton> 
            
//                              </CardOverflow>
            
//                              <Typography level = "h2" sx={{ fontsize: "md", mt: 2 }} >
//                               {ele.mb_nick} resataurant
//                              </Typography>
            
//                              <Typography  sx={{mt: 0.5, mb: 2 }}>
//                               <Link
//                                  href=""
//                                   startDecorator={<LocationOnRoundedIcon />}
//                                   textColor="neutral.700"
//                                   >
//                                     {ele.mb_address}
//                               </Link> 
//                               </Typography>
            
//                               <Typography  sx={{mt: 0.5, mb: 2 }}>
//                               <Link
//                                  href=""
//                                   startDecorator={<CallIcon />}
//                                   textColor="neutral.700"
//                                   >
//                                     {ele.mb_phone}
//                               </Link> 
//                               </Typography>
//                               <CardOverflow
//                               variant="soft"
//                                  sx={{
//                                   display: "flex", 
            
//                                   gap: 1.5, 
//                                   py: 1.5, 
//                                   px: "var(--Card-padding)", 
//                                   borderTop: "1px solid",
//                                   borderColor: "neutral.outlinedBorder",
//                                   bgcolor: "background.level1"
//                                   }}
//                                   >
//                                     <Stack sx={{flexDirection: "row" }}>
//                                     <Typography 
            
//                                 sx={{
//                                   fontWeight: "md", 
//                                   color: "text.secondary", 
//                                   alignItems: "center",
//                                   display: "flex",
//                                   flexDirection: "row" 
//                                 }}
//                                  >
//                                   {ele.mb_views}     
//                                 <Visibility
//                                   sx={{ 
//                                    fontSize: 20, 
//                                    marginLeft: "5px"}}/>
//                                </Typography>
            
//                                <Box sx={{ width: 2, bgcolor: "divider",ml: "6px", mr: "5px" }}/>
//                               <Typography 
//                                 sx={{ 
//                                  fontWeight: "md", 
//                                  color: "text.secondary", 
//                                  alignItems: "center", 
//                                  display: "flex" 
//                                }}
//                                >
            
//                               <div>{ele.mb_likes}</div>
//                              <Favorite sx={{ fontSize: 20, marginLeft: "5px"}} />
//                              </Typography>
//                                     </Stack>
//                                  </CardOverflow>
//                                 </Card> 
//                                 </CssVarsProvider>
//                       );
//                     }
//                     )}
                    
//                     {/* <Card sx={{ minHeight: 350,   
//                                 width: 270,     
//                                 marginRight: "30px", border: "1px solid red", cursor: "pointer" 
//                                      }}>
//                                         <img style={{width: "270px", height:"350px"}} src="/restaurant/menu4.jpg"
//                                      loading="lazy"
//                                        alt="rasim"
//                                              />
           
//                                    </Card>

                                   
//                             <Card sx={{ minHeight: 350,   
//                                 width: 270,     
//                                 marginRight: "30px", border: "1px solid red", cursor: "pointer" 
//                                      }}>
//                                         <img style={{width: "270px", height:"350px"}} src="/restaurant/menu3.jpg"
//                                      loading="lazy"
//                                        alt="rasim"
//                                              />
           
//                                    </Card>
                                   
//                             <Card sx={{ minHeight: 350,   
//                                 width: 270,     
//                                 marginRight: "30px", border: "1px solid red", cursor: "pointer" 
//                                      }}>
//                                         <img style={{width: "270px", height:"350px"}} src="/restaurant/menu1.jpg"
//                                      loading="lazy"
//                                        alt="rasim"
//                                              />
           
//                                    </Card> */}
                        
//                 </Stack>
//                 </Box>
               
//                 </Stack>
            
//         </div>
//     )
// }          


import React, { useEffect, useRef } from "react";
import { Box,  Button,  Stack } from "@mui/material";

import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CardOverflow, Card, CssVarsProvider, AspectRatio, IconButton, Typography, Link } from "@mui/joy";
import CallIcon from "@mui/icons-material/Call";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import { retrieveMenuPanel } from "./selector";
import { setMenuPanel } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import RestaurantApiService from "../../apiservices/restaurantApiServices";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiservices/memberApiServices";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";


// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setMenuPanel: (data: Restaurant[]) => dispach(setMenuPanel(data)),
});

//REDUX SELECTOR
const menuPanelRetriever = createSelector(
  retrieveMenuPanel,
  (menuPanel) => ({
    menuPanel,
  })
);

export function MenuPanel() {
    //INITIALIZITION
  const history = useHistory();
  const refs: any = useRef([]);
  const { menuPanel } = useSelector(menuPanelRetriever);
  console.log("menuPanel::",menuPanel);
  const { setMenuPanel } = actionDispatch(useDispatch());
  useEffect (() => {
    const restaurantService = new RestaurantApiService();

    
    restaurantService.getRestaurants({page: 1, limit: 3, order: 'mb_point'}).then(data => {
      setMenuPanel(data);

    }).catch(err => console.log(err));
    
   
}, []);

const chosenRestaurantHandler = (id: string) => {
  history.push(`/restaurant/${id}`);
 }

 const goRestaurantsHandler = () => history.push('/restaurant');


/** HANDLERS */  

const targetLikeBest =  async (e: any, id: string) => {
  try {
     assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
     const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: id, 
        group_type: 'member'
      });
      assert.ok(like_result, Definer.general_err1);
      if(like_result.like_status >0) {
        e.target.style.fill = 'red';
        refs.current[like_result.like_ref_id].innerHTML++;


      }else {
        e.target.style.fill = 'white';
        refs.current[like_result.like_ref_id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("success", 700,false);

  }catch(err: any) {
    console.log(`ERROR :::targetLikeBest ${err.message}`);
    sweetErrorHandling(err).then();

          }}
  return (
    <div style={{ width: "1920px", height: "850px", marginLeft: "30px", marginTop: "38px", backgroundColor: "#000000ff" }}>

      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "space-between" }} >
        <Box sx={{ width: "366px", height: "75px", marginLeft: "420px", marginTop: "30px" }}>
          <Typography
            gutterBottom
            component="div"
            sx={{ display: "flex", marginTop: "5px", fontFamily: "" }}
            style={{ fontWeight: "800px", fontSize: "45px" }}
          >
            Best Restaurants
          </Typography>
        </Box>

        <Box sx={{ width: "1392px", height: "350px", marginTop: "45px", marginLeft: "-60px",border:"1px solid green" }}>
          <Stack flexDirection={"row"} justifyContent={"space-around"} sx={{ width: "1170px", height: "565px", marginLeft: "90px", border: "1px solid red" }}>
            {menuPanel.map((ele: Restaurant) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider   key={ele._id}>
                  <Card  onClick = {() => chosenRestaurantHandler(ele._id)}
                    variant="outlined"
                    sx={{ minHeight: "420px",   
                   width: "350px",     
                    marginRight: "25px", cursor: "pointer" 
                     }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img
                          src={image_path}
                          alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.4)"
                        }}
                        onClick={(e) => (e.stopPropagation())}
                      >
                        <Favorite onClick={(e) => targetLikeBest(e, ele._id)}
                          style={{
                            fill: 
                            ele?.me_liked && ele?.me_liked[0]?.my_favorite
                            ? "red"
                            : "white",
                          }}
                          />
                        
                      </IconButton>
                    </CardOverflow>

                    <Typography level="h2" sx={{ fontsize: "md", mt: 2 }} >
                      {ele.mb_nick} resataurant
                    </Typography>

                    <Typography sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_address}
                      </Link>
                    </Typography>

                    <Typography sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700"
                      >
                        {ele.mb_phone}
                      </Link>
                    </Typography>
                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlinedBorder",
                        bgcolor: "background.level1"
                      }}
                    >
                      <Stack sx={{ flexDirection: "row" }}>
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "text.secondary",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "row"
                          }}
                        >
                          {ele.mb_views}
                          <Visibility
                            sx={{
                              fontSize: 20,
                              marginLeft: "5px"
                            }} />
                        </Typography>

                        <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "5px" }} />
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "text.secondary",
                            alignItems: "center",
                            display: "flex"
                          }}
                        >
                          <div  ref={(element) => (refs.current[ele._id] = element)}>{ele.mb_likes}</div>
                          <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                        </Typography>
                      </Stack>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            }
            )}

          </Stack>
          <Stack flexDirection={"row"}
          justifyContent={"flex-end"}
          style={{width: "100%", marginTop: "36px"}}
          >
            <Button  style={{background: "#1926d2", color: "#FFFFFF"}}
            onClick={goRestaurantsHandler}
            >
              Go to Restaurants
            </Button>

          </Stack>
        </Box>

      </Stack>

    </div>
  )
}

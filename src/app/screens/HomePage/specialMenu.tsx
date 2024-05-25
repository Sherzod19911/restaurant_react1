import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/LocationOnRounded';
import { Card } from "@mui/joy";


import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { Product } from "../../../types/product";

import { retrieveSpecialMenu } from "./selector";
import { createSelector } from "reselect";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { setSpecialMenu } from './slice';
import ProductApiService from '../../apiservices/productApiServices';

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setSpecialMenu: (data: Product[]) => dispach(setSpecialMenu(data)),
});

/** REDUX SELECTOR */
const specialMenuRetriever = createSelector(
  retrieveSpecialMenu,
  (specialMenu) => ({
    specialMenu,
  })
);




export function SpecialMenu() {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { setSpecialMenu } = actionDispatch(useDispatch());
  const {specialMenu} = useSelector(specialMenuRetriever);
  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_likes", page: 1, limit: 3})
      .then((data) => setSpecialMenu(data))
      .catch((err) => console.log(err));
  }, []);

  
    return (
        <div className="menu_static_frame">
            <Container>
           
              
              <Stack>
                
                <Stack 
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{ width:"1170px", height: "535px",marginRight: "375px"}}
                sx={{mt:"45px"}}
                >
                  
               
                         
                    <Box className="category_title">
                    <div>Special Menu</div>
                 
                    </Box>
             

                    <Stack 
                    flexDirection={"row"}
                        sx={{mt:"45px"}}
                        marginRight={"250px"}
                        marginLeft={"80px"}
                        paddingLeft={"100px"}
                        >
                           {specialMenu.map((product: Product) => {
              const image_path = `${serverApi}/${product.product_images[0]}`;
              const size_volume =
                product.product_collection === "drink"
                  ? product.product_volume + "l"
                  : product.product_size + " size";
              return (
                              <CssVarsProvider>

{/* The first restaurants vs codes */}

<Card
sx={{ minHeight: "420px",   
width: "350px",     
marginRight: "25px", cursor: "pointer" 
}}
>    
<CardCover >

{/* <img className="menu_photo" src={image_path}
      loading="lazy"
      alt="rasim"
   /> */}
 
   
   </CardCover>


 <CardCover
     sx={{
 background: "#22222"
       
  }}
 />
 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="menu_photo" src={image_path}
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   {product.product_name}
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
  {product.product_description}
    <h5 className="price">
       <MonetizationOn />
      {product.product_price}</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  <CardOverflow 
  sx={{
   display: "flex", 
   gap: 1.5, py: 1.5, 
   px: "var(--Card-padding)", 
   borderTop: "1px solid"
   }}
   >
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
              bottom: 45,
              transform: "translateY(50%)",
              color: "rgba(0,0,0,.4)"


           }}
         >
         <Favorite style={{ fill: "white"}}/>

         </IconButton>
        <Stack sx={{flexDirection: "row"}}>
     <Typography 

       sx={{
         fontWeight: "md", 
         color: "neutral.300", 
         alignItems: "center",
         display: "flex" }}
        >
       100 {" "}
       <VisibilityIcon 
         sx={{ 
          fontSize: 20, 
          marginLeft: "10px"}}/>
      </Typography>

      {/* <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/> */}
     <Typography 
       sx={{ 
        fontWeight: "md", 
        color: "neutral.300", 
        alignItems: "center", 
        display: "flex" 
       }}
      >      

     <div>50</div>
    <Favorite sx={{ fontSize: 20, marginLeft: "10px"}}/>
    </Typography>
  </Stack>
</CardOverflow>

</Card>






</CssVarsProvider>
 );
                           })};

                    </Stack>

                   
               
               </Stack>
               <Box sx={{  width:"190px", height: "203px", marginLeft: "1274px", marginRight: "55px", marginTop: "-505px"}}>
                <img src="/restaurant/Homes.png" alt="" />
                </Box>
                <Box sx={{  width:"190px", height:"302px", marginRight: "1462px",marginLeft:"-350px",marginTop: "50px"}}>
                <img  style={{width: "190px", height: "302px"}} src="/restaurant/leftone.png" alt="" />
            </Box>
               </Stack>
            </Container>
        </div>
    )
}
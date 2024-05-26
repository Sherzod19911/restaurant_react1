
import React,{ useState } from "react";
import {Favorite,FavoriteBorder } from "@mui/icons-material";
import { Box, Container, Pagination, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"

import Button from "@mui/material/Button"
import Rating from "@mui/material/Rating"
import "../../../css/restaurant.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";       
import { FreeMode, Navigation, Thumbs } from "swiper";
import Checkbox from "@mui/material/Checkbox";
import { Swiper, SwiperSlide } from "swiper/react";  

import { serverApi } from "../../../lib/config";

import { useParams } from "react-router-dom";
import { Product } from "../../../types/product";
import { useDispatch, useSelector } from "react-redux";

import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";

import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenRestaurant,
  setChosenProduct,
} from "../../screens/RestaurantPage/slice";
import { useEffect } from "react";

import assert from "assert";

import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiservices/memberApiServices";
import ProductApiService from "../../apiservices/productApiServices";
import RestaurantApiService from "../../apiservices/restaurantApiServices";
import { retrieveChosenProduct, retrieveChosenRestaurants } from "./selector";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenRestaurant: (data: Restaurant) => dispach(setChosenRestaurant(data)),
});
// REDUX SELECTOR
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const chosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurants,
  (chosenRestaurant) => ({
    chosenRestaurant,
  })
);

const chosen_list=Array.from(Array(4).keys());

export function ChosenDish() { 
   /**INITIALIZATIONS */
   let { dish_id } = useParams<{ dish_id: string }>();
   const { setChosenProduct, setChosenRestaurant } = actionDispatch(
     useDispatch()
   );
   const { chosenProduct } = useSelector(chosenProductRetriever);
   const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
   const label = { inputProps: { "aria-label": "Checkbox demo" } };
   const [productRebuild, setProductRebuild] = useState<Date>(new Date());
 
   const dishRelatedProcess = async () => {
     try {
       const productService = new ProductApiService();
       const product: Product = await productService.getChosenDish(dish_id);
       setChosenProduct(product);
 
       const restaurantService = new RestaurantApiService();
       const restaurant = await restaurantService.getChosenRestaurant(
         product.restaurant_mb_id
       );
       setChosenRestaurant(restaurant);
     } catch (err) {
       console.log("dishRelatedProcess, ERROR:", err);
     }
   };
   useEffect(() => {
     dishRelatedProcess().then();
   }, [productRebuild]);
 
   /**HANDLERS */
   const targetLikeProduct = async (e: any) => {
     try {
       assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
 
       const memberService = new MemberApiService(),
         like_result = await memberService.memberLikeTarget({
           like_ref_id: e.target.id,
           group_type: "product",
         });
       assert.ok(like_result, Definer.general_err1);
 
       await sweetTopSmallSuccessAlert("success", 700, false);
       setProductRebuild(new Date());
     } catch (err: any) {
       console.log("targetLikeProduct, ERROR:", err);
       sweetErrorHandling(err).then();
     }
   };
 


    return (
    <div className="chosen_dish_page">
        <Container className="dish_container">
            <Stack className="chosen_dish_slider">
                {/* <Swiper
                className="dish_swiper"
                loop={true}    
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                >
                   {chosenProduct?.product_images.map((ele: string) => {
              const image_path = `${serverApi}/${ele}`;
                        return (
                            <SwiperSlide>
                                <img 
                                style={{width:"100%", height: "100%" }}
                                src={image_path}
                            />
                         </SwiperSlide>  
                        );
                     })}


                </Swiper> */}
           


                
               

          {/* <Swiper
            
            slidesPerView={chosenProduct?.product_images.length}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            
            {chosenProduct?.product_images.map((ele: string) => {
              const image_path = `${serverApi}/${ele}`;
              return (
                <SwiperSlide style={{ background: "#0b0e11" }}>
                  <img src={image_path} />
                </SwiperSlide>
              );
            })}
          </Swiper> */}
          
          
          
          {/* <Swiper
  slidesPerView={chosenProduct?.product_images ? chosenProduct.product_images.length : 0}
  spaceBetween={20}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
>
  {chosenProduct?.product_images && Array.isArray(chosenProduct.product_images) ?
    chosenProduct.product_images.map((ele: string, index: number) => {
      const image_path = `${serverApi}/${ele}`;
      return (
        <SwiperSlide key={index} style={{ background: "#0b0e11" }}>
          <img src={image_path} alt={`Image ${index}`} />
        </SwiperSlide>
      );
    })
    :
    <SwiperSlide style={{ background: "#0b0e11" }}>
      No images available
    </SwiperSlide>
  }
</Swiper> */}



           </Stack>
            <Stack className={"chosen_dish_info_container"}>
                <Box className={"chosen_dish_info_box"}>
                <strong className="dish_txt">{chosenProduct?.product_name}</strong>
            <span className="resto_name">{chosenRestaurant?.mb_nick}</span>
                    <Box className={"rating_box"}>
                        <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                        <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "20px",
                        }}
                        >
                            <Checkbox
                            {... label}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite style= {{ color: "red" }} />}
                            id={chosenProduct?._id}
                    onClick={targetLikeProduct}
                    checked={
                      chosenProduct?.me_liked &&
                      chosenProduct?.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
                            />  

                  <span>{chosenProduct?.product_likes}ta</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center",}} >
                            <RemoveRedEyeIcon sx={{mr: "10px"}} />
                            <span>{chosenProduct?.product_views}ta</span>
                        </div>

                       </Box>
                       <p className="dish_desc_info">
              {chosenProduct?.product_description
                ? chosenProduct?.product_description
                : "no description"}
            </p>
                      
                       
                       
                           <div className={"dish_price_box"}>
                            <span>Price:</span>
                        
              <span>${chosenProduct?.product_price}</span>
                           </div>
                           <div className={"button_box"}>
                             <Button variant="contained">Add to Card</Button>
                           </div>
                        </Box>        
                    </Stack>      
                </Container>
            </div>
              );
    }
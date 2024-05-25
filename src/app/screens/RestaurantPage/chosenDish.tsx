
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

const chosen_list=Array.from(Array(4).keys());

export function ChosenDish() {  

    const label = { inputProps: { "aria-label": "Checkbox demo"}};

    return (
    <div className="chosen_dish_page">
        <Container className="dish_container">
            <Stack className="chosen_dish_slider">
                <Swiper
                className="dish_swiper"
                loop={true}    
                spaceBetween={10}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                >
                     {chosen_list.map((ele) => {
                        const image_path = `/restaurant/photo2.jpg`;
                        return (
                            <SwiperSlide>
                                <img 
                                style={{width:"100%", height: "100%" }}
                                src={image_path}
                            />
                         </SwiperSlide>  
                        );
                     })}


                </Swiper>
                {/* <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {chosen_list.map((ele) => {
              const image_path = `/restaurant/photo1.jpg`;
              return (
                <SwiperSlide style={{ background: "#0b0e11" }}>
                  <img src={image_path} />
                </SwiperSlide>
              );
            })}
          </Swiper> */}

           </Stack>
            <Stack className={"chosen_dish_info_container"}>
                <Box className={"chosen_dish_info_box"}>
                    <strong className={"dish_txt"}>Korean Sandwich</strong>
                    <span className={"resto_name"}>Gold Samarkand</span>
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
                            checked= {true}
                            />  


                            <span>98 ta</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center",}} >
                            <RemoveRedEyeIcon sx={{mr: "10px"}} />
                            <span> 1000 ta</span>
                        </div>

                       </Box>
                       <p className={"dish_desc_info"}>This is mouth watering meals! </p>
                      
                       
                       
                           <div className={"dish_price_box"}>
                            <span>Price:</span>
                            <span>$15</span>
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
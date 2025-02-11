import React from 'react';
import { Container, Button, Box, Stack } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder  from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RemoveRedIEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge"
import "../../../css/navbar.css";
import "../../../css/restaurant.css";
import { useHistory, useParams } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveChosenRestaurants,
  retrieveRandomRestaurants,
  retrieveTargetProducts,
  retrieveTargetRestaurant,
} from "../RestaurantPage/selector";
import { createSelector } from "reselect";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";


import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenRestaurant,
  setRandomRestaurants,
  setTargetProducts,
} from "../../screens/RestaurantPage/slice";
import { useEffect, useState } from "react";

import { Product } from "../../../types/product";
import { ProductSearchObj } from '../../../types/others';

import assert from "assert";
import { Definer } from '../../../lib/Definer';

import { sweetErrorHandling, sweetTopSmallSuccessAlert} from "../../../lib/sweetAlert";
import RestaurantApiService from '../../apiservices/restaurantApiServices';
import ProductApiService from '../../apiservices/productApiServices';
import MemberApiService from '../../apiservices/memberApiServices';
//others


// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setRandomRestaurants: (data: Restaurant[]) =>
      dispach(setRandomRestaurants(data)),
    setChosenRestaurant: (data: Restaurant) => dispach(setChosenRestaurant(data)),
    setTargetProducts: (data: Product[]) => dispach(setTargetProducts(data)),
  });
  // REDUX SELECTOR
  const randomRestaurantsRetriever = createSelector(
    retrieveRandomRestaurants,
    (randomRestaurants) => ({
      randomRestaurants,
    })
  );
  const chosenRestaurantRetriever = createSelector(
    retrieveChosenRestaurants,
    (chosenRestaurant) => ({
      chosenRestaurant,
    })
  );
  const targetProductsRetriever = createSelector(
    retrieveTargetProducts,
    (targetProducts) => ({
      targetProducts,
    })
  );


 
  export function OneRestaurant(props:any){ 
    /**INITIALIZATIONS */
    const history = useHistory();
    let { restaurant_id } = useParams<{ restaurant_id: string }>();
    const { setRandomRestaurants, setChosenRestaurant, setTargetProducts } =
      actionDispatch(useDispatch());
    const { randomRestaurants } = useSelector(randomRestaurantsRetriever);
    const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
    const { targetProducts } = useSelector(targetProductsRetriever);
    const [chosenRestaurantId, setChosenRestaurantId] =
      useState<string>(restaurant_id);
    const [targetProductSearchObj, setTargetProductSearchObj] =
      useState<ProductSearchObj>({
        page: 1,
        limit: 8,
        order: "createdAt",
        restaurant_mb_id: restaurant_id,
        product_collection: "dish",
      })  
      const [productRebuild, setProductRebuild] = useState<Date>(new Date());
      useEffect(() => {  

          const restaurantService = new RestaurantApiService();
          restaurantService
            .getRestaurants({
                 page: 1,
                  limit: 10,
                   order: "random" 
                })
            .then((data) => setRandomRestaurants(data))
            .catch((err) => console.log(err));
            restaurantService
      .getChosenRestaurant(chosenRestaurantId)
      .then((data) => setChosenRestaurant(data))
      .catch((err) => console.log(err));

          const productService = new ProductApiService();
          productService
            .getTargetProducts(targetProductSearchObj)
            .then((data) => setTargetProducts(data))
            .catch((err) => console.log(err));

        }, [targetProductSearchObj,productRebuild,chosenRestaurantId]);  
        /**Handlers */
        const chosenRestaurantHandler = (id: string) => {
          setChosenRestaurantId(id);
          targetProductSearchObj.restaurant_mb_id = id;
          setTargetProductSearchObj({ ...targetProductSearchObj });
          history.push(`/restaurant/${id}`);
        };
        const searchCollectionHandler = (collection: string) => {
          targetProductSearchObj.page = 1;
          targetProductSearchObj.product_collection = collection;
          setTargetProductSearchObj({ ...targetProductSearchObj });
        };
        const searchOrderHandler = (order: string) => {
          targetProductSearchObj.page = 1;
          targetProductSearchObj.order = order;
          setTargetProductSearchObj({ ...targetProductSearchObj });
        }
        const chosenDishHandler = (id: string) => {
          history.push(`/restaurant/dish/${id}`)
        }

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
    return <div className="single_restaurant">
       <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className={"avatar_big_box"}>
                    <Box className={"top_text"}>
                    <p>{chosenRestaurant?.mb_nick} Restaurant</p>
                        <Box className={"Single_search_big_box"}>
                            <form className={"Single_search_form"} action={""} method={""}>
                                <input
                                    type={"search"}
                                    className={"Single_searchInput"}
                                    name={"Single_resSearch"}   
                                    placeholder={"Search"}
                                />
                                <Button
                                    className={"Single_button_search"}
                                    variant='contained'
                                    endIcon={<SearchIcon />}
                                >
                                 Search
                                </Button>
                            </form>
                        </Box>
                    </Box>     
                </Stack>

                <Stack
                    style={{ width: "100%", display: "flex" }}
                    flexDirection={"row"}
                    sx={{ mt: "35px",cursor: "pointer"}}
                >
                    <Box className={"prev_btn restaurant-prev"}>
                        <ArrowBackIosNewIcon
                            sx={{ fontSize: 40 }}
                            style={{ color: "green" }} 
                        />
                    </Box>
                    < Swiper
                        className={"restaurant_avatars_wrapper"}
                        slidesPerView={6}
                        centeredSlides={false}
                        spaceBetween={30}
                        navigation={{
                            nextEl:".restaurant-next",
                            prevEl:".restaurant-prev",
                        }}
                    >
                        {randomRestaurants.map((ele: Restaurant) => {
                            const image_path = `${serverApi}/${ele.mb_image}`;
                            return (
                                <SwiperSlide 
                                onClick={() => chosenRestaurantHandler(ele._id)}
                                    style={{ cursor: "pointer" }}
                                    key={ele._id}
                                    className={"restaurant_avatars"}
                                >
                                    <img src={image_path} />
                                    <span>{ele.mb_nick}</span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <Box
                        className={"next_btn restaurant-next"}
                        fontStyle={{ color: "green" }}>
                        <ArrowForwardIosIcon sx={{fontSize: 40}} />
                    </Box>
                </Stack>

                <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"flex-end"}
                    width={"90%"}
                    sx={{ mt: "65px" }}
                >
                    <Box className={"dishs_filter_box"}>

                    <Button variant={"contained"} color="secondary"
                          onClick={() => searchOrderHandler("createdAt")}
                        >
                            New
                        </Button>
                        <Button variant={"contained"} color="secondary"
                         onClick={() => searchOrderHandler("product_price")}
                        >
                            Price
                        </Button>
                        <Button variant={"contained"} color="secondary"
                           onClick={() => searchOrderHandler("product_likes")}
                        >
                            Likes
                        </Button>
                        <Button variant={"contained"} color="secondary"
                         onClick={() => searchOrderHandler("product_views")}
                         >
                            Views
                        </Button>
                        <Button variant={"contained"} color="secondary"
                         onClick={() => searchCollectionHandler("dessert")}
                        >
                            Dessert
                        </Button>
                        <Button variant={"contained"} color="secondary"
                         onClick={() => searchCollectionHandler("drink")}
                        >
                            Ichimlik
                        </Button>
                        <Button variant={"contained"} color="secondary"
                         onClick={() => searchCollectionHandler("salad")}
                        >
                            Salad
                        </Button>
                        <Button variant={"contained"} color="secondary"
                         onClick={() => searchCollectionHandler("etc")}
                        >
                            Boshqa
                        </Button>
                    </Box>
                </Stack>


            <Stack
                    style={{ width: "100%", display: "flex", minHeight: "600px" }}
                    flexDirection={"row"}
                >

                <Stack className={"dish_category_box"}>
                 





                   
                    </Stack>

                <Stack className={"dish_wrapper"}>
                {targetProducts.map((product: Product) => {
                        const image_path = `${serverApi}/${product.product_images[0]}`;
                        const size_volume = product.product_collection === 'drink' 
                        ? product.product_volume+'l' 
                        : product.product_size+'size';

                        return (
                            <Box className={"dish_box"} key={product._id}>
                                <Box
                                    className={"dish_img"}
                                    sx={{
                                        backgroundImage:`url(${image_path})`,         
                                    }}
                                >     
                                    <div className={"dish_sale"}>{size_volume}</div>
                                    <Button
                                        className={"like_view_btn"}
                                        style={{ left: "36px" }}     
                                    >
                                         <Badge 
                                         
                                         badgeContent={product.product_likes} 
                                         color="primary">
                                            <Checkbox
                                                icon={<FavoriteBorder style={{ color: "white" }} />}
                                                id={product._id}
                                                checkedIcon={<Favorite style={{ color: "red" }} />}
                                                onClick={targetLikeProduct}
                                                checked={
                                                    product?.me_liked &&
                                                  product?.me_liked[0]?.my_favorite
                                                ? true
                                               : false
                                       }
                                            />    
                                        </Badge>
                                    </Button>
                                    <Button className="view_btn" onClick={(e) => {
                        props.onAdd(product);
                        e.stopPropagation()
                      }}>
                                        <img
                                            src={"/icons/shopping-cart.svg"}     
                                            style={{ display: "flex" }}
                                        />
                                    </Button>      
                                    <Button
                                        className={"like_view_btn"}
                                        style={{ right: "36px" }}
                                    >
                                       <Badge badgeContent={product.product_views} color="primary" >
                                            <Checkbox
                                                icon={
                                                    <RemoveRedIEyeIcon style={{ color: "white" }} />
                                                }
                                            />
                                        </Badge>
                                    </Button>
                                </Box>
                                <Box className={"dish_desc"}>
                                <span className={"dish_title_text"}>{product.product_name}
                                </span>
                                    <div className={"dish_desc_text"} >
                                    <MonetizationOnIcon />{product.product_price}
                                    </div>
                                </Box>
                            </Box>
                        );
                    })};
            </Stack>
            </Stack>

        </Stack>
        </Container>
        <div className={"review_for_restaurant"}>
            <Container
                sx={{ mt: "100px" }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box className={"category_title"}>Oshxona haqida fikrlar</Box>
                <Stack
                    flexDirection={"row"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"100%"}
                >
                    {Array.from(Array(4).keys()).map((ele, index) => {
                        return (
                            <Box className={"review_box"} key={index} >
                                <Box display={"flex"} justifyContent={"center"}>
                                    <img
                                        src={"/community/cute_girl.jpg"}
                                        className={"review_img"}
                                    />
                                </Box>
                                <span className={"review_name"}>Rayhona Asadova</span>
                                <span className={"review_prof"}>Foydalanuvchi</span>
                                <p className={"review_desc"}>
                                    Menga bu oshxonaning taomlari juda yoqadi! Hammaga tavsiya qilaman!
                                </p>
                                <div className={"review_stars"}>
                                    <StarIcon style={{color: "#F2BD57"}} />
                                    <StarIcon style={{color: "#F2BD57"}} />
                                    <StarIcon style={{color: "#F2BD57"}} />
                                    <StarIcon style={{color: "#whitesmoke"}} />
                                    <StarIcon style={{color: "#whitesmoke"}} />
                                </div>
                            </Box>
                        )
                    })}
                </Stack>

            </Container>
        </div>
       

        <Container className={"member_reviews"}>
            <Box className={"category_title"}>About Restaurants</Box>
            <Stack
                display={"flex"}
                flexDirection={"row"}
                width={"90%"}
                sx={{mt: "70px"}}
            >
                <Box className={"about_left"}
                          sx={{ backgroundImage: 
                            `url(${serverApi}/${chosenRestaurant?.mb_image})` 
                          }}
            >
                <div className={"about_left_desc"}>
                <span>{chosenRestaurant?.mb_nick}</span>
              <p>{chosenRestaurant?.mb_description}</p>
                </div>
                </Box>
                <Box className={"about_right"}>
                    {Array.from(Array(2).keys()).map((ele, index) => {
                        return (
                            <Box display={"flex"} flexDirection={"row"} key={index}>
                                <div className={"about_right_img"}></div>
                                <div className={"about_right_desc"}>
                                <span>Bizning mohir oshpazlarimiz</span>
                                <p>
                                    bizning mohir oshpazlarimiz butun dunyo buylab tajriba almashgan va judayam mazzali ovqatlari yurakdan tayyorlaydi!
                                </p>
                                </div>
                    </Box>
                  );
                })};
            </Box>
            </Stack>

            
        </Container>

        <Stack className={"review_for_restaurant"}>
           
               <Box style={{width: "483px", height: "75px",marginLeft: "719px",  display :"flex", justifyContent: "center", alignItems: "center"}}>
                 <h1>Customer's Comment</h1> 
                </Box>
                <Stack sx={{width: "1170px",height: "466px",marginLeft: "375px",marginTop: "45px",display: "flex",flexDirection:"row"}}>
                    <Stack sx={{width: "705px",height: "470px",display: "flex",flexWrap: "wrap"}}>
                    <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim1.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                    <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim2.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                 <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim5.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                            <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim7.jpg"
                              loading="lazy"
                           alt="rasim"
                          />
                            <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim5.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                            <img style={{width: "230px",height: "230px"}} src="/restaurant/rasim6.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                    </Stack>
                    <Stack sx={{ width:"470px",
  height: "470px",
  backgroundColor: "#7DA640"}}>
                    <p className="p2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <Box sx={{display: "flex",flexDirection: "row"}}>
                          <div className="name2">
                          <h3>John Doe</h3>
                          <h5>Food Export</h5>
                          </div>
                          <div>
                          <img src="/restaurant/right-quote 1.png"
                      loading="lazy"
                           alt="rasim"
                          />
                        </div>
                        </Box>
                    </Stack>

                </Stack>
               
               
           
        </Stack>
        <Box style={{width: "170px", height: "184px",marginLeft: "1780px",marginTop: "-300px"}}>
        <img style={{width: "170px",height: "184px"}} src="/restaurant/l.png"
                      loading="lazy"
                           alt="rasim"
                          />
        </Box>
       
        

            <Stack
                sx={{ mt: "60px" }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box className={"category_title"}>Restaurant Address</Box>
                <iframe
                    style={{ marginTop: "60px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
                    width="1320"
                    height="500"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </Stack>
    
    </div>
 }
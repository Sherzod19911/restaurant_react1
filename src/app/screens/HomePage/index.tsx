import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { SpecialMenu } from "./specialMenu";
import { CustomersComments } from "./customersComment";
import { Advertisiments } from "./advertisiment";
import {  MenuPanel } from "./menu";
import { Masters } from "./masters";
import { Footer } from "../../components/footer";
import { Services } from "./Services";

import { useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {setMenuPanel,  setTodaysMenus, } from "../../screens/HomePage/slice"

import { Restaurant } from "../../../types/user";
import { Route, Switch,  useRouteMatch   } from "react-router-dom";
import {TodaysMenus } from "./todaysMenus";
import RestaurantApiService from "../../apiservices/restaurantApiServices";


//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setTodaysMenus: (data: Restaurant[]) => dispach(setTodaysMenus(data)),
  });
//REDUX SELECTOR
const todaysMenusRetriever = createSelector(
    setTodaysMenus,
    (TodaysMenus) => ({
      TodaysMenus,
    })
  );



export function HomePage() {

  //INITIALIZATION
const { setTodaysMenus,  } = actionDispatch(useDispatch());
//selector: store => data
  useEffect (() => {
    const restaurantService = new RestaurantApiService();

    restaurantService
    .getTodaysMenus()
    .then((data) => {
      setTodaysMenus(data);


    }).catch((err: any) => console.log(err));

    restaurantService.getRestaurants({page: 1, limit: 4, order: 'mb_point'}).then(data => {
      setMenuPanel(data);

    }).catch(err => console.log(err));
    
   
}, []);
    return (
    <div className="homepage">
        <TodaysMenus/>
        <MenuPanel/>
        <SpecialMenu/>
        <Advertisiments/>
        <CustomersComments/>
        <Masters/>
        <Services/>
         </div>
    )
}   
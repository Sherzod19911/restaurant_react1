import { Container } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ChosenDish } from "./chosenDish";
import { OneRestaurant } from "./oneRestaurant";
import { AllRestaurants } from "./allRestaurant";
import "../../../css/restaurant.css";
import "../../../css/navbar.css";
import { Services } from "./service";

export function RestaurantPage(props:any) {
    let restaurant = useRouteMatch();
    console.log(restaurant);
    return (
        <div className="restaurant_page">
             <Switch>
        <Route path={`${restaurant.path}/dish/:dish_id`}>
        <ChosenDish onAdd= {props.onAdd}/>
        </Route>
        <Route path={`${restaurant.path}/:restaurant_id`}>
        <OneRestaurant onAdd= {props.onAdd}/>
        </Route>
        <Route path={`${restaurant.path}`}>
          <AllRestaurants />
        </Route>
        <Services/>
       
      </Switch>
   
    </div>
  );
}
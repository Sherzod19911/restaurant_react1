import { BoArticle } from "./boArticle";
import { Order } from "./orders";
import { Product } from "./product";
import { Restaurant } from "./user";
export interface AppRootState {
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
    ordersPage: OrdersPageState

}

export interface HomePageState {
    
    //topRestaurants: Restaurant[];
    todaysMenus: Restaurant[];
    //bestRestaurants: Restaurant[];
    menuPanel: Restaurant[];
    // trendProducts: Product[];
    specialMenu: Product[];
    bestBoarticles: BoArticle[];
    trendBoarticles: BoArticle[];
    newsBoarticles: BoArticle[];
}

 /**RESTAURANT PAGE  */
 export interface RestaurantPageState {
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;

}

/**ORDERS PAGE */
export interface OrdersPageState {
  pausedOrders: Order[],
  processOrders: Order[],
  finishedOrders: Order[]
}
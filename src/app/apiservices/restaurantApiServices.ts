
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { serverApi } from "../../lib/config";
import { Restaurant } from "../../types/user";
import axios from "axios";
import { SearchObj } from "../../types/others";


class RestaurantApiService {
  
    private readonly path: string;
    constructor () {
        this.path = serverApi;
    }
 async getTodaysMenus () {
       try {
            const url = "/restaurants?order=top&page=1&limit=3",
            result = await axios.get(this.path + url, { withCredentials: true });
        console.log("1");
         console.log("url::", url);
         console.log("result::", result);
         assert.ok(result, Definer.general_err1);     

            console.log("state:",  result.data.state);
            const today_menus: Restaurant [] = result.data.data;
            return today_menus;
            console.log("result::", result);
        }catch(err: any) {
            console.log(`error::::getTodaysMenus: ${err.message}`);
            throw err;

        }    
    }

    async getRestaurants (data: SearchObj) {
        try {
             const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`,
             result = await axios.get(this.path + url, { withCredentials: true });
         console.log("1");
          console.log("url::", url);
          console.log("result::", result);
          assert.ok(result, Definer.general_err1);     

            console.log("state:",  result.data.state);
             const restaurants: Restaurant [] = result.data.data;
             return restaurants;
             console.log("result::", result);
         }catch(err: any) {
             console.log(`error::::getRestaurants: ${err.message}`);
             throw err;

         }    
     }

     async getChosenRestaurant(id: string) {
        try {
          const url = `/restaurants/${id}`,
            result = await axios.get(this.path + url, { withCredentials: true });
          assert.ok(result, Definer.general_err1);
    
          console.log("state:", result.data.data);
          const restaurant: Restaurant = result.data.data;
          return restaurant;
        } catch (err: any) {
          console.log(`ERROR ::: getChosenRestaurant ${err.message}`);
          throw err;
        }
      }

}
export default RestaurantApiService;

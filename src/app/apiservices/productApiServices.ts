import { serverApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/product";
import { Restaurant } from "../../types/user";



class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      const url = "/products",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetProducts ${err.message}`);
      throw err;
    }
  }
  async getChosenDish(dish_id: string) {
    try {
      const url = `/products/${dish_id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });
      assert.ok(result, Definer.general_err1);

      console.log("state", result.data.state);
      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenDish ${err.message}`);
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

 export default ProductApiService;
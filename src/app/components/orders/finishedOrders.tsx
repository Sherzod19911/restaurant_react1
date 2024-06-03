// import TabPanel from "@mui/lab/TabPanel";
// import { Box, Stack } from "@mui/material";
// import React from "react";
// import Button from "@mui/material/Button";
// //REDUX
// import { useSelector } from "react-redux";

// import { createSelector } from "reselect";
// import { retrieveFinishedOrders } from "./selector";
// import { Order } from "../../../types/orders";
// import { Product } from "../../../types/product";
// import { serverApi } from "../../../lib/config";

// // REDUX SELECTOR
// const finishedOrdersRetriever = createSelector(
//   retrieveFinishedOrders,
//   (finishedOrders) => ({
//     finishedOrders,
//   })
// );



// // const finishedOrders = [
// //     [1, 2, 3],
// //     [1, 2, 3],
// //     [1, 2, 3]
// // ];

//  export default function FinishedOrders (props: any) {
//     /**INITIALIZATIONS */
//    const { finishedOrders } = useSelector(finishedOrdersRetriever);
//     return (
//         <TabPanel value={"3"}>
//           <Stack>
//           {finishedOrders?.map((order: Order) => {

//                 return (
//                     <Box className={"order_main_box"}>
//                         <Box className={"order_box_scroll"}>
                            
//                         {order.order_items.map((item) => {
//                   const product: Product = order.product_data.filter(
//                     (ele) => ele._id === item.product_id
//                   )[0];
//                   const image_path = `${serverApi}/${product.product_images[0]}`;
//                                 return (
//                                     <Box className={"ordersName_price"}>
//                                         <img src={image_path} className={"orderDishImg"} />
//                                         <p className="titleDish">{product.product_name}</p>

//                                         <Box className={"priceBox"}>
//                                         <p>${item.item_price}</p>

//                                             <img src={"/icons/close.svg"} />
//                                             <p>{item.item_quantity}</p>

//                                             <img src={"/icons/pause.svg"} />
//                                             <p style={{ marginLeft: "15px" }}>${item.item_price * item.item_quantity}</p>
//                                         </Box>
//                                     </Box>
//                                 );
//                             })}   
//                         </Box>

//                         <Box className={"total_price_box red_solid"}>
//                             <Box className={"boxTotal"}>
//                             <p>maxsulot narxi</p>
//                             <p>${order.order_total_amount-order.order_delivery_cost}</p>
//                                 <img
//                                 src={"/icons/plus.svg"}
//                                 style={{marginLeft: "20px" }}
//                                 />
//                                 <p>yetkazish xizmati</p>
//                                 <p>${order.order_delivery_cost}</p>
//                                 <img
//                                 src={"/icons/pause.svg"}
//                                 style={{marginLeft: "20px" }}
//                                 />
//                                 <p> jami narx</p>
//                                 <p>${order.order_total_amount}</p>

//                             </Box>
//                             <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     style={{
//                                         borderRadius: "10px",

//                                     }}
//                                 >
//                                     Bekor qilish
//                                 </Button>

//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     style={{
//                                         borderRadius: "10px",

//                                     }}
//                                 >
//                                     To'lov qilish
//                                 </Button>
//                         </Box>
//                         </Box>
//                     );   
//                  })}
//           </Stack>
//         </TabPanel>
//     )
// }


import { TabPanel } from "@mui/lab";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
//REDUX
import { useSelector } from "react-redux";

import { createSelector } from "reselect";
import { Order } from "../../../types/orders";
import { Product } from "../../../types/product";
import { retrieveFinishedOrders } from "./selector";
import { serverApi } from "../../../lib/config";


// REDUX SELECTOR
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);



export default function FinishedOrders(props: any) {
   /**INITIALIZATIONS */
   const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
              {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product.product_images[0]}`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className="orderDishImg" />
                      <p className="titleDish">{product.product_name}</p>
                      <Box className={"priceBox"}>
                        <p>${item.item_price}</p>
                        <img src="/icons/Close.svg" alt="" />
                        <p>{item.item_quantity}</p>
                        <img src="/icons/Pause.svg" />
                        <p style={{ marginLeft: "15px" }}>${item.item_price * item.item_quantity}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box red_solid"}>
                <Box className={"boxTotal"}>
                  <p>mahsulot narxi</p>
                  <p>${order.order_total_amount-order.order_delivery_cost}</p>
                  <img src="/icons/Plus.svg" style={{ marginLeft: "20px" }} />
                  <p>yetkazish xizmati</p>
                  <p>${order.order_delivery_cost}</p>
                  <img src="/icons/Pause.svg" style={{ marginLeft: "20px" }} />
                  <p>jami narx</p>
                  <p>${order.order_total_amount}</p>
                </Box>
                
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
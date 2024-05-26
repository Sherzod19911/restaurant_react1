import {Box, Button, Container, Stack, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/navbar.css'; 
import '../css/footer.css';  
import { RippleBadge } from './MaterialTheme/styled';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users";
import Dishes from './components/dishes';
import { RestaurantPage } from './screens/RestaurantPage';
import { OrderPage } from './components/orders';
import { ShopPage } from './screens/ShopPage';
import { CommunityPage } from './screens/CommunityPage';
import { HelpPage } from './screens/HelpPage';
import { ContactPage } from './screens/ContactPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { NavbarOthers } from './components/header/others';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarHome } from './components/header';
import { Footer } from './components/footer';
import { MemberPage } from './screens/MemberPage';
import AuthenticationModal from './components/auth';

import { Member } from '../types/user';

import { sweetFailureProvider, sweetTopSmallSuccessAlert } from '../lib/sweetAlert';
import { Definer } from '../lib/Definer';
import assert from 'assert';
import MemberApiService from './apiservices/memberApiServices';

// import "../app/apiServices/verify";
import { CartItem } from "../types/others";
import { Product } from "../types/product";
import { serverApi } from '../lib/config';




function App() { 
    /**INITIALIZATION */   
    const [verifiedMemberData, setVerifiedMemberData] = useState<Member | null>(null); 
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false); // ekranda paydo bulmaydi avtomatik
  const[ loginOpen, setLoginOpen] = useState(false); // ekranda paydo bulmaydi avtomatik

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);



  useEffect (() => {
    console.log("=== useEffect: App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
    ? localStorage.getItem("member_data")
    : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson): null;
    if(member_data) {
      member_data.mb_image = member_data.mb_image 
      ? `${serverApi}/${member_data.mb_image}` 
      : "/auth.jpg";
      setVerifiedMemberData(member_data);
    }

  }, [signUpOpen, loginOpen]);
  /**HANDLERS */
   const handleSignUpOpen = ()  =>  setSignUpOpen((true));    //  ruyxatdan utishni bossa true byulgani uchun ekranda chiqadi
   const handleSignUpClose = ()  =>  setSignUpOpen((false));
   const handleLoginOpen = ()  =>  setLoginOpen((true));  //  kirishni bossa true byulgani uchun ekranda chiqadi
   const handleLoginClose = ()  =>  setLoginOpen((false));

   const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
};

const handleCloseLogOut= (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
};
const handleLogOutRequest = async () => {
  try{
    const memberApiService = new MemberApiService();
      await memberApiService.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    //assert.ok(false, "test")

  }catch(err: any) {
    console.log(err);
    sweetFailureProvider(Definer.general_err1);
  }
};

const onAdd = (product: Product) => {
  const exist: any = cartItems?.find(
    (item: CartItem) => item._id === product._id
  );
  if (exist) {
    const cart_updated = cartItems?.map((item: CartItem) =>
      item._id === product._id
        ? { ...exist, quantity: exist.quantity + 1 }
        : item
    );
    setCartItems(cart_updated)
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  } else {
    const new_item: CartItem = {
      _id: product._id,
      quantity: 1,
      name: product.product_name,
      price: product.product_price,
      image: product.product_images[0],
    };
    const cart_updated = [...cartItems, { ...new_item }];
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  }
};
const onRemove = () => {};
const onDelete = () => {};
const onDeleteAll = () => {};


 return (
    <Router>
  {/* { main_path =="/" ? (
        <NavbarHome setPath={setPath}/>
      ): main_path.includes("/restaurant") ? (
        <NavbarRestaurant/> 
  )
       : (
        <NavbarOthers setPath={setPath}/>
  )} */}

{main_path == '/' ? (
  <NavbarHome setPath={setPath}
  handleLoginOpen = {handleLoginOpen}
  handleSignUpOpen = {handleSignUpOpen}
  anchorEl = {anchorEl}
        open = {open}
        handleLogOutClick ={handleLogOutClick}
        handleLogOutRequest ={handleLogOutRequest}      
        handleCloseLogOut ={handleCloseLogOut}

        verifiedMemberData={verifiedMemberData}
  />
) : main_path.includes("/restaurant") ? (
  <NavbarRestaurant
        handleLoginOpen = {handleLoginOpen}
        handleSignUpOpen = {handleSignUpOpen}
        anchorEl = {anchorEl}
        open = {open}
        handleLogOutClick ={handleLogOutClick}
        handleLogOutRequest ={handleLogOutRequest}      
        handleCloseLogOut ={handleCloseLogOut}

        verifiedMemberData={verifiedMemberData}
        cartItems={cartItems}
        onAdd={onAdd}
        /> 
) : (
  <NavbarOthers setPath={setPath}
  handleLoginOpen = {handleLoginOpen}
  handleSignUpOpen = {handleSignUpOpen}
  anchorEl = {anchorEl}
        open = {open}
        handleLogOutClick ={handleLogOutClick}
        handleLogOutRequest ={handleLogOutRequest}      
        handleCloseLogOut ={handleCloseLogOut}

        verifiedMemberData={verifiedMemberData}
  />
)}

<Switch>
      <Route path="/Restaurant">
      <RestaurantPage onAdd={onAdd} />
        </Route>
       
        <Route path="/shops">
          <ShopPage />
        </Route>
        <Route path="/Order">
          <OrderPage />
        </Route>
       
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/Community">
          <CommunityPage />
        </Route>
        <Route path="/member">
          <MemberPage />
        </Route>
        <Route path="/Contact Us">
          <ContactPage/>
        </Route>
        <Route path="/KIRISH">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>

<Footer/>
<AuthenticationModal
      loginOpen = {loginOpen}
       handleLoginOpen = {handleLoginOpen}
       handleLoginClose = {handleLoginClose}
       SignUpOpen = {signUpOpen}
       handleSignUpOpen = {handleSignUpOpen}       
       handleSignUpClose = {handleSignUpClose}
     />

  </Router>
  );
}




export default App;




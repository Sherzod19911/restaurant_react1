import React from "react";
import  "../../../css/navbar.css";
import { Box, Container, Stack } from "@mui/material";
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/LocationOnRounded';
import { Card } from "@mui/joy";
import Slider from '@mui/joy/Slider';



export function ShopPage() {
    return <div className="shop_page">
        <Container>
            <Stack className="shop_main_css">
              <Box className="shop_left_side">
                <div className="left_title">
                  <h4 className="part1">
                    Current Research
                  </h4>
                  <div className="part2">
                    <a>Burger</a>
                    <a>Restaurant</a>
                     <a>Pizza</a>
                  </div>
                </div>
                <div className="part3">
                  <div className="category">
                    <h4>Refine By Categories</h4>
                  </div>
                  <div className="part4">
                  <div>
                  <input type="checkbox"/>
                  <label>Pizza</label>
                  </div>
                  <div>
                  <input type="checkbox"/>
                  <label>Humburger</label>
                  </div>
                  <div>
                  <input type="checkbox"/>
                  <label>Cold Drink</label>
                  </div>
                  <div>
                  <input type="checkbox"/>
                  <label>Sandwich</label>
                  </div>
                  <div>
                  <input type="checkbox"/>
                  <label>Muffin</label>
                  </div>
                
                  <div>
                  <input type="checkbox"/>
                  <label>Burreto</label>
                  </div>
                    <div>
                  <input type="checkbox"/>
                  <label>Taco</label>
                  </div>
                  <div>
                  <input type="checkbox"/>
                  <label>Hot Dog</label>
                  </div>
                  </div>
                  <div className="part5">
                    <h4>
                      Range Price
                   
                    </h4>
                  </div>
                  
                </div>
               
              </Box>
              <Box className="shop_right_side">
              <CssVarsProvider>

{/* The first restaurants vs codes */}

<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px", marginBottom: "15px",cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo1.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="30px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Burger
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>

    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}

<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px",marginBottom: "15px",cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo2.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Chicken Burger
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>

    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The third restaurants vs codes */}

<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px",marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo3.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Pineapple Pizza
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>


    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The fourth restaurants vs codes */}

<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px", marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo4.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Pineapple Soup
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
  <p>It is Link long established fact that Link reader will be distracted.</p>


    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}

<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px",marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo5.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Momos
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
  <p>It is Link long established fact that Link reader will be distracted.</p>
   it.

    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}

<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px", marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo6.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Pancake
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>


    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}


<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px", marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo7.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Pineapple Pizza
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>

    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}


<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px", marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo8.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Spicy Burger
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>


    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}


<Card
sx={{ minHeight: 360,   
width: 350,     
marginRight: "15px", marginBottom: "15px", cursor: "pointer" 
}}
>    

 <CardContent sx={{ justifyContent: 'flex-end' }}>
 <img className="shop_photo" src="/restaurant/photo9.jpg"
      loading="lazy"
      alt="rasim"
   />
 
  <Typography className="shop_pizza" level="h3" fontSize="24px" textColor="#2222222" mb={"1"} justifyContent={"center"}
alignItems={"center"}>
   Cheese Burger
 </Typography>
 <Typography
   justifyContent={"center"}
   alignItems={"center"} marginLeft={"25px"}
   >
    <p>It is Link long established fact that Link reader will be distracted.</p>


    <h5 className="shop_price">$550</h5>
    <a className="buttun_card">Add to Cart</a>
  </Typography>

  </CardContent>
  

</Card>
{/* The second restaurants vs codes */}



</CssVarsProvider>
              </Box>

            </Stack>
        </Container>
        </div>
}
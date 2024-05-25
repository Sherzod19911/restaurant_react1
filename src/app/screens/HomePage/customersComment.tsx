import React  from "react";
import { Container, Stack } from "@mui/material"
import { Box } from "@mui/joy";
export function CustomersComments() {
    return (
        <div className="Comments_static_frame">
           
                <Box className="Comment_category_title">
                  Customer's Comment
                </Box>
                <Stack className="comments">
                    <Box className="comments_image">
                    <img className="rasim" src="/restaurant/rasim1.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                    <img className="rasim" src="/restaurant/rasim2.jpg"
                      loading="lazy"
                           alt="rasim"
                          />

                 <img className="rasim" src="/restaurant/rasim5.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                            <img className="rasim" src="/restaurant/rasim7.jpg"
                              loading="lazy"
                           alt="rasim"
                          />
                            <img className="rasim" src="/restaurant/rasim5.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                            <img className="rasim" src="/restaurant/rasim6.jpg"
                      loading="lazy"
                           alt="rasim"
                          />
                    </Box>
                    <Box className="comment_right">
                        <p className="p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <Box sx={{display: "flex",flexDirection: "row"}}>
                          <div className="name">
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
                    </Box>
                </Stack>
            
        </div>
    )
}
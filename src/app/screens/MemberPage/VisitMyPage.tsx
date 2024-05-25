import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsIcon from "@mui/icons-material/Settings";


import { MySettings } from "./mySettings";
// OTHERS
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MemberFollowers } from "./MemberFollowers";
import { MemberFollowing } from "./MemberFollowing";
import { MemberPosts } from "./MemberPosts";

import TViewer from "../../components/tuiEditor/TViewer";

export function VisitMyPage(props: any) {
    //INITIALIZIATION
    const [value, setValue] = useState("3");                   

    // HANDLERS
    const handleChange = (event: any, newValue: string) => {
      setValue(newValue);
    };

    return (
      <div className="my_page">
        <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
          <Stack className="my_page_frame">
            <TabContext value={value}>
              <Stack className="my_page_left">
                <Box display={"flex"} flexDirection={"column"}>
                  <TabPanel value="1">
                    <Box className="menu_name">Mening asosiy Maqolalarim</Box>
                    <Box className="menu_content">
                      <MemberPosts/>
                      <Stack
                        sx={{ my: "40px" }}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Box className={"bottom_box"}>
                          <Pagination
                            count={3}
                            page={1}
                            renderItem={(item) => (
                              <PaginationItem
                                components={{
                                  previous: ArrowBackIcon,
                                  next: ArrowForwardIcon,
                                }}
                                {...item}
                                color="secondary"
                              />
                            )}
                          />
                        </Box>
                      </Stack>
                    </Box>
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <Box className={"menu_name"}>Followers</Box>
                    <Box className={"menu_content"}>
                      <MemberFollowers actions_enabled={true} />
                    </Box>
                  </TabPanel>

                  <TabPanel value={"3"}>
                    <Box className={"menu_name"}>Following</Box>
                    <Box className={"menu_content"}>
                      <MemberFollowing actions_enabled={true} />
                    </Box>
                  </TabPanel>

                  <TabPanel value={"4"}>
                    <Box className={"menu_name"}>Maqola Yozish</Box>
                    <Box className={"write_content"}>
                     {/* <TuiEditor/>  */}
                    </Box>
                  </TabPanel>

                  <TabPanel value={"5"}>
                    <Box className={"menu_name"}>Tanlangan Maqola</Box>
                    <Box className={"menu_content"}>
                    <TViewer text={`<h3>Hello</h3>`}/>
                    </Box>
                  </TabPanel>

                  <TabPanel value={"6"}>
                    <Box className={"menu_name"}>Ma'lumotlarni O'zgartirish</Box>
                    <Box className={"menu_content"}><MySettings /></Box>
                  </TabPanel>
                </Box>
              </Stack>

              <Stack className="my_page_right">
                <Box className="order_info_box">
                  <a onClick={() => setValue("6")} className="settings_btn">
                    <SettingsIcon />
                  </a>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <div className="order_user_img">
                      <img    
                        src="/community/gul.svg"
                        className="order_user_avatar"
                      />
                      <div className="order_user_icon_box">
                        <img src="/icons/default_img.svg" alt="" />
                      </div>
                    </div>
                    <span className="order_user_name">Jonny</span>
                    <span className="order_user_prof">USER</span>
                  </Box>
                  <Box className={"user_media_box"}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TelegramIcon />
                    <YouTubeIcon />
                  </Box>
                  <Box className={"user_media_box"}>
                    <p className="follows">Followers:12</p>
                    <p className="follows">Followings:5</p>
                  </Box>
                  <p className="user_desc">"I am an software Engineering!"</p>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    sx={{ mt: "10px" }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                            variant="contained"
                            onClick={() => setValue("4")}
                          >
                            Maqola Yozish
                          </Button>
                        )}
                      />
                    </TabList>
                  </Box>
                </Box>

                <Box className={"my_page_menu"}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"1"}
                      component={() => (
                        <div className={`menu_box ${value}`}>
                          <img src="/icons/pencil.svg" alt="" />
                          <span
                          onClick={() => setValue("1")}>Maqolalarim</span>
                        </div>
                      )}
                    />
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"2"}
                      component={() => (
                          <div className={`menu_box ${value}`}>
                              <img src="/icons/group.svg" alt="" />
                              <span
                              onClick={() => setValue("2")}
                              >Follower</span>
                          </div>
                      )}
                    />
                     <Tab
                      style={{ flexDirection: "column" }}
                      value={"3"}
                      component={() => (
                          <div className={`menu_box ${value}`}>
                              <img src="/icons/user.svg" alt="" />
                              <span
                              onClick={() => setValue("3")}>Following</span>
                          </div>
                      )}
                    />
                  </TabList>
                </Box>
              </Stack>
            </TabContext>
          </Stack>
        </Container>
      </div>
    );
  }
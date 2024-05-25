import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const followers = [
  { mb_nick: "Jonny", following: true },
  { mb_nick: "Max", following: false },
  { mb_nick: "John", following: true },
];

export function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/icons/default_img.svg";
        return (
          <Box className={"follow_box"}>
            <Avatar src={image_url} sx={{ width: 95, height: 95 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "65px",
                height: "85%",
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{follower.mb_nick}</span>
            </div>
            {props.actions_enabled &&
              (follower.following ? (
                <Button
                  variant="contained"
                
                  className="following_already"
                  disabled
                >
                  FOLLOWING
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={
                    <img src="/icons/user.svg" style={{ width: "40px" }} />
                  }
                  className="follow_btn"
                >
                  Follow back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}
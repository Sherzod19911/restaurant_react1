import React  from "react";
import { Container } from "@mui/material"
export function Advertisiments () {
    return (
        <div className="ad_frame ">
          <video
            className={"ads_video"}
            autoPlay={true}
            loop
            muted
            playsInline
            data-video-media=""
          >
             <source
          // data-src="https://fnb-p-c6e19b1675f4.imgix.net/87994cc2-0b2c-4b4e-a402-45c9834c267e/HP-6s-1920x1080-3_def.mp4?auto=compress%2Cformat&amp;fit=min&amp;fm=jpg&amp;q=80"
          type="video/webm"
          src="/restaurant/video.webm"     
        />
          </video>
        </div>
      );
    }
           
        
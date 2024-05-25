import React, { useRef, useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";


const TViewer = (props: any) => {
  const editroRef = useRef();
  return (
    <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{ m: "40px" }}>
        <TViewer
        //@ts-ignore
          ref={editroRef}
          initialValue={props.chosenSingleBoAtticle?.art_content}
          height={"600px"}
        />
      </Box>
    </Stack>
  );
};

export default TViewer
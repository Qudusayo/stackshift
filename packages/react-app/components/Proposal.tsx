import { Box, Button, Typography } from "@mui/material";
import Chip from "@mui/joy/Chip";
import Blockies from "react-blockies";
import React from "react";

export default function Proposal() {
  return (
    <Box
      sx={{
        border: "1px solid #454545",
        borderRadius: "8px",
        padding: "1em",
        my: 2,
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Blockies seed="Jeremy" size={10} scale={3} className="blockie" />
          <Typography>0x468...9B3d</Typography>
        </Box>
        <Chip>Approved</Chip>
      </Box>
      <Typography fontSize={"1.2em"} py={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam est
        aliquam at, doloremque earum praesentium ex modi aperiam culpa.
      </Typography>
      <Typography fontSize={"1em"} pb={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam est
        aliquam at, doloremque earum praesentium ex modi aperiam culpa.
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Typography color={"#06ba06"}>Yes: 100</Typography>
          <Typography color={"#ff2c2c"}>No: 100</Typography>
        </Box>
        <Button variant={"contained"}>Show More</Button>
      </Box>
    </Box>
  );
}

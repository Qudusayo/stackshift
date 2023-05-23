import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { TbPlant2, TbCurrentLocation, TbMoneybag } from "react-icons/tb";
import { IoPeopleCircleSharp } from "react-icons/io5";

export default function Pool() {
  return (
    <Box
      sx={{
        border: "1px solid #454545",
        borderRadius: "8px",
        padding: "1em",
        boxSizing: "border-box",
      }}
      width={"100%"}
    >
      <Box display={"flex"} alignItems={"center"} gap={".25em"} py={2}>
        <TbPlant2 size={25} strokeWidth={1} />
        <Typography pl={1}>
          <b>Crop Type:</b> Cereals
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#454545",
        }}
      />
      <Box display={"flex"} alignItems={"center"} gap={".25em"} py={2}>
        <TbCurrentLocation size={25} strokeWidth={1} />
        <Typography pl={1}>
          <b>Location:</b> Kigali
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#454545",
        }}
      />
      <Box display={"flex"} alignItems={"center"} gap={".25em"} py={2}>
        <TbMoneybag size={25} strokeWidth={1} />
        <Typography pl={1}>
          <b>Contribution:</b> 10 CUSD
        </Typography>
      </Box>
      <Divider
        sx={{
          backgroundColor: "#454545",
        }}
      />
      <Box display={"flex"} alignItems={"center"} gap={".25em"} py={2}>
        <IoPeopleCircleSharp size={25} strokeWidth={1} />
        <Typography pl={1}>
          <b>Memebers:</b> 10
        </Typography>
      </Box>
      <Button
        variant={"outlined"}
        fullWidth
        sx={{
          display: "block",
          marginTop: "1em",
        }}
      >
        Join Pool
      </Button>
    </Box>
  );
}

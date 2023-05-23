import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Create() {
  return (
    <Box>
      <Box width={"90%"} maxWidth={"1024px"} margin={"auto"}>
        <Typography fontSize={"1.2em"} py={4}>
          Create a new pool
        </Typography>
        <TextField
          label="Crop Type"
          type="text"
          variant="filled"
          sx={{
            "& .MuiFormLabel-root": {
              color: "white !important",
            },
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              backgroundColor: "#adadad29",
            },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "white",
            },
          }}
          fullWidth
          focused
        />
        <TextField
          label="Location"
          variant="filled"
          type="text"
          sx={{
            "& .MuiFormLabel-root": {
              color: "white !important",
            },
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              backgroundColor: "#adadad29",
            },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "white",
            },
          }}
          fullWidth
          focused
        />
        <TextField
          label="Contribution ( cUSD )"
          variant="filled"
          type="number"
          sx={{
            "& .MuiFormLabel-root": {
              color: "white !important",
            },
            "& .MuiFilledInput-root": {
              color: "#ffffff",
              backgroundColor: "#adadad29",
            },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "white",
            },
          }}
          fullWidth
          focused
        />

        <Button
          variant="contained"
          sx={{
            mt: 3,
          }}
        >
          Create Pool
        </Button>
      </Box>
    </Box>
  );
}

import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Create() {
  return (
    <Box>
      <Box width={"90%"} maxWidth={"1024px"} margin={"auto"}>
        <Typography fontSize={"1.2em"} py={4}>
          Create a new proposal
        </Typography>
        <TextField
          label="Title"
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
        <Box my={4}>
          <TextField
            label="Description"
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
            multiline
            rows={15}
          />
        </Box>
        <TextField
          label="Discussion ( Optional )"
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

        <Button
          variant="contained"
          sx={{
            mt: 3,
          }}
        >
          Create
        </Button>
      </Box>
    </Box>
  );
}

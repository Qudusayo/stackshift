import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Proposal from "@/components/Proposal";

export default function Proposals() {
  return (
    <Box>
      <Box width={"90%"} maxWidth={"1024px"} margin={"auto"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={4}
        >
          <Typography fontSize={"1.2em"}>Proposals</Typography>
          <Link href={"/create-proposal"}>
            <Button variant={"contained"}>Create a new proposal</Button>
          </Link>
        </Box>
        <Box>
          <Proposal />
          <Proposal />
          <Proposal />
        </Box>
      </Box>
    </Box>
  );
}

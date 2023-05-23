import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Pool from "@/components/Pool";
import Link from "next/link";

export default function Pools() {
  return (
    <Box>
      <Box width={"90%"} maxWidth={"1024px"} margin={"auto"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={4}
        >
          <Typography fontSize={"1.275em"}>Pools</Typography>
          <Link href={"/create-new-pool"}>
            <Button variant={"contained"}>Create new pool</Button>
          </Link>
        </Box>
        <Box my={2} mb={4}>
          <Grid container spacing={2}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={6} sm={6} md={6} key={index}>
                <Pool />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

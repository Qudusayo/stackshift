import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2em;
`;

export default function Header() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"90%"}
      maxWidth={"1024px"}
      margin={"auto"}
      py={1}
    >
      <Box>
        <Link href={"/pools"}>
          <Typography fontSize={24}>FarmSure</Typography>
        </Link>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <List>
          <li>
            <Link href={"/pools"}>Pools</Link>
          </li>
          <li>
            <Link href={"/proposals"}>Proposals</Link>
          </li>
        </List>
        <ConnectButton showBalance={false} chainStatus={"none"} />
      </Box>
    </Box>
  );
}

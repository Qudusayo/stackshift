import { FC, ReactNode } from "react";
import Header from "./Header";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Box>
        <Box
          borderBottom={"1px solid #454545"}
          position={"sticky"}
          top={0}
          sx={{
            background: "#161b22",
            zIndex: 1000,
          }}
        >
          <Header />
        </Box>
        <div>{children}</div>
      </Box>
    </>
  );
};

export default Layout;

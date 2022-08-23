import { AppBar, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../images/LSV.svg";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "200px",
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { NavBar };

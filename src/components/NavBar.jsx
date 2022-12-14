import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { MuiTheme } from "../MuiThemeContext/MuiTheme";
import CartWidget from "./CartWidget";

const pages = [
  { link: "/genre/action", name: "action" },
  { link: "/genre/comedy", name: "comedy" },
  { link: "/genre/horror", name: "horror" },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src="https://i.postimg.cc/fbHsSmdq/blockbuster-1.png"
                  alt="blockbuster logo"
                  style={{ width: "4.5rem" }}
                />
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink
                        to={page.link}
                        style={{ textDecoration: "none", color: "grey" }}
                      >
                        {page.name}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src="https://i.postimg.cc/fbHsSmdq/blockbuster-1.png"
                  alt="blockbuster logo"
                  style={{ width: "4.5rem" }}
                />
              </NavLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page.name} sx={{ my: 2, display: "block" }}>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    to={page.link}
                  >
                    {page.name}
                  </NavLink>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <NavLink
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                <CartWidget />
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;

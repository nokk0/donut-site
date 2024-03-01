import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {
  Button,
  Box,
  Typography,
  AppBar,
  Grid,
  Toolbar,
  Drawer,
  Menu,
  MenuItem,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
import { StlyedLink } from "./styles";
import { colors } from "./theme";
import { CtaButton } from "./Common/CtaButton";
import { StlyedMenu } from "./styles";

function Logo() {
  return (
    <Typography
      sx={{
        color: "customColor.secondary",
        fontWeight: 900,
      }}
    >
      DB
    </Typography>
  );

  // border-2 border-rose-500
}

function Nav() {
  const links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "PRODUCTS", link: "/product" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer((prevValue) => !prevValue);
    setOpen((prevValue) => !prevValue);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "customColor.primary",
        boxShadow: "none",
        height: "10vh",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {/* border-2 border-yellow-300 */}

        <Logo />

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            color: "customColor.secondary",
            fontSize: "3rem",
            cursor: "pointer",
          }}
          onClick={handleDrawerToggle}
        >
          <ion-icon name={open ? "close" : "menu"} />
        </Box>
        {/* <ul> */}
        <Drawer
          anchor="top"
          open={openDrawer}
          onClose={handleDrawerToggle}
          sx={
            {
              // "& .MuiDrawer-paper": {
              //   marginTop: "10vh", // Adjust as needed this is the space on the navbar
              // },
            }
          }
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "65vh",
              backgroundColor: "customColor.tetiary",
            }}
          >
            <List sx={{ paddingTop: 0 }}>
              <>
                {/* NavBar header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    // height: "10vh",
                    backgroundColor: "customColor.tetiary",
                    padding: "0px 23px",
                  }}
                >
                  {/* <Box sx={{display:'none'}}> a</Box> */}
                  <Logo />
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      color: "customColor.secondary",
                      fontSize: "3rem",
                      cursor: "pointer",
                    }}
                    onClick={handleDrawerToggle}
                  >
                    <ion-icon name={open ? "close" : "menu"} />
                  </Box>
                </Box>
                {/* Navbar Items */}
                {links.map((item, index) => (
                  <MenuItem
                    key={index}
                    // onClick={}
                    sx={{ borderBottom: "0.1px solid #CCC" }}
                  >
                    <StlyedLink onClick={handleDrawerToggle} key={item.name} to={item.link}>
                      <ListItemText>
                        <Typography variant="navItem">{item.name}</Typography>
                      </ListItemText>
                    </StlyedLink>
                  </MenuItem>
                ))}
              </>
            </List>
          </Box>
        </Drawer>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            gap: 3,
            marginRight: 7,
          }}
        >
          {/* border-2 border-rose-500 */}

          {links.map((link) => (
            <StlyedLink
              key={link.name}
              to={link.link}
              sx={{
                color: "customColor.secondary",
              }}
            >
              {" "}
              {link.name}
            </StlyedLink>
          ))}
        </Box>
        {/* </ul> */}
      </Toolbar>
    </AppBar>
  );
}

function Home() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            sx={{ gap: 2 }}
            direction="column"
            marginX="auto"
            justifyContent="center"
          >
            <Typography variant="v1">
              HELLO <br /> DONUTS
            </Typography>

            <Typography variant="v2">
              A healthy taste of deliciousness
            </Typography>

            <CtaButton variant="outlined"> CONTACT US </CtaButton>
          </Grid>
        </Grid>
      </Grid>

      {/* <button class='cta'> CONTACT US</button> */}
    </>
  );
}

function About() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            sx={{ gap: 2 }}
            direction="column"
            marginX="auto"
            justifyContent="center"
          >
            <Typography variant="v1">
              About us
            </Typography>

            <Typography variant="v2">
            Leran more about our company and mission
            </Typography>

            <CtaButton variant="outlined"> CONTACT US </CtaButton>
          </Grid>
        </Grid>
      </Grid>

      
    </>
  );
}

function Product() {
  return (

    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            sx={{ gap: 2 }}
            direction="column"
            marginX="auto"
            justifyContent="center"
          >
            <Typography variant="v1">
              Products
            </Typography>

            <Typography variant="v2">
            This is a line of our products
            </Typography>

            <CtaButton variant="outlined"> CONTACT US </CtaButton>
          </Grid>
        </Grid>
      </Grid>

      
    </>
  );
}

function Contact() {
  return (

    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            sx={{ gap: 2 }}
            direction="column"
            marginX="auto"
            justifyContent="center"
          >
            <Typography variant="v1">
              Contact us
            </Typography>

            <Typography variant="v2">
            Get in touch with us!
            </Typography>

            <CtaButton variant="outlined"> CONTACT US </CtaButton>
          </Grid>
        </Grid>
      </Grid>

      
    </>
  );
}

function App() {
  return (
    <Router>
      <Nav />

      <Box sx={{ backgroundColor:'customColor.primary'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

{
  /* <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link> */
}

// material UI styling.

import React from "react"
// import { Link } from "gatsby"
import "./navbar.scss"
import { AppBar, Box, Toolbar, Drawer, IconButton, Typography, Divider, List, ListItem, Grid } from "@mui/material"
import { Menu } from "@mui/icons-material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const drawerWidth = 240

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// eslint-disable-next-line react/no-unused-prop-types
export const NavBar = (props: { color?: "white" | "black", children?: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2, color: "#53b7e6" }}>
        FIGHTER TOOL KIT
      </Typography>
      <Divider />
      <List>
        <a href="/">
          <List id="list-item">
            Home
          </List>
        </a>
        <a href="/fighters">
          <List id="list-item">
            Fighters
          </List>
        </a>
        <a href="/portfolio">
          <List id="list-item">
            Portfolio
          </List>
        </a>

      </List>
    </Box>
  )

  return (
    <Box>
      <AppBar component="nav" className="nav">
        <Box className="nav-address hidden-tablet hidden-mobile">
          469-545-0009 <br />
          2221 Lakeside Blvd Ste 100, Richardson, TX 75082
        </Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu fontSize="large" sx={{ color: "#53b7e6" }} />
          </IconButton>
          <Grid
            container
            direction={{ xs: "column", lg: "row" }}
            justifyContent={{ xs: "center", lg: "space-between" }}
            alignItems="center"
          >
            <Grid item>
              <Box>
                <a href="/">
                  {/* <img alt="nexrage studios logo" className="nexrage-logo hidden-mobile hidden-tablet" src={logo} /> */}
                </a>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={{ display: { xs: "none", sm: "block" }, color: "black" }}>
                <List sx={{ display: "flex" }}>
                  <ListItem>
                    <a href="/" className="link">
                      <Typography variant="subtitle1">
                        Home
                      </Typography>
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="/services" className="link">
                      <Typography variant="subtitle1">
                        Services
                      </Typography>
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="/portfolio" className="link">
                      <Typography variant="subtitle1">
                        Portfolio
                      </Typography>
                    </a>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box style={{ overflow: "hidden", backgroundColor: "#f5f5f5" }} padding={{ xs: "100px 50px 0 40px", md: "200px 50px 0 50px" }}>
        {props.children}
      </Box>
    </Box>
  )
}

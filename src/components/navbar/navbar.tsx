import React from "react"
import "./navbar.scss"
import { AppBar, Box, Toolbar, Drawer, IconButton, Typography, Divider, List, ListItem, Grid } from "@mui/material"
import { Menu } from "@mui/icons-material"
import { Link } from "react-router-dom"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


import logo from "../../assets/logo/logo.png"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// eslint-disable-next-line react/no-unused-prop-types
export const NavBar = (props: { color?: "white" | "black", children?: React.ReactNode }) => {
  const drawerWidth = 240
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ my: 2, color: "rgb(25,25,25)" }}>
        FIGHTER TOOL KIT
      </Typography>
      <Divider />
      <List>

        <List id="list-item">
            Home
        </List>


        <List id="list-item">
            Fighters
        </List>

        <List id="list-item">
            Contact
        </List>
      </List>
    </Box>
  )

  return (
    <Box>

      <AppBar component="nav" className="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu fontSize="large" sx={{ color: "rgb(25,25,25)" }} />
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
                  <img alt="ftk logo" className="nexrage-logo hidden-mobile hidden-tablet" src={logo} />
                </a>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={{ display: { xs: "none", sm: "block" }, color: "black" }}>
                <List sx={{ display: "flex" }}>
                  <ListItem>
                    <Link to="/">

                      <Typography variant="subtitle1" className="link">
                          Home
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/games">
                      <Typography variant="subtitle1" className="link">
                        Fighters
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/">
                      <Typography variant="subtitle1" className="link">
                        Contact
                      </Typography>
                    </Link>
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

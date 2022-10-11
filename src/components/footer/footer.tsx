import React from "react"
// import { Link } from "gatsby"
import { Container, Grid, Box, Typography } from "@mui/material"
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./footer.scss"
import logo from "../../assets/logo/logo-footer.png"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Footer() {
  return (
    <>
      <Container maxWidth={false} sx={{ color: "white" }} id="footer-master">
        <Grid container gap={{ xs: 12, md: 0 }} direction={{ xs: "column", md: "row" }} justifyContent={{ xs: "center", md: "space-around" }} sx={{ px: "50px", pt: "100px" }}>
          <Grid item>
            <Box>
              <img src={logo} alt="logo" />
              <Typography variant="h2">FIGHTER TOOL KIT</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box><h2>Contact</h2></Box>
            <Box>
              <a href="fightertoolkit@gmail.com" className="link">Email</a>
            </Box>
          </Grid>
          <Grid item>
            <Box><h2>Follow Us</h2></Box>
            <Box sx={{ mt: "10px" }}>
              <a aria-label="link" href="https://www.twitter.com/fightertoolkit" className="link"><Twitter sx={{ fontSize: "60px" }} /></a>
            </Box>
          </Grid>
          <Grid item>
            <Grid item><a href="/" className="link" color="white"><h2>Home</h2></a></Grid>
            <Grid item><a href="/fighters" className="link" color="white"><h2>Fighters</h2></a></Grid>
            <Grid item><a href="/whatsnew" className="link" color="white"><h2>What's New</h2></a></Grid>

          </Grid>
        </Grid>
        <Box className="footer-border" />
        <Grid container justifyContent={{ xs: "center", md: "space-between" }} sx={{ pb: "40px" }}>
          <Grid item>
            <Box className="copy-right-text">
              <p>Fighter Tool Kit,  All Rights Reserved 2022</p>
            </Box>
          </Grid>
          <Grid item>
            <Box className="site-map-text-row">
              {/* <a href="/pagemap">Sitemap</a> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

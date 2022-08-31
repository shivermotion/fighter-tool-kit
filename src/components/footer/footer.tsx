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
          {/* <Grid item>
            <Box><h2>Services</h2></Box>
            <Box><a href="/services/custom-software-development/" className="link" color="white">Custom Software Development</a></Box>
            <Box><a href="/services/android-app-development/" className="link" color="white">Android App Development</a></Box>
            <Box><a href="/services/ios-app-development/" className="link" color="white">iOS App Development</a></Box>
            <Box><a href="/services/cross-platform-app/" className="link" color="white">Cross-Platform App Development</a></Box>
            <Box><a href="/services/website-design-and-development/" className="link" color="white">Website Design and Development</a></Box>
            <Box><a href="/services/turnkey/" className="link" color="white">Turnkey Website Development</a></Box>
            <Box><a href="/services/seo/" className="link" color="white">Search Engine Optimization</a></Box>
          </Grid> */}
          <Grid item>
            <Box><h2>Contact</h2></Box>
            <Box>
              <a href="shiver_motion@hotmail.com" className="link"> Email</a>
            </Box>
          </Grid>
          <Grid item>
            <Box><h2>Follow Us</h2></Box>
            <Box sx={{ mt: "10px" }}>
              <a aria-label="link" href="https://www.facebook.com/nexragestudios" className="link"><Facebook sx={{ fontSize: "30px" }} /></a>
              <a aria-label="link" href="https://www.instagram.com/nexragestudios" className="link"><Instagram sx={{ fontSize: "30px" }} /></a>
              <a aria-label="link" href="https://www.twitter.com/nexragestudios" className="link"><Twitter sx={{ fontSize: "30px" }} /></a>
              <a aria-label="link" href="https://www.aedin.com/company/nexrage-studios-llc" className="link"><LinkedIn sx={{ fontSize: "30px" }} /></a>
            </Box>
          </Grid>
          <Grid item>
            <Grid item><a href="/" className="link" color="white"><h2>Home</h2></a></Grid>
            <Grid item><a href="/fighters/" className="link" color="white"><h2>Fighters</h2></a></Grid>
            <Grid item><a href="/contact/" className="link" color="white"><h2>Portfolio</h2></a></Grid>
            {/* <Grid item><a href="/our-team/" className="link" color="white"><h2>Our Team</h2></a></Grid> */}
            {/* <Grid item><a href="/blogs/" className="link" color="white"><h2>Blogs</h2></a></Grid> */}
            {/* <Grid item><a href="/contact/" className="link" color="white"><h2>Contact</h2></a></Grid> */}
          </Grid>
        </Grid>
        <Box className="footer-border" />
        <Grid container justifyContent={{ xs: "center", md: "space-between" }} sx={{ pb: "40px" }}>
          <Grid item>
            <Box className="copy-right-text">
              <p>Fighter Tool Kit, All Rights Reserved 2022</p>
            </Box>
          </Grid>
          <Grid item>
            <Box className="site-map-text-row">
              <a href="/pagemap">Sitemap</a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

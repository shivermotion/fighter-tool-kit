import React from "react"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import Header from "../components/header/header"
import { NavBar } from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"
import FeaturedScrollBanner from "../components/featured-scroll-banner/featured-scroll-banner"
import MultiCard from "../components/non-featured-media-card/multi-card"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const Home = () => (
  <Box style={{ backgroundColor: "whitesmoke" }}>
    <ThemeWrapper>
      <NavBar>
        <Header logo={null} title="FIGHTER TOOL KIT" link="" />
      </NavBar>
      <Container style={{ backgroundColor: "whitesmoke" }}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <FeaturedScrollBanner />
          </Grid>
          <Grid container xs={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Grid item xs={12} md={6} sx={{ paddingRight: "1rem", paddingTop: "1rem" }}>
              <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
                <MultiCard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingRight: "1rem", paddingTop: "1rem" }}>
              <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
                <MultiCard />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeWrapper>
  </Box>
)

export default Home


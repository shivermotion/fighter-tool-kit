import React from "react"
import { Box, CardMedia, Container, Divider, Grid, Paper, Typography } from "@mui/material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Header from "../components/header/header"
import { NavBar } from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"
import FeaturedScrollBanner from "../components/featured-scroll-banner/featured-scroll-banner"
import MultiCard from "../components/non-featured-media-card/multi-card"
import FeaturedArtScroller from "../components/featured-art-scroller/featured-art-scroller"
import teamSamurai from "../assets/blog-assets/team-samurai.jpg"
import evo from "../assets/blog-assets/evo.jpg"
import TwitchPlayer from "../components/twitch-player/twitch-player"
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
          <Typography>NEWS</Typography>
          <Grid item xs={12}>
            <Divider />
            <FeaturedScrollBanner />
          </Grid>
          <Grid container xs={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>

            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: "2rem" }}>WELCOME TO FIGHTER TOOL KIT </Typography>
              <Divider />
              <Paper
                sx={{ ":hover": {
                  boxShadow: 20,
                } }}
                style={{ backgroundColor: "black", boxShadow: "none", borderRadius: "22px" }}
              >
                <MultiCard image={teamSamurai} title="Team Samurai Announced" description="Following the conclusion of their Evo 2022 grand finals, the developers announced Team Samurai Shodown is coming to KOF15 as the final DLC additions of Season 1 plus the confirmation that fan-favorites Shingo Yabuki and Kim Kaphwan are coming in Season 2." />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: "2rem" }}>BLOG</Typography>
              <Divider />
              <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
                <MultiCard image={evo} title="EVO FG Tourney Returns!" description="These past two years have been challenging to say the very least, for many reasons. The world has never experienced the things we have gone through and are still going through to this day. We are grateful that we have been able to come together through our passion for fighting games and play with one another in online events." />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Typography sx={{ mb: "2rem" }}>FEATURED ART</Typography>
            <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
              <FeaturedArtScroller />
            </Paper>
          </Grid>
        </Grid>
        <Divider />
        <Typography sx={{ mb: "2rem" }}>TWITTER</Typography>
        <div id="curator-feed-default-feed-layout">
          <a href="https://curator.io" target="_blank" className="crt-logo crt-tag" rel="noreferrer">Powered by Curator.io</a>
        </div>
      </Container>
      <Footer />
    </ThemeWrapper>
  </Box>
)

export default Home


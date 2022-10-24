import React from "react"
import { Box, CardMedia, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Link } from "react-router-dom"
import Header from "../components/header/header"
import { NavBar } from "../components/navbar/navbar"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"
import FeaturedScrollBanner from "../components/featured-scroll-banner/featured-scroll-banner"
import MultiCard from "../components/non-featured-media-card/multi-card"
import FeaturedArtScroller from "../components/featured-art-scroller/featured-art-scroller"
import fightStick from "../assets/blog-assets/fightstick.jpg"
import twitter from "../assets/blog-assets/twitter.png"
import FeatureBar from "../components/feature-bar/feature-bar"
import SEO from "../components/seo-helmet/seo-helmet"
import kof15 from "../assets/blog-assets/kof15screen.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const Home = () => (
  <>
    <SEO
      title="Fighter Tool Kit | Home"
      description="Fighting Game List - featuring Street Fighter, Mortal Kombat, Tekken, and more.
      Including character moves, combos, and more. Home Page"
      name="Fighter Tool Kit"
      type="website"
    />
    <Box style={{ backgroundColor: "whitesmoke" }}>
      <ThemeWrapper>
        <NavBar>
          <Header logo={null} title="FIGHTER TOOL KIT" link="" />
        </NavBar>
        <Container style={{ backgroundColor: "whitesmoke" }}>
          <Grid container>
            <Typography>HILIGHTS</Typography>
            <Grid item xs={12}>
              <Divider />
              <FeaturedScrollBanner />
            </Grid>
            <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: "2rem" }}>WELCOME TO FIGHTER TOOL KIT </Typography>
                <Divider />
                <Link to="/whatsnew/welcome"> <Paper
                  sx={{
                    ":hover": {
                      boxShadow: 20,
                    },
                  }}
                  style={{ backgroundColor: "black", boxShadow: "none", borderRadius: "22px" }}
                >
                  <MultiCard image={fightStick} title="What is Fighter Tool Kit?" description="A new kind of fighting game site with its own kind of style. What is Fighter Tool Kit?" />
                </Paper>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: "2rem" }}>ADD US ON TWITTER</Typography>
                {/* <Typography sx={{ mt: "2rem" }}>BLOG</Typography> */}
                <Divider />
                <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
                  <a href="https://twitter.com/fightertoolkit" aria-label="twitter link"><MultiCard image={twitter} title="ADD US ON TWITTER" description="@fightertoolkit" /></a>
                </Paper>
              </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>

              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: "2rem" }}>MATCH HIGHLIGHT</Typography>
                <Divider style={{ marginBottom: "1rem" }} />
                <Grid item>
                  <CardMedia
                    component="iframe"
                    title="Match Highlight"
                    src="https://www.youtube.com/embed/JzS96auqau0"
                  />
                  <Typography sx={{ mt: "2rem" }}>You've seen it, you know it by heart. Now watch it again with empty mind.</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: "2rem" }}>LATEST FIGHTER TOOL KIT UPDATE</Typography>
                <Divider style={{ marginBottom: "1rem" }} />
                <Link to="/fighters/kof15">
                  <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
                    <MultiCard image={kof15} title="King of Fighter 15 Data and Moves" description="Dig into the fighter tool kit and get all the frame data and move list/stats for KOFXV" />
                  </Paper>
                </Link>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <Typography sx={{ mt: "2rem" }}>GEAR REVIEW</Typography>
                <Divider />
                <Paper style={{ backgroundColor: "whitesmoke", boxShadow: "none", borderRadius: "22px" }}>
                  <MultiCard image={evo} title="EVO FG Tourney Returns!" description="These past two years have been challenging to say the very least, for many reasons. The world has never experienced the things we have gone through and are still going through to this day. We are grateful that we have been able to come together through our passion for fighting games and play with one another in online events." />
                </Paper>
              </Grid> */}
            </Grid>
            {/* future feature bar */}
            {/* <Grid container>
      <Grid item xs={12}>
        <FeatureBar />
      </Grid>
    </Grid> */}
            <Grid item xs={12}>
              <Typography sx={{ mt: "2rem" }}>SUPPORT THIS SITE - SHOP AT PLAYASIA USING THIS LINK</Typography>
              <Divider style={{ marginBottom: "1rem" }} /> <iframe id="id01_611265" title="affiliate link" src="https://www.play-asia.com/38/190%2C000000%2Cnone%2C0%2C0%2C0%2C0%2CFFFFFF%2C000000%2Cleft%2C0%2C0-391-76a-70204t-062-783c-2910_2351_2353_3137_3147_3169_3375_3401_3411_3451_3529-9031tfb-44500" style={{ borderStyle: "groove", borderWidth: "2px", borderColor: "black", padding: "0", margin: "0", width: "100%", height: "20rem" }} />
              <script type="text/javascript">var t = "";t += window.location;t = t.replace( /#.*$/g, "" ).replace( /^.*:\/*/i, "" ).replace( /\./g, "[dot]" ).replace( /\//g, "[obs]" ).replace( /-/g, "[dash]" );t = encodeURIComponent( encodeURIComponent( t ) );var iframe = document.getElementById( "id01_611265" );iframe.src = iframe.src.replace( "iframe_banner", t );      </script>

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
          {/* <Typography sx={{ mb: "2rem" }}>TWITTER</Typography> */}

        </Container>
      </ThemeWrapper>
    </Box></>
)

export default Home


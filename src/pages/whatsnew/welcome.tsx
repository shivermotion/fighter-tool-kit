import React from "react"
import { Link } from "react-router-dom"
import { Grid, Box, Container, Typography, Divider, Avatar } from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Header from "../../components/header/header"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import SEO from "../../components/seo-helmet/seo-helmet"
import fightStick from "../../assets/blog-assets/fightstick.jpg"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export function FeatArticle() {
  return (
    <ThemeWrapper>
      <SEO title="Welcome to Fighter Tool Kit" description="Welcome to Fighter Tool Kit" name="Fighter Tool Kit" type="Blog" image="test" />
      <NavBar>
        <Header logo={null} title="Welcome to Fighter Tool Kit" link="" />
      </NavBar>

      <Container sx={{ mb: "8rem" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          my="5rem"
        >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mb: "2rem" }}>
            <img src={fightStick} alt={fightStick} style={{ maxWidth: "800px", display: "flex", justifyContent: "center", width: "100%" }} />
          </Grid>
          <Grid item mt="1rem" mx="2rem">
            <Typography variant="body1">
              By creating a unique, visually aesthetic, and easy-to-use website,
              your visitors will prefer you over your competitors. 88% of polled
              users said that they were less likely to return to a website after a
              bad experience and 85% of adults feel that a company's mobile website
              should be as good as or better than their desktop website.
              <a href="https://uxcam.com/blog/ux-statistics/">bluespace</a> The
              pressure is on. Not only does your desktop site have to go above and
              beyond, but your mobile site has to be even better.
            </Typography>
          </Grid>
          <Divider variant="middle" sx={{ borderColor: "black" }} />

          <Grid
            container
            direction={{ xs: "column", lg: "row" }}
            alignItems="center"
            mt="2rem"
          >
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "center" }} my="2rem">
                {/* <img className="blog-author-img" src={pic} alt="author " /> */}
                <Avatar alt="Jason Day" src="/static/images/avatar/1.jpg" />
              </Box>
            </Grid>
            <Grid item>
              <Box>

                <Typography
                  textAlign={{ xs: "center", lg: "start" }}
                  className="blog-author-name link"
                >
                    By: rawr
                </Typography>

                <Typography textAlign={{ xs: "center", lg: "start" }}>
                 rawr
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box mx="2rem">
          <Typography variant="subtitle1" mb="1rem" sx={{ paddingLeft: "1rem", borderLeft: "3px solid black" }}>
            As a web design and development company, we must stay on top of the
            UI/UX design. So, we've compiled a list of the top web design trends
            that you should keep an eye out for when you redesign your website.
            These trends will surely set you apart from your competitors.
          </Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Currently Supporting</Typography>
          <Typography variant="subtitle1" mb="1rem">
          - King of Fighters XIV
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
          - Street Fighter V
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
          - Street Fighter VI
          </Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Plans for Supporting in the Near Future</Typography>
          <Typography variant="subtitle1" mb="1rem">
          - Mortal Kombat
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
          - Tekken 8
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
          - Super Smash Bros
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
          - Many More Games to come!
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
           Expect Frame Data, Combos, and more!
          </Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">Hear What Others Are Saying in the Fighting Game Community</Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">News, Blogs, Features</Typography>
          <Typography variant="subtitle1" mb="1rem">
            As people spend more and more time on their devices,
            <b>dark mode</b> is becoming more and more popular. There are a lot
            of conflicting scientific and personal opinions online whether dark
            mode is beneficial for your eyes and circadian rhythm. Many websites
            and operating systems are offering dark theme options. Windows and
            MacOS rolled out dark mode options in 2018. Falling behind by two
            years, Facebook released its dark mode, in 2020. Chrome and Google
            have pushed out a dark state that mimics your desktop settings.
            YouTube and Snapchat have also enabled a dark mode (although not
            available for Snapchat on all devices.)
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }} my="2rem">
            {/* <img className="blog-image" alt="dark theme" src={darkTheme} /> */}
          </Box>
          <Typography variant="subtitle1" mb="1rem">
            Darker colors tend to be considered more moody, elegant, and clean.
            You will need to consider how the dark theme will affect how your
            users interact and interpret your business. Regardless, the theme
            can save battery power, and has amassed many fans. Approximately
            82.7% (out of a total of 201) polled use dark mode instead of the
            default light themes.
            <a href="https://www.searchenginewatch.com/2020/09/30/why-dark-mode-web-designs-are-gaining-popularity/">
              Search Engine Watch
            </a>
            Few websites utilize a dark theme, so by using dark colors and light
            text you will set yourself apart from your competitors and ahead of
            the curve.
          </Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">Match Breakdowns, Gear Reviews, Featured Art, Tool Kit Updates</Typography>
          <Typography variant="subtitle1" mb="1rem">
            What is <b>minimalism?</b> Minimalism is a concept that embodies
            "less is more". There are a few different ways to utilize minimalism
            for your website design. Based on weight, size, and tones components
            such as white space, color, shapes, and typography embody
            minimalism. Embrace the white space on your website, just because it
            is called "white space" doesn't mean it has to be white. Color and
            shapes will make an even larger impact with fewer elements.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }} my="2rem">
            {/* <img className="blog-image" alt="minimalist" src={minimalist} /> */}
          </Box>


          <Typography variant="subtitle1" mb="1rem">
            The experience your users have on your site will determine whether
            they do business with you, whether they recommend your business to
            their friends, and if they will remember you.
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            Make your website both beautiful and usable, capture the interest of
            your visitors and provide useful information.
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            Check out our other blog,
            <Link to="/blogs/6-practices-for-aesthetic-ui/" className="link">
              6 Simple Practices to Creating Aesthetic UI.
            </Link>
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            Want to write for us? Email us at,
            <Link to="/contact/" className="link"> contact us today.</Link>
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Container maxWidth="lg" sx={{ marginTop: "4rem" }}>
        {/* <!-- begin wwww.htmlcommentbox.com --> */}
        <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Box</a> is loading comments...</div>
        <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/simple/skin.css" />
        {/* <!-- end www.htmlcommentbox.com --> */}
      </Container>
    </ThemeWrapper>
  )
}

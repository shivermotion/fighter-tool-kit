import React from "react"
import { Link } from "react-router-dom"
import {
  Grid,
  Box,
  Container,
  Typography,
  Divider,
  Avatar,
} from "@mui/material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import Header from "../../components/header/header"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import SEO from "../../components/seo-helmet/seo-helmet"
import battleHub from "../../assets/blog-assets/battlehub-min.jpg"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export function Blog() {
  return (
    <ThemeWrapper>
      <SEO
        title="Street Fighter 6 - Surpassing Your Expectation from a Fighting Game Beta"
        description="One of the most popular fighting game franchises just completed its beta testing of their latest addition Street Fighter 6 and the fans were not expecting things to get this spicy."
        name="Fighter Tool Kit"
        type="Blog"
        image="test"
      />
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
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", mb: "2rem" }}
          >
            <img
              src={battleHub}
              alt={battleHub}
              style={{
                maxWidth: "800px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item mt="1rem" mx="2rem">
            <Typography variant="body1">
              Capcom is looking to fierce kick the competition
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
                  By: i_ghori
                </Typography>

                <Typography textAlign={{ xs: "center", lg: "start" }}>
                  10/22/2022
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box mx="2rem">
          <Typography
            variant="subtitle1"
            mb="1rem"
            sx={{ paddingLeft: "1rem", borderLeft: "3px solid black" }}
          >
            One of the most popular fighting game franchises just completed its
            beta testing of their latest addition Street Fighter 6 and the fans
            were not expecting things to get this spicy.
          </Typography>
          <Typography
            variant="subtitle1"
            mb="1rem"
            sx={{ paddingLeft: "1rem", borderLeft: "3px solid black" }}
          >
            Capcom had just opened the game for Beta testing from October 7th to
            10th and the game really made an impact. Street fighter 6 has some
            beautiful and vibrant visuals that are complemented by the mixture
            of previous gameplay mechanics, making the title extremely fun to
            say the very least.
          </Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Drive System
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            Some fresh stuff like the Drive system had been introduced that has
            allowed the characters to be a lot more diverse. It is loved by some
            fans while others are finding it really annoying to deal with. In
            their latest instalment, Street Fighter has set the sixth entry in a
            way that there is no high-skill cap for people who are just getting
            into the fighting game genre, making the game basically for
            everyone.
          </Typography>

          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Great Multiplayer Mode
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            The Beta testing did not allow the players to experience the whole
            roster and the story mode was also inaccessible. But what was not
            inaccessible was the enjoyment the new player had and the nostalgia
            the veterans felt in the game’s seamless online multiplayer mode.
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            The game has introduced a whole system of online matchmaking called
            The Battle Hub and even though it is not a completely fresh thing,
            it certainly is a great addition to let players from around the
            world find matches without waiting.{" "}
          </Typography>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Avatar Customisability
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            One thing that the players have been absolutely loving with this
            Battle hub design is the amount of customizability they can get for
            their character. You can almost adjust anything about the character
            according to whatever you like and by that I absolutely mean
            everything.
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            Along with the crazy amount of customizability, a field where the
            franchise has absolutely nailed it is the new training system that
            actually feels rewarding. Unlike Tekken 7’s training mode, Street
            Fighter 6 has brought an amazing training system that would actually
            help you enjoy all that time you would be spending inside the mode
            as you learn various moves and combos.{" "}
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            With all these goodies, Street fighter has brought amazing gameplay
            as well that escalated the Beta experience. Sure, there were some
            bugs with the connectivity to the servers and some players have
            faced issues related to disconnecting from the match but compared to
            the value they would be bringing with the full release, the bugs
            really don’t mean much.{" "}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }} my="2rem">
            {/* <img className="blog-image" alt="dark theme" src={darkTheme} /> */}
          </Box>
          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Conclusion
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            When you consider just how good of a response the Closed Beta for
            Street Fighter 6 received from the audience, Street Fighter 6
            certainly has the potential to live up to the legend the franchise
            had set. Even though some people are going as far as claiming that
            this is the <a href="https://www.ign.com/articles/street-fighter-6-closed-beta-impressions" className="link" style={{ fontWeight: "bold" }}>  best Beta for a fighting game ever</a>, We will have to see
            if Street Fighter 6 lives up to the hype that is created among fans
            right now after its full release. Comment your thoughts down below.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }} my="2rem">
            {/* <img className="blog-image" alt="minimalist" src={minimalist} /> */}
          </Box>
          {/* <Typography variant="subtitle1" mb="1rem">
            Check out our other blog,
            <Link to="/blogs/6-practices-for-aesthetic-ui/" className="link">
              6 Simple Practices to Creating Aesthetic UI.
            </Link>
          </Typography> */}
          <Typography variant="subtitle1" mb="1rem">
            Want to write for us?
            <Link to="/contact/" className="link" style={{ fontWeight: "bold" }}>
              {" "}
              Contact us today.
            </Link>
          </Typography>
        </Box>
      </Container>
      <Divider />
      <Container maxWidth="lg" sx={{ marginTop: "4rem" }}>
        {/* <!-- begin wwww.htmlcommentbox.com --> */}
        <div id="HCB_comment_box">
          <a href="http://www.htmlcommentbox.com">Comment Box</a> is loading
          comments...
        </div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.htmlcommentbox.com/static/skins/simple/skin.css"
        />
        {/* <!-- end www.htmlcommentbox.com --> */}
      </Container>
    </ThemeWrapper>
  )
}

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
import frameDateImage from "../../assets/blog-assets/sf6framedata.jpg"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export function Blog2() {
  return (
    <ThemeWrapper>
      <SEO
        title="Mastering Street Fighter: Recognizing Your Turn to Strike"
        description="In the high-stakes world of Street Fighter, timing is everything."
        name="Fighter Tool Kit"
        type="Blog"
        image="test"
      />
      <NavBar>
        <Header
          logo={null}
          title="Mastering Street Fighter: Recognizing Your Turn to Strike"
          link=""
        />
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
              src={frameDateImage}
              alt={frameDateImage}
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
            By studying frame data, analyzing matchups,
            and capitalizing on advantageous situations, players can elevate
            their game and achieve greater success in the intense battles of
            Street Fighter.
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
                  By: Jason Day
                </Typography>

                <Typography textAlign={{ xs: "center", lg: "start" }}>
                  06/17/2023
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
            In the high-stakes world of Street Fighter, timing is everything.
            One crucial aspect of becoming a formidable player is understanding
            when it's "your turn" to launch a punishing attack against your
            opponent. This skill requires a deep understanding of frame data, a
            key component of the game that governs the speed and advantage of
            each move. By leveraging frame data and recognizing which characters
            possess superior frame advantages, players can gain a significant
            edge in their battles.
          </Typography>

          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            Frame Data
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
          Frame data is essentially a numerical representation of a move's
            speed, duration, and advantage or disadvantage on hit or block. In
            Street Fighter, frames are measured in 60ths of a second, making it
            a vital tool for competitive players. Recognizing positive frame
            data is crucial, as it indicates that your character recovers more
            quickly than your opponent, granting you an opportunity to launch an
            attack. Notorious for their strong frame data, characters like
            Cammy, Rashid, and Akuma have become popular choices among skilled
            players due to their ability to maintain pressure and exploit their
            advantageous positions.
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            Identifying your turn to attack requires an astute understanding of
            frame data and the dynamics of each character's moves. When your
            attack lands or is blocked, you must quickly assess the situation.
            If your move has a significant frame advantage on hit or block, it
            creates an opening for you to maintain pressure and launch a
            follow-up attack. However, beware of moves with negative frame data,
            as they leave you vulnerable to counterattacks from your opponent.
            Learning the frame data of your character's key moves and studying
            the frame data of popular matchups will give you a clear advantage
            when it comes to seizing the moment and knowing when it's your turn
            to strike.
          </Typography>

          <Typography variant="h5" color="grey.600" mb="4rem" my="4rem">
            The Wrap Up
          </Typography>
          <Typography variant="subtitle1" mb="1rem">
            In conclusion, mastering Street Fighter involves more than just
            executing flashy combos and special moves. Understanding frame data
            and recognizing your turn to attack is paramount to success in
            competitive play. Characters like Cammy, Rashid, and Akuma, with
            their notorious frame advantages, can be particularly effective in
            maintaining pressure. By studying frame data, analyzing matchups,
            and capitalizing on advantageous situations, players can elevate
            their game and achieve greater success in the intense battles of
            Street Fighter.
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

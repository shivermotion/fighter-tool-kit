import React from "react"
import { Container, Grid } from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import SEO from "../../components/seo-helmet/seo-helmet"
import { FeatArticleThumbNail } from "../../components/featured-article-thumbnail/featured-article-thumbnail"
import Header from "../../components/header/header"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import BlogList from "../../components/bloglist/bloglist"
import fightStick from "../../assets/blog-assets/fightstick.jpg"
import frameDateImage from "../../assets/blog-assets/sf6framedata.jpg"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function WhatsNewPage() {
  return (
    <>
      <SEO
        title="Fighter Tool Kit | What's New"
        description="Blog List"
        name="Fighter Tool Kit"
        type="article"
      />
      <ThemeWrapper>
        <NavBar>
          <Header logo={null} title="WHATS NEW" link="" />
        </NavBar>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "4rem", ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <FeatArticleThumbNail src={frameDateImage} text="" title="Mastering Street Fighter: Recognizing Your Turn to Strike" link="/whatsnew/recognizing-your-turn-to-strike" />
            </Grid>
            <Grid item xs={12}>
              <BlogList />
            </Grid>
          </Grid>
        </Container>
      </ThemeWrapper></>
  )
}



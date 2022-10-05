import React from "react"
import { Container, Grid } from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { FeatArticle } from "../../components/featured-article/featured-article"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import BlogList from "../../components/bloglist/bloglist"
import ken from "../../assets/blog-assets/ken-blog.jpg"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function WhatsNewPage() {
  return (
    <ThemeWrapper>
      <NavBar>
        <Header logo={null} title="WHATS NEW" link="" />
      </NavBar>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ marginBottom: "4rem", ":hover": {
              boxShadow: 20 } }}
          >
            <FeatArticle src={ken} text=";alskdfj;asdkjf;aslkfjls;afj;askjf;ajskfj;sadfj" title="Ken Announced for Street Fighter 6" />
          </Grid>
          <Grid item xs={12}>
            <BlogList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeWrapper>
  )
}



/* eslint-disable no-lone-blocks */
import React from "react"
import { Helmet } from "react-helmet-async"
import { Container, Grid, List, ListItem, Typography } from "@mui/material"
import { Link } from "react-router-dom"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import Header from "../components/header/header"
import { NavBar } from "../components/navbar/navbar"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const SiteMap = () => (
  <ThemeWrapper>
    <Helmet defer={false}>
      <title>Fighter Tool Kit Sitemap</title>
      <meta
        name="description"
        content=" fightertoolkit sitemap available for view."
      />
      <link rel="canonical" href="https://www.fightertoolkit.com/sitemap/" hrefLang="en" lang="en" />
    </Helmet>
    <NavBar>
      <Header
        logo={null}
        title="SiteMap"
        subtext="Can't find what you're looking for?"
        subtext2="Maybe its a page below? "
        link="/"
        linkBtnText="or Return Home?"
      />
    </NavBar>
    <Container maxWidth="xl">
      <Grid container>
        <List>
          <Link to="/">
            <ListItem>
              <Typography variant="h2" className="link">Home</Typography>
            </ListItem>
          </Link>
          <Link to="/whatsnew">
            <ListItem>
              <Typography variant="h2" className="link">Whats New</Typography>
            </ListItem>
          </Link>
          <Link to="/fighters">
            <ListItem>
              <Typography variant="h2" className="link">Fighters</Typography>
            </ListItem>
          </Link>
          <Link to="/contact">
            <ListItem><Typography variant="h2" className="link">Contact</Typography></ListItem>
          </Link>
          <Link to="/whatsnew/welcome">
            <ListItem><p className="link">Welcome</p></ListItem>
          </Link>
          <Link to="/whatsnew/street-fighter-6-surpassing-your-expectation-from-a-fighting-game-beta">
            <ListItem><p className="link">Street Fighter 6 - surpassing youre expectations from a fighting game beta</p></ListItem>
          </Link>

        </List>
      </Grid>
    </Container>
  </ThemeWrapper>
)

export default SiteMap

import React from "react"
import { Container, Grid } from "@mui/material"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import SEO from "../../components/seo-helmet/seo-helmet"
import Header from "../../components/header/header"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import GameImageList from "../../components/game-list/game-list"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function FightersPage() {
  return (
    <>
      <SEO
        title="Fighter Tool Kit | Fighters"
        description="Fighting Game List"
        name="Fighter Tool Kit"
        type="website"
      />
      <ThemeWrapper>
        <NavBar>
          <Header logo={null} title="FIGHTERS" link="" />
        </NavBar>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <GameImageList />
            </Grid>
          </Grid>
        </Container>
      </ThemeWrapper></>
  )
}



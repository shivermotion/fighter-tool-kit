import React from "react"
import { Container } from "@mui/system"
import { Typography } from "@mui/material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import SEO from "../../components/seo-helmet/seo-helmet"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import Header from "../../components/header/header"
import Abigail from "../../components/fighters/sf5/abigail"
import Akuma from "../../components/fighters/sf5/akuma"
import Ryu from "../../components/fighters/sf5/ryu"
import Alex from "../../components/fighters/sf5/alex"
import Balrog from "../../components/fighters/sf5/balrog"
import Birdie from "../../components/fighters/sf5/birdie"
import Blanka from "../../components/fighters/sf5/blanka"
import Cammy from "../../components/fighters/sf5/cammy"
import ChunLi from "../../components/fighters/sf5/chunli"
import Cody from "../../components/fighters/sf5/cody"
import Dhalsim from "../../components/fighters/sf5/dhalsim"
import Ed from "../../components/fighters/sf5/ed"
import Falke from "../../components/fighters/sf5/falke"
import Fang from "../../components/fighters/sf5/fang"
import G from "../../components/fighters/sf5/g"
import Gill from "../../components/fighters/sf5/gill"
import Guile from "../../components/fighters/sf5/guile"
import Ibuki from "../../components/fighters/sf5/ibuki"
import Juri from "../../components/fighters/sf5/juri"
import Karin from "../../components/fighters/sf5/karin"
import Ken from "../../components/fighters/sf5/ken"
import Laura from "../../components/fighters/sf5/laura"
import Mbison from "../../components/fighters/sf5/mbison"
import Menat from "../../components/fighters/sf5/menat"
import Necalli from "../../components/fighters/sf5/necalli"
import Nash from "../../components/fighters/sf5/nash"
import Oro from "../../components/fighters/sf5/oro"
import Poison from "../../components/fighters/sf5/poison"
import Rashid from "../../components/fighters/sf5/rashid"
import Rmika from "../../components/fighters/sf5/rmika"
import Sagat from "../../components/fighters/sf5/sagat"
import Sakura from "../../components/fighters/sf5/sakura"
import Seth from "../../components/fighters/sf5/seth"
import Urien from "../../components/fighters/sf5/urien"
import Vega from "../../components/fighters/sf5/vega"
import Zangief from "../../components/fighters/sf5/zangief"
import Zeku from "../../components/fighters/sf5/zeku"
import Akira from "../../components/fighters/sf5/akira"
import Kage from "../../components/fighters/sf5/kage"
import Kolin from "../../components/fighters/sf5/kolin"
import Ehonda from "../../components/fighters/sf5/ehonda"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Sf5() {
  return (
    <>
      <SEO
        title="Fighters | Street Fighter 5"
        description="Street Fighter 5 - featuring character moves, combos, and more."
        name="Fighter Tool Kit"
        type="website"
      />
      <ThemeWrapper>
        <NavBar>
          <Header logo={null} title="STREET FIGHTER V" link="" />
        </NavBar>
        <Container>
          <Typography variant="h3" component="h1" p={2} display="flex" justifyContent="center">-CHOOSE A FIGHTER-</Typography>
          <Ryu />
          <Abigail />
          <Akuma />
          <Alex />
          <Balrog />
          <Birdie />
          <Blanka />
          <Cammy />
          <ChunLi />
          <Cody />
          <Dhalsim />
          <Ed />
          <Ehonda />
          <Falke />
          <Fang />
          <G />
          <Gill />
          <Guile />
          <Ibuki />
          <Juri />
          <Karin />
          <Ken />
          <Laura />
          <Mbison />
          <Menat />
          <Necalli />
          <Nash />
          <Oro />
          <Poison />
          <Rashid />
          <Rmika />
          <Sagat />
          <Sakura />
          <Seth />
          <Urien />
          <Vega />
          <Zangief />
          <Zeku />
          <Akira />
          <Kage />
          <Kolin />
        </Container>
      </ThemeWrapper></>
  )
}

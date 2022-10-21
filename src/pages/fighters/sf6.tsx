import React from "react"
import { Container } from "@mui/system"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Typography } from "@mui/material"
import SEO from "../../components/seo-helmet/seo-helmet"
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import Header from "../../components/header/header"
import Abigail from "../../components/fighters/sf5/abigail"
import Akuma from "../../components/fighters/sf5/akuma"
import Ryu from "../../components/fighters/sf5/ryu"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Sf6() {
  return (
    <>
      <SEO
        title="Fighters | Street Fighter 6"
        description="Street Fighter 6 - featuring character moves, combos, and more."
        name="Fighter Tool Kit"
        type="website"
      />
      <ThemeWrapper>
        <NavBar>
          <Header logo={null} title="STREET FIGHTER VI" link="" />
        </NavBar>
        <Container>
          <Typography variant="h3" component="h1" p={2} display="flex" justifyContent="center">-CHOOSE A FIGHTER-</Typography>
          <Ryu />
          <Abigail />
          <Akuma />
        </Container>
      </ThemeWrapper></>
  )
}

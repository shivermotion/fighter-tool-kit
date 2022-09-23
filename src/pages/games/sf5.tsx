import React from "react"
import { Container } from "@mui/system"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { NavBar } from "../../components/navbar/navbar"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Abigail from "../../components/fighters/sf5/abigail"
import Akuma from "../../components/fighters/sf5/akuma"
import Ryu from "../../components/fighters/sf5/ryu"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Sf5() {
  return (
    <ThemeWrapper>
      <NavBar>
        <Header logo={null} title="STREET FIGHTER V" link="" />
      </NavBar>
      <Container>
        <Ryu />
        <Abigail />
        <Akuma />
      </Container>
      <Footer />
    </ThemeWrapper>
  )
}

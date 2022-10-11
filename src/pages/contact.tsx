import React from "react"

// import { Helmet } from "react-helmet"
import { Divider } from "@mui/material"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import Footer from "../components/footer/footer"

import { NavBar } from "../components/navbar/navbar"
import ConnectWithOurTeam from "../components/contact/contact-email"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const ContactRoute = () => (
  <ThemeWrapper>
    {/* <Helmet defer={false}>
      <title>Nexrage Studios Contact</title>
      <meta name="description" content="Fighter Tool Kit Content" />
      <link rel="canonical" href="https://www.fightertoolkit.com/contact/" hrefLang="en" lang="en" />
    </Helmet> */}
    <NavBar />
    <ConnectWithOurTeam />
    <Footer />
  </ThemeWrapper>
)

export default ContactRoute

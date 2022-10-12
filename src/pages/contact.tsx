import React from "react"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Helmet } from "react-helmet-async"
import { NavBar } from "../components/navbar/navbar"
import ConnectWithOurTeam from "../components/contact/contact-email"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"
import SEO from "../components/seo-helmet/seo-helmet"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const ContactRoute = () => (
  <>
    <SEO
      title=" Fighter Tool Kit | Contact"
      description="Contact"
      name="Fighter Tool Kit"
      type="website"
    />
    <ThemeWrapper>
      <NavBar />
      <ConnectWithOurTeam />
    </ThemeWrapper></>
)

export default ContactRoute

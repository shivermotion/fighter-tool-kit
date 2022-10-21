import React from "react"
import { Container, Typography, Paper } from "@mui/material"

// @ts-ignore


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Link } from "react-router-dom"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"
import oops from "../assets/404-page/nutz-min.jpg"
import SEO from "../components/seo-helmet/seo-helmet"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const FourOhFour = () => (
  <>
    <SEO
      title="Fighter Tool Kit | 404"
      description="404"
      name="Fighter Tool Kit"
      type="website"
    />
    <ThemeWrapper>
      <Container>
        <Paper style={{ width: "50%" }}>
          <Typography>404 </Typography>
          <Typography><Link to="/">Go Back</Link></Typography>
          <img loading="lazy" src={oops} alt="404" style={{ width: "100%" }} />
        </Paper>
      </Container>
    </ThemeWrapper></>
)



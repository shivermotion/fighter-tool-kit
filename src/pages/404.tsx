import React from "react"
import { Container, Typography, Paper } from "@mui/material"

// @ts-ignore


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Link } from "react-router-dom"
import { ThemeWrapper } from "../globals/global-wrapper/wrapper"
import oops from "../assets/nutz.jpg"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export const FourOhFour = () => (
  <ThemeWrapper>

    <Container>
      <Paper style={{ width: "50%" }}>
        <Typography>404 </Typography>
        <Typography><Link to="/fighter-tool-kit">Go Back</Link></Typography>
        <img src={oops} alt="404" style={{ width: "100%" }} />
      </Paper>
    </Container>

  </ThemeWrapper>
)



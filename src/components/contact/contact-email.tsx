import React from "react"
import { Container, Grid, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
// @ts-ignore
import { Slide, Fade } from "react-reveal"
import { ThemeWrapper } from "../../globals/global-wrapper/wrapper"


// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const ConnectWithOurTeam = () => (
  <ThemeWrapper>
    <Fade>
      <Container maxWidth={false} sx={{ p: "5rem" }} style={{ boxShadow: "1px 0 2px 1px lightgrey inset" }}>
        <Box sx={{ overflow: "hidden" }}>
          <Slide right>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              justifyContent={{ xs: "flex-start", lg: "space-evenly" }}
              alignItems={{ xs: "flex-start", lg: "center" }}
              p={{ xs: "3rem", sm: "5rem", lg: 0 }}
            >
              <Grid item lg={3} mb="2rem">
                <Box mb="1rem">
                  <Typography variant="h2">Reach Out</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">Let's communicate! Have a story or an idea for the site? Please contact me. Lets take the FGC to new heights.</Typography>
                </Box>
              </Grid>
              <Grid item lg={2} mb="2rem">
                <Box mb="1rem">
                  <Typography variant="h5" color="grey.600">Lets Talk.</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" color="darkred">
                    <Link to="mailto:fightertoolkit@gmail.com" className="link">
                    fightertoolkit@gmail.com
                    </Link>
                  </Typography>
                </Box>

              </Grid>

            </Grid>
          </Slide>
        </Box>
      </Container>
    </Fade>
  </ThemeWrapper>
)

export default ConnectWithOurTeam

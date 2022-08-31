import React from "react"
// import { Link } from "gatsby"
import { Container, Box, Typography, Grid } from "@mui/material"
// @ts-ignore
import { Fade, Bounce } from "react-reveal"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./header.scss"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// eslint-disable-next-line react/no-unused-prop-types

export const Header = (props: {
  // eslint-disable-next-line react/no-unused-prop-types
  transparent?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  logo: string | null;
  title: string;
  subtext?: any;
  subtext2?: any;
  link: string;
  linkBtnText?: string;
  linkBtnArrow?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  children?: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  topClass?: any;
}) => (
  <>
    <Container maxWidth={false}>
      <Bounce top>
        <Grid
          className="header-title-width"
          m={{ xs: "2rem" }}
        >
          <Typography variant="h1">{props.title}</Typography>
        </Grid>
      </Bounce>
      <Fade bottom>
        <Box
          className="subtitle-width"
          mb={{ xs: "2rem" }}
        >
          <Typography variant="subtitle1">{props.subtext}</Typography>
        </Box>
        <Box className="subtitle-width">
          <Typography variant="subtitle1">{props.subtext2}</Typography>
        </Box>
        <Box className="arrow-row-header subtitle-width" mb="5rem">
          <a href={props.link}>
            <Typography variant="subtitle1" id="header-link-btn-text">{props.linkBtnText}</Typography>
          </a>
          <Box>{props.linkBtnArrow}</Box>
        </Box>
      </Fade>
    </Container>
  </>
)

export default Header

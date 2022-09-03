/* eslint-disable no-undef */
import { AccordionDetails, Divider, Grid, Typography } from "@mui/material"
import React from "react"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export function CommandMoves() {
  return (
    <AccordionDetails>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        COMMAND MOVES
        </Typography>
      </Grid>
      <Divider />
    </AccordionDetails>
  )
}
export function SpecialMoves() {
  return (
    <AccordionDetails>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        SPECIAL MOVES
        </Typography>
      </Grid>
      <Divider />
    </AccordionDetails>
  )
}
export function SuperSpecialMoves() {
  return (
    <AccordionDetails>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        SUPER SPECIAL MOVES
        </Typography>
      </Grid>
      <Divider />
    </AccordionDetails>
  )
}
export function ClimaxSuperSpecialMoves() {
  return (
    <AccordionDetails>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        CLIMAX SUPER SPECIAL MOVES
        </Typography>
      </Grid>
      <Divider />
    </AccordionDetails>
  )
}
export function NormalThrows() {
  return (
    <AccordionDetails>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        NORMAL THROWS
        </Typography>
      </Grid>
      <Divider />
    </AccordionDetails>
  )
}
export function MoveName(props : {move: string}) {
  return (
    <AccordionDetails>
      <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        {props.move}
      </Typography>
    </AccordionDetails>
  )
}
export function InputBar(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  return (
    <AccordionDetails>
      <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
        {props.children}
      </Grid>
    </AccordionDetails>
  )
}



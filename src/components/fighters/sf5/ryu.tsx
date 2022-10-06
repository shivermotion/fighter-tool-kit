import React, { useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider, Stack } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ClassNames } from "@emotion/react"
import { NearOpponent, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And } from "../../icons/condition"

import { Vshift, Vreversal, Vtrigger1, Vtrigger2, UniqueAttacks, SpecialMoves, NormalThrows, MoveName, InputBar, CriticalArts } from "../../accordion/accordion"
import Press from "../../icons/press"
import Or from "../../icons/or"
import Plus from "../../icons/plus"
import right from "../../../assets/icons/right.png"
import left from "../../../assets/icons/left.png"
import up from "../../assets/icons/up.png"
import down from "../../assets/icons/down.png"
import downRight from "../../assets/icons/downRight.png"
import halfCircleForward from "../../assets/icons/halfCircleForward.png"
import halfCircleBack from "../../assets/icons/halfCircleBack.png"
import shory from "../../assets/icons/shory.png"
import reverseHadoken from "../../assets/icons/reverseHadoken.png"
import hadoken from "../../assets/icons/hadoken.png"
import punchHigh from "../../assets/icons/punchHigh.png"
import punchLow from "../../../assets/icons/punchLow.png"
import kickHigh from "../../assets/icons/kickHigh.png"
import kickLow from "../../assets/icons/kickLow.png"
import upRight from "../../assets/icons/upRight.png"
import upLeft from "../../assets/icons/upLeft.png"
import pic from "../../../assets/game-logos/sf5/portrait-ryu-stats-2.jpg"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Ryu() {
  const [shiny, setShiny] = useState(true)
  return (
    <Accordion className={shiny ? ("shine-effect-button") : ""} onClick={() => { setShiny(!shiny) }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Grid item xs={2}>
            <img src={pic} alt={pic} width="100px" height="190px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>RYU</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <NormalThrows />
      <MoveName move="SHOULDER THROW" />
      <InputBar>
        <NearOpponent />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <Vreversal />
      <Vtrigger1 />
      <Vtrigger2 />
      <Vshift />
      <UniqueAttacks />
      <SpecialMoves />
      <CriticalArts />

    </Accordion>
  )
}

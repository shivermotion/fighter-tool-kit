import React, { useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import {
  NearOpponent,
  InAir,
  PressInOrder,
  AfterMove,
  InTimeWith,
  Charge,
  LinkTo,
  And,
} from "../../icons/condition"

import {
  CommandMoves,
  SpecialMoves,
  SuperSpecialMoves,
  ClimaxSuperSpecialMoves,
  NormalThrows,
  MoveName,
  InputBar,
} from "../../accordion/accordion"
import Press from "../../icons/press"
import Or from "../../icons/or"
import Plus from "../../icons/plus"
import right from "../../../assets/icons/right.png"
import left from "../../../assets/icons/left.png"
import up from "../../../assets/icons/up.png"
import down from "../../../assets/icons/down.png"
import downRight from "../../../assets/icons/downRight.png"
import halfCircleForward from "../../../assets/icons/halfCircleForward.png"
import halfCircleBack from "../../../assets/icons/halfCircleBack.png"
import shory from "../../../assets/icons/shory.png"
import reverseHadoken from "../../../assets/icons/reverseHadoken.png"
import hadoken from "../../../assets/icons/hadoken.png"
import punchHigh from "../../../assets/icons/punchHigh.png"
import punchLow from "../../../assets/icons/punchLow.png"
import kickHigh from "../../../assets/icons/kickHigh.png"
import kickLow from "../../../assets/icons/kickLow.png"
import upRight from "../../../assets/icons/upRight.png"
import upLeft from "../../../assets/icons/upLeft.png"
import "../../../globals/global-styles/shine-effect.scss"

import bjenet from "../../../assets/game-logos/kof/fighters_index_41.png"
import ben from "../../../assets/game-logos/kof/fighters_index_03.png"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Benimaru() {
  const [shiny, setShiny] = useState(true)
  return (
    <Accordion className={shiny ? ("shine-effect-button") : ""} onClick={() => { setShiny(!useState) }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Grid item xs={2}>
            <img src={ben} alt={ben} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>BENIMARU NIKAIDO</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <CommandMoves />
      <MoveName move=" FLYING DRILL" />
      <InputBar><InAir /><Press icon={down} /><Plus /><Press icon={kickHigh} /></InputBar>
      <MoveName move=" JACK KNIFE KICK" />
      <InputBar><Press icon={right} /><Plus /><Press icon={kickLow} /></InputBar>
      <SpecialMoves />
      <MoveName move=" AIR RAIJINKEN [EX]" />
      <InputBar><InAir /><Press icon={hadoken} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" BENIMARU COLLIDER [EX]" />
      <InputBar><NearOpponent /><Press icon={halfCircleBack} /><Press icon={right} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" IAI-GERI [EX]" />
      <InputBar><Press icon={hadoken} /><Plus /><Press icon={kickLow} /><Or /><Press icon={kickHigh} /></InputBar>
      <MoveName move=" INAZUMA SANDAN-GERI" />
      <InputBar><AfterMove move="IAI-GERI" /><Press icon={down} /><Press icon={up} /><Plus /><Press icon={kickLow} /><Or /><Press icon={kickHigh} /></InputBar>
      <MoveName move=" RAIJINKEN [EX]" />
      <InputBar><Press icon={hadoken} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" RAIMEITOU [EX] " />
      <InputBar><Press icon={reverseHadoken} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" SUPER JINRAI KICK [EX] " />
      <InputBar><Press icon={shory} /><Plus /><Press icon={kickLow} /><Or /><Press icon={kickHigh} /></InputBar>
      <SuperSpecialMoves />
      <MoveName move=" BENIMARU RISING SHOT [MAX]" />
      <InputBar><Press icon={hadoken} /><Press icon={hadoken} /><Plus /><Press icon={kickLow} /><Or /><Press icon={kickHigh} /></InputBar>
      <MoveName move=" RAI-KOU KEN [MAX]" />
      <InputBar><Press icon={hadoken} /><Press icon={hadoken} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName move=" RAIHA JIN-OU KEN" />
      <InputBar><Press icon={reverseHadoken} /><Press icon={halfCircleForward} /><Plus /><Press icon={punchHigh} /><Press icon={kickHigh} /></InputBar>
      <NormalThrows />
      <MoveName move=" CATCH AND SHOOT" />
      <InputBar><NearOpponent /><Press icon={left} /><Or /><Press icon={right} /><Plus /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" FRONT SUPLEX" />
      <InputBar><NearOpponent /><Press icon={left} /><Or /><Press icon={right} /><Plus /><Press icon={kickHigh} /></InputBar>
      <MoveName move=" SPINNING KNEE DROP " />
      <InputBar><InAir /><NearOpponent /><Press icon={left} /><Or /><Press icon={right} /><Plus /><Press icon={punchHigh} /></InputBar>
    </Accordion>
  )
}



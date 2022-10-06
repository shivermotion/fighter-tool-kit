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

import billy from "../../../assets/game-logos/kof/fighters_index_45.png"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Billy() {
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
            <img src={billy} alt={billy} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>BILLY KANE</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <CommandMoves />
      <MoveName move="DAI KAITEN-GERI" />
      <InputBar><Press icon={right} /><Plus /><Press icon={punchLow} /></InputBar>
      <MoveName move=" BOUTAKATOBI-GERI" />
      <InputBar><Press icon={right} /><Plus /><Press icon={kickLow} /></InputBar>
      <MoveName move="CHOKKA UCHI" />
      <InputBar><InAir /><Press icon={down} /><Plus /><Press icon={punchHigh} /></InputBar>
      <SpecialMoves />
      <MoveName move="SENPUU KON [EX]" />
      <InputBar><Press icon={shory} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move="SANSETSU KON CHUUDAN UCHI [EX]" />
      <InputBar><Press icon={halfCircleForward} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" KAEN SANSETSU KON CHUUDAN UCHI [EX]" />
      <InputBar><AfterMove move="[" /><Press icon={punchHigh} /> <Or /> <AfterMove move="[EX] SANSETSU KON CHUUDAN UCHI]" /><Press icon={hadoken} /><Plus /><Press icon={punchLow} /></InputBar>
      <MoveName move=" TSURIGOME SANSETSU KON CHUUDAN UCHI" />
      <InputBar><AfterMove move="[" /><Press icon={punchHigh} />  <AfterMove move=" SANSETSU KON CHUUDAN UCHI]" /><Press icon={hadoken} /><Plus /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" KYOUSHUU HISHOU KON [EX]" />
      <InputBar><Press icon={shory} /><Plus /><Press icon={kickLow} /><Or /><Press icon={kickHigh} /></InputBar>
      <MoveName move="SUZUME OTOSHI [EX]" />
      <InputBar><Press icon={reverseHadoken} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" KAEN SUZUME OTOSHI [EX]" />
      <InputBar><AfterMove move="[" /><Press icon={punchHigh} /> <Or /> <AfterMove move="[EX] SUZUME OTOSHI]" /><Press icon={hadoken} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move="KA RYUU TSUIGEKI KON [EX]" />
      <InputBar><Press icon={reverseHadoken} /><Plus /><Press icon={kickLow} /></InputBar>
      <MoveName move=" SUI RYUU TSUIGEKI KON" />
      <InputBar><Press icon={reverseHadoken} /><Plus /><Press icon={kickHigh} /></InputBar>
      <SuperSpecialMoves />
      <MoveName move=" CHOU KAEN SENPUU KON [MAX]" />
      <InputBar><Press icon={hadoken} /><Press icon={halfCircleBack} /><Plus /><Press icon={punchLow} /><Or /><Press icon={punchHigh} /></InputBar>
      <MoveName move=" GUREN SAKKON" />
      <InputBar><Press icon={hadoken} /><Press icon={hadoken} /><Press icon={kickLow} /> <Or /><Press icon={kickHigh} /></InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName move="SYAKU NETU KAISEN KON" />
      <InputBar><Press icon={reverseHadoken} /><Plus /><Press icon={punchHigh} /><Press icon={kickHigh} /></InputBar>
      <NormalThrows />
      <MoveName move="JIGOKU OTOSHI" />
      <InputBar><NearOpponent /><Press icon={left} /><Or /><Press icon={right} /><Plus /><Press icon={punchHigh} /></InputBar>
      <MoveName move="IPPON TSURI NAGE" />
      <InputBar><NearOpponent /><Press icon={left} /><Or /><Press icon={right} /><Plus /><Press icon={kickHigh} /></InputBar>
    </Accordion>
  )
}



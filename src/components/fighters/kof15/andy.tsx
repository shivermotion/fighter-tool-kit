import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider, Stack } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { NearOpponent, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And, AirOk } from "../../icons/condition"

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
// import up from "../../../assets/icons/up"
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
import andy from "../../../assets/game-logos/kof/fighters_index_08.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Andy() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Grid item xs={2}>
            <img src={andy} alt={andy} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>ANDY BOGARD</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <CommandMoves />
      <MoveName move="HIRATE UCHI" />
      <InputBar>
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName move="GENEI SHIRANUI" />
      <InputBar>
        <InAir />
        <Press icon={down} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="TARGET COMBO 1" />
      <InputBar>
        <PressInOrder />
        <NearOpponent />
        <Press icon={kickLow} />
        <LinkTo />
        <Press icon={kickHigh} />
      </InputBar>
      <SpecialMoves />
      <MoveName move="ZAN-EI KEN [EX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="KUUHA DAN [EX]" />
      <InputBar>
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="KUUHA DAN (BRAKE)" />
      <InputBar>
        <AfterMove move="[KUUHA DAN]" />
        <Press icon={kickLow} />
        <And />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="HISHOU KEN [EX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="SHOURYUU DAN [EX]" />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName move="CHOU REPPA DAN [MAX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="ZETSU HITSHOU KEN [MAX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName move="CHOU SHIN SOKU SAN-EI KEN" />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <NormalThrows />
      <MoveName move="KAKAEKOMI NAGE (FORWARD)" />
      <InputBar>
        <NearOpponent />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="KAKAEKOMI NAGE (BACKWARD)" />
      <InputBar>
        <NearOpponent />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
    </Accordion>
  )
}

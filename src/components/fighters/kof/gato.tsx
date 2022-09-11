import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { CloseBy, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And } from "../../icons/condition"


import { CommandMoves, SpecialMoves, SuperSpecialMoves, ClimaxSuperSpecialMoves, NormalThrows, MoveName, InputBar } from "../../accordion/accordion"
import Press from "../../icons/press"
import Or from "../../icons/or"
import Plus from "../../icons/plus"

import right from "../../assets/icons/right.png"
import left from "../../assets/icons/left.png"
import up from "../../assets/icons/up.png"
import down from "../../assets/icons/down.png"
import downRight from "../../assets/icons/downRight.png"
import halfCircleFoward from "../../assets/icons/halfCircleForward.png"
import halfCircleBack from "../../assets/icons/halfCircleBack.png"
import shory from "../../assets/icons/shory.png"
import reverseHadoken from "../../assets/icons/reverseHadoken.png"
import hadoken from "../../assets/icons/hadoken.png"
import punchHigh from "../../assets/icons/punchHigh.png"
import punchLow from "../../assets/icons/punchLow.png"
import kickHigh from "../../assets/icons/kickHigh.png"
import kickLow from "../../assets/icons/kickLow.png"
import upRight from "../../assets/icons/upRight.png"
import upLeft from "../../assets/icons/upLeft.png"
import gato from "../../assets/game-logos/kof/fighters_index_42.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Gato() {
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
            <img src={gato} alt={gato} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>GATO</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <CommandMoves />
      <MoveName move="MIDDLE SPIN" />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move="HEAVY KNEE ATTACK" />
      <InputBar>
        <InAir />
        <Press icon={down} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <SpecialMoves />
      <MoveName move="RED SKY [EX]" />
      <InputBar>
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="MAD MURDER [EX]" />
      <InputBar>
        <CloseBy />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="UNCHAIN LOW" />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move="UNCHAIN HEEL" />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="UNCHAIN TORNADO" />
      <InputBar>
        <Press icon={left} />
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="UNCHAIN BLOW [EX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="UNCHAIN STEP [EX]" />
      <InputBar>
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="CIRCLE UPPER" />
      <InputBar>
        <AfterMove move="[UNCHAIN START]" />
        <Press icon={up} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="CIRCLE SOBAT" />
      <InputBar>
        <AfterMove move="[UNCHAIN START]" />
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="CIRCLE UNDER BLOW" />
      <InputBar>
        <AfterMove move="[UNCHAIN START]" />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="CIRCLE HIGH" />
      <InputBar>
        <AfterMove move="[UNCHAIN START]" />
        <Press icon={up} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="CIRCLE HAMMER BLOW" />
      <InputBar>
        <AfterMove move="[UNCHAIN START]" />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="CIRCLE ASSAULT" />
      <InputBar>
        <AfterMove move="[UNCHAIN START]" />
        <Press icon={down} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="CIRCLE FEINT" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Press icon={punchLow} />
        <And />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move="CIRCLE FEINT (FORWARD)" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <And />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move="CIRCLE FEINT (BACKWARD)" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Press icon={left} />
        <Plus />
        <Press icon={punchLow} />
        <And />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move="FINISH LARIAT" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Or />
        <AfterMove move="[SPECIAL CIRCLE]" />
        <Press icon={right} />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName move="FINISH STRAIGHT" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Or />
        <AfterMove move="[SPECIAL CIRCLE]" />
        <Press icon={right} />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="FINISH ROLLING" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Or />
        <AfterMove move="[SPECIAL CIRCLE]" />
        <Press icon={right} />
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="FINISH NECK CUTTER" />
      <InputBar>
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Or />
        <AfterMove move="[SPECIAL CIRCLE]" />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName move="FINISH GRAPPLE KICK" />
      <InputBar>
        <CloseBy />
        <AfterMove move="[UNCHAIN CIRCLE]" />
        <Or />
        <AfterMove move="[SPECIAL CIRCLE]" />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName move="REAL RAVE [MAX]" />
      <InputBar>
        <Press icon={left} />
        <Press icon={shory} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="BLUE MONDAY COUNTER [MAX]" />
      <InputBar>
        <Press icon={left} />
        <Press icon={shory} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
        <InTimeWith />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName move="ASCENSION TIME" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <NormalThrows />
      <MoveName move="TEKITOU RUSH" />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
    </Accordion>
  )
}

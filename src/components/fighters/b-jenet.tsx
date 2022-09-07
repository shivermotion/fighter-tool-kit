import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { CloseBy, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And, AirOk } from "../icons/condition"
import { CommandMoves, SpecialMoves, SuperSpecialMoves, ClimaxSuperSpecialMoves, NormalThrows, MoveName, InputBar } from "../accordion/accordion"
import Press from "../icons/press"
import Or from "../icons/or"
import Plus from "../icons/plus"
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

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Bjenet() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Typography>B. JENET</Typography>
      </AccordionSummary>
      <CommandMoves />
      <MoveName move="ROLLING THUNDER" />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <SpecialMoves />
      <MoveName move="BAFFRASS [EX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="CRAZY IVAN [EX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="GULF TOMAHAWK [EX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="HARRIER BEE [EX]" />
      <InputBar>
        <InAir />
        <Press icon={down} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="THE HIND [EX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="BRAKE" />
      <InputBar>
        <AfterMove move="[" />
        <Press icon={kickHigh} />
        <AfterMove move=" THE HIND]" />
        <Press icon={punchLow} />
        <Press icon={kickLow} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName move="MANY MANY TORPEDOES [MAX]" />
      <InputBar>
        <AirOk />
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="AURORA [MAX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName move="ENNUI MADEMOISELLE" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
        <InTimeWith />
      </InputBar>
      <NormalThrows />
      <MoveName move="BYE BYE BOO" />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="BROACH" />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="BROACH" />
      <InputBar>
        <CloseBy />
        <InAir />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
    </Accordion>
  )
}

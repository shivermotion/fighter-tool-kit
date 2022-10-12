import React, { useState } from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Divider,
} from "@mui/material"
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

import whip from "../../../assets/game-logos/kof/fighters_index_34.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Whip() {
  const [shiny, setShiny] = useState(true)
  return (
    <Accordion className={shiny ? ("shine-effect-button") : ""} onClick={() => { setShiny(!shiny) }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: "black",
          color: "whitesmoke",
          fontFamily: "montserrat",
        }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Grid item xs={2}>
            <img loading="lazy" src={whip} alt={whip} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>
        WHIP</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>

      <CommandMoves />
      <MoveName
        move=" WHIP SHOT
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        [UP TO 5 INPUTS]
      </InputBar>
      <MoveName
        move=" TALON SHOT
      "
      />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <SpecialMoves />
      <MoveName
        move=" BOOMERANG SHOT 'CODE:SC' [EX]
      "
      />
      <InputBar>
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" STRENGTH SHOT TYPE A 'CODE: SUPERIOR' [EX]
      "
      />
      <InputBar>
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" STRENGTH SHOT TYPE A 'CODE: CANDY' [EX]
      "
      />
      <InputBar>
        [STRENGTH SHOT TYPE A "CODE: SUPERIOR"]
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" STRENGTH SHOT TYPE B 'CODE: STRENGTH' [EX]
      "
      />
      <InputBar>
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" STRENGTH SHOT TYPE B 'CODE: CANDY' [EX]
      "
      />
      <InputBar>
        [STRENGTH SHOT TYPE B "CODE: STRENGTH"]
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" STRENGTH SHOT TYPE C 'CODE: VICTORY' [EX]
      "
      />
      <InputBar>
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={punchHigh} />
        [HOLD OK]
      </InputBar>
      <MoveName
        move=" STRENGTH SHOT TYPE C 'CODE: CANDY' [EX]
      "
      />
      <InputBar>
        [STRENGTH SHOT TYPE C "CODE: VICTORY"]
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" HOOK SHOT 'CODE: ZEPHYR' [EX]
      "
      />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" CRESCENT SWATTER 'CODE:FS' [EX]
      "
      />
      <InputBar>
        <Press icon={left} />
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName
        move=" SONIC SLAUGHTER 'CODE:KW' [MAX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" DESTRUCTION BARRAGE 'CODE: YGW' [MAX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName
        move=" DEPRAVITY BRANDING 'CODE:FA'
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <NormalThrows />
      <MoveName
        move=" STRIKE THREE
      "
      />
      <InputBar>
        <NearOpponent />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" ASSASSIN TRAP
      "
      />
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

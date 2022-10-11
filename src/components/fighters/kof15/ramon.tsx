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

import ramon from "../../../assets/game-logos/kof/fighters_index_24.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Ramon() {
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
            <img src={ramon} alt={ramon} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>
        RAMON</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>

      <CommandMoves />
      <MoveName
        move=" SANKAKU-TOBI
      "
      />
      <InputBar>
        [IN AIR NEAR CORNER]
        <Press icon={upRight} />
      </InputBar>
      <MoveName
        move=" DROP KICK
      "
      />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" HEAD BUTT
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" HOIST 1
      "
      />
      <InputBar>
        [HEAD BUTT]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" HOIST 2
      "
      />
      <InputBar>
        [HEAD BUTT]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>

      <SpecialMoves />
      <MoveName
        move=" TIGER NECK CHANCERY [EX]
      "
      />
      <InputBar>
        <NearOpponent />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" ROLLING SOBAT [EX]
      "
      />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" FLYING BODY ATTACK
      "
      />
      <InputBar>
        [ROLLING SOBAT]
        <Press icon={shory} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" HOIST 1
      "
      />
      <InputBar>
        [FLYING BODY ATTACK]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" HOIST 2
      "
      />
      <InputBar>
        [FLYING BODY ATTACK]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" SOMERSAULT [EX]
      "
      />
      <InputBar>
        [SOMERSAULT]
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={punchLow} />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" TIGER LOAD [EX]
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" FEINT DASH
      "
      />
      <InputBar>
        [TIGER LOAD]
        <Press icon={punchLow} />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" FEINT JUMP
      "
      />
      <InputBar>
        [TIGER LOAD]
        <Press icon={upRight} />
      </InputBar>
      <MoveName
        move=" CROSS CHOP
      "
      />
      <InputBar>
        [TIGER LOAD]
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" FORCE OF WILL
      "
      />
      <InputBar>
        [TIGER LOAD]
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" HOIST 1
      "
      />
      <InputBar>
        [FORCE OF WILL]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" HOIST 2
      "
      />
      <InputBar>
        [FORCE OF WILL]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" BIRD OF PARADISE
      "
      />
      <InputBar>
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" HOIST 1
      "
      />
      <InputBar>
        [BIRD OF PARADISE]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" HOIST 2
      "
      />
      <InputBar>
        [BIRD OF PARADISE]
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" FEINT STEP
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        [HOLD OK]
      </InputBar>

      <SuperSpecialMoves />
      <MoveName
        move=" TIGER SPIN [MAX]
      "
      />
      <InputBar>
        <NearOpponent />
        <Press icon={halfCircleBack} />
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" EL·DIABLO·AMRAILLLO·RAMON·VOLANDO [MAX]
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName
        move=" HYPER SONIC·RAMON
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
        move=" ARM WHIP
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
        move=" FLYING MARE
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

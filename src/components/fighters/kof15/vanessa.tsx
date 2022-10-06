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
import "../../../globals/global-styles/shine-effect.scss"

import vanessa from "../../../assets/game-logos/kof/fighters_index_10.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Vanessa() {
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
            <img src={vanessa} alt={vanessa} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>
        VANESSA</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>

      <CommandMoves />
      <MoveName
        move=" ONE-TWO PUNCHER
      "
      />
      <InputBar>
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" SLIDING PUNCHER
      "
      />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>

      <SpecialMoves />
      <MoveName
        move=" MACHINE GUN PUNCHER [EX]
      "
      />
      <InputBar>
        <Press icon={halfCircleForward} />
        <Plus /> [PRESS REPEATEDLY]
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" DASH PUNCHER [EX]
      "
      />
      <InputBar>
        <Charge />
        <Press icon={left} />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PARRYING PUNCHER [EX]
      "
      />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER VISION (FORWARD) [EX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER UPPER
      "
      />
      <InputBar>
        [PUNCHER VISION (FORWARD)]
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" PUNCHER STRAIGHT
      "
      />
      <InputBar>
        [PUNCHER VISION (FORWARD)]
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER WEAVING
      "
      />
      <InputBar>
        [PUNCHER VISION (FORWARD)]
        <Press icon={left} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER VISION (BACKWARD)
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
        move=" PUNCHER UPPER
      "
      />
      <InputBar>
        [PUNCHER VISION (BACKWARD)]
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" PUNCHER STRAIGHT
      "
      />
      <InputBar>
        [PUNCHER VISION (BACKWARD)]
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER WEAVING
      "
      />
      <InputBar>
        [PUNCHER VISION (BACKWARD)]
        <Press icon={left} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER WEAVING [EX]
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER WEAVING (KEEP)
      "
      />
      <InputBar>
        [
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        (HOLD)]
      </InputBar>
      <MoveName
        move=" DASH PUNCHER
      "
      />
      <InputBar>
        [PUNCHER WEAVING (KEEP)]
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PARRYING PUNCHER
      "
      />
      <InputBar>
        [PUNCHER WEAVING (KEEP)]
        <Press icon={left} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER VISION (FORWARD)
      "
      />
      <InputBar>
        [PUNCHER WEAVING (KEEP)]
        <Press icon={left} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER VISION (FORWARD)
      "
      />
      <InputBar>
        [PUNCHER WEAVING (KEEP)]
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" PUNCHER VISION (BACKWARD)
      "
      />
      <InputBar>
        [PUNCHER WEAVING (KEEP)]
        <Press icon={left} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>

      <SuperSpecialMoves />
      <MoveName
        move=" CRAZY PUNCHER [MAX]
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" CHAMPION PUNCHER [MAX]
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
      <ClimaxSuperSpecialMoves />
      <MoveName
        move=" INFINITY PUNCHER
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
        move=" BARRETT PUNCHER
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
        move=" CLINCH PUNCHER
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

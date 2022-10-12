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

import isla from "../../../assets/game-logos/kof/fighters_index_30.png"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Isla() {
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
            <img loading="lazy" src={isla} alt={isla} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>
        ISLA</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>

      <CommandMoves />
      <MoveName
        move=" CLOUD
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" DESIGNS
      "
      />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>

      <SpecialMoves />
      <MoveName
        move=" DRIPS FORWARD
      "
      />
      <InputBar>
        <InAir />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" DRIPS BACKWARDS
      "
      />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" DRIPS VERTICAL
      "
      />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PIECING A [EX]
      "
      />
      <InputBar>
        <InAir />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" PIECING B [EX]
      "
      />
      <InputBar>
        <InAir />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" PIECING C [EX]
      "
      />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" FILL-IN [EX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" SCRIBE [EX]
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
        move=" TO FRONT [EX]
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
        move=" BRAKE
      "
      />
      <InputBar>
        [TO FRONT]
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" THROWIE A
      "
      />
      <InputBar>
        (TO FRONT
        <Press icon={kickHigh} />
        or [EX])
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" THROWIE B
      "
      />
      <InputBar>
        (TO FRONT
        <Press icon={kickHigh} />
        or [EX])
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" THROWIE C
      "
      />
      <InputBar>
        <Press icon={kickHigh} />
        or [EX]
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" PIECING A [EX]
      "
      />
      <InputBar>
        (THROWIE C)
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" PIECING B
      "
      />
      <InputBar>
        (THROWIE C)
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" PIECING C [EX]
      "
      />
      <InputBar>
        (THROWIE C)
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName
        move=" BACK TO BACK [MAX]
      "
      />
      <InputBar>
        <InAir />
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" WILD STYLE [MAX]
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
        move=" KING OF PIECE:I&A
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
        move=" ALL CITY
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
        move=" CROSSING OUT
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

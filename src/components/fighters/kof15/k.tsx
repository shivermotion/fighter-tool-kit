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

import k from "../../../assets/game-logos/kof/fighters_index_36.png"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function K() {
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
            <img loading="lazy" src={k} alt={k} width="110px" height="150px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>
        K'</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>

      <CommandMoves />
      <MoveName
        move=" ONE INCH
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" KNEE ASSAULT
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" SNIPER SIDE
      "
      />
      <InputBar>
        <Press icon={left} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>

      <SpecialMoves />
      <MoveName
        move=" EIN TRIGGER [EX]
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
        move=" SECOND WHIP
      "
      />
      <InputBar>
        [EIN TRIGGER]
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" SECOND SHOOT
      "
      />
      <InputBar>
        [EIN TRIGGER]
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" SECOND KNUCKLE
      "
      />
      <InputBar>
        [EIN TRIGGER]
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" SECOND SHELL
      "
      />
      <InputBar>
        [EIN TRIGGER]
        <Press icon={right} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" BLACKOUT (FOLLOW UP)
      "
      />
      <InputBar>
        (EIN TRIGGER
        <Or /> SECOND SHELL [EX])
        <Press icon={left} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" BLACKOUT [EX]
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
        move=" CROW BITE [EX]
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
        move=" CROW BITE (FOLLOW UP)
      "
      />
      <InputBar>
        [CROW BITE]
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" MINUTE SPIKE [EX]
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
        move=" NARROW SPIKE
      "
      />
      <InputBar>
        [MINUTE SPIKE]
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" AIR MINUTE SPIKE [EX]
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

      <SuperSpecialMoves />
      <MoveName
        move=" HEAT DRIVE [MAX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        [HOLD OK]
      </InputBar>
      <MoveName
        move=" CHAIN DRIVE [MAX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName
        move=" HYPER CHAIN DRIVE
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
        move=" SPOTPILE
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
        move=" KNEE STRIKE
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

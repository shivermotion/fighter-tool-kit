import React, { useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider, Stack } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { NearOpponent, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And } from "../../icons/condition"
import { Vshift, Vreversal, Vtrigger1, Vtrigger2, UniqueAttacks, SpecialMoves, NormalThrows, MoveName, InputBar, CriticalArts, Vskill2, Vskill1 } from "../../accordion/accordion"
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
import punchMedium from "../../../assets/icons/punchMedium.png"
import punchLow from "../../../assets/icons/punchLow.png"
import kickHigh from "../../../assets/icons/kickHigh.png"
import kickMedium from "../../../assets/icons/kickMedium.png"
import kickLow from "../../../assets/icons/kickLow.png"
import upRight from "../../../assets/icons/upRight.png"
import upLeft from "../../../assets/icons/upLeft.png"
import punchAny from "../../../assets/icons/punchAny.png"
import kickAny from "../../../assets/icons/kickAny.png"
import pic from "../../../assets/game-logos/sf5/portrait-karin-stats-2-min.jpg"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Karin() {
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
            <img loading="lazy" src={pic} alt={pic} width="100px" height="190px" />
          </Grid>

          <Grid item xs={10} sx={{ display: "flex", justifyContent: "left", alignItems: "flex-end" }}>
            <Typography variant="h2" mb={2} sx={{ color: "white", textShadow: "2px 2px black" }}>KARIN</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <NormalThrows />
      <MoveName move="SHOULDER THROW" />
      <InputBar>
        <NearOpponent />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move={"Somersault Throw".toUpperCase()} />
      <InputBar>
        <NearOpponent />
        <Press icon={left} />
        <Plus />
        <Press icon={punchLow} />
        <Press icon={kickLow} />
      </InputBar>
      <Vtrigger1 />
      <MoveName move={"Denjin Renki".toUpperCase()} />
      <InputBar>
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <Vtrigger2 />
      <MoveName move={"Kakko Fubatsu".toUpperCase()} />
      <InputBar>
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <Vskill1 />
      <MoveName move={"Mind's Eye".toUpperCase()} />
      <InputBar>
        <Press icon={punchMedium} />
        <Press icon={kickMedium} />
      </InputBar>
      <Vskill2 />
      <MoveName move={"Thrust Strike".toUpperCase()} />
      <InputBar>
        <Press icon={punchMedium} />
        <Press icon={kickMedium} />
        (PROPERTIES CHANGE DURING V-TRIGGER I)
      </InputBar>
      <Vreversal />
      <MoveName move={"Hashogeki".toUpperCase()} />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Press icon={punchMedium} />
        <Press icon={punchHigh} />
      </InputBar>
      <Vshift />
      <MoveName move={"Fumikomi Jodan Kagizuki".toUpperCase()} />
      <InputBar>
        <Press icon={punchHigh} />
        <Press icon={kickMedium} />
        (AFTER EVADING WITH V-SHIFT)
        <Press icon={punchHigh} />
        <Press icon={kickMedium} />
      </InputBar>
      <UniqueAttacks />
      <MoveName move={"Collarbone Breaker".toUpperCase()} />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchMedium} />
        (PROPERTIES CHANGE DURING V-TRIGGER I)
      </InputBar>
      <MoveName move={"Solar Plexus Strike".toUpperCase()} />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
        (PROPERTIES CHANGE DURING V-TRIGGER I)
      </InputBar>
      <MoveName move={"Axe Kick".toUpperCase()} />
      <InputBar>
        <Press icon={left} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move={"Jodan Nirengeki".toUpperCase()} />
      <InputBar>
        <Press icon={punchHigh} />
        ---
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move={"Jodan Sanrengeki".toUpperCase()} />
      <InputBar>
        <Press icon={punchMedium} />
        ---
        <Press icon={kickHigh} />
        <Or />
        <Press icon={down} />
        <Plus />
        <Press icon={punchHigh} />
        ---
        <Press icon={kickHigh} />
        (PROPERTIES CHANGE DURING V-TRIGGER I)
      </InputBar>
      <SpecialMoves />
      <MoveName move={"Hadoken [V1] [EX]".toUpperCase()} />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchAny} />
        (ANY)
      </InputBar>
      <MoveName move={"Shoryuken [V1] [EX]".toUpperCase()} />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={punchAny} />
        (ANY)
      </InputBar>
      <MoveName move={"Tatsumaki Senpukyaku [EX]".toUpperCase()} />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickAny} />
        (ANY)
      </InputBar>
      <MoveName move={"Airborne Tatsumaki Senpukyaku [EX]".toUpperCase()} />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={kickAny} />
        (ANY)
      </InputBar>
      <MoveName move={"Jodan Sokutou Geri [EX]".toUpperCase()} />
      <InputBar>
        <Press icon={halfCircleForward} />
        <Plus />
        <Press icon={kickAny} />
        (ANY)
      </InputBar>
      <MoveName move={"Isshin [V2]".toUpperCase()} />
      <InputBar>
      (DURING V-TRIGGER II)
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <CriticalArts />
      <MoveName move={"Shinku Hadoken".toUpperCase()} />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchAny} />
        (ANY)
      </InputBar>
      <MoveName move={"Denjin Hadoken [V1]".toUpperCase()} />
      <InputBar>
      (DURING V-TRIGGER I)
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchAny} />
        (ANY)
      </InputBar>

    </Accordion>
  )
}

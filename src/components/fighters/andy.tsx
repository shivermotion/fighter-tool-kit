import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import FightIcon from "../icon/icon"
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
export default function Andy() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Typography>ANDY BOGARD</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container sx={{ justifyContent: "center" }}>
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
            COMMAND MOVES
          </Typography>
        </Grid>
        <Divider />
      </AccordionDetails>
      <AccordionDetails>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
            HIRATE UCHI
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <FightIcon icon={left} />
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>OR</Typography>
          <FightIcon icon={right} />
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>+</Typography>
          <FightIcon icon={punchLow} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        GENEI SHIRANUI
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[IN AIR]</Typography>
          <FightIcon icon={down} />
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>+</Typography>
          <FightIcon icon={kickHigh} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        TARGET COMBO 1
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[PRESS IN ORDER - CLOSE BY]</Typography>
          <FightIcon icon={kickLow} />
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}> - </Typography>
          <FightIcon icon={kickHigh} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ justifyContent: "center" }}>
          <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        SPECIAL MOVES
          </Typography>
        </Grid>
        <Divider />
      </AccordionDetails>
      <AccordionDetails>
        <Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>
        ZAN-EI KEN [EX]
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <FightIcon icon={hadoken} />
          <Typography>+</Typography>
          <FightIcon icon={punchLow} />
          <Typography>OR</Typography>
          <FightIcon icon={punchHigh} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
        KUUHA DAN [EX]
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <FightIcon icon={left} />
          <Typography>OR</Typography>
          <FightIcon icon={right} />
          <Typography>+</Typography>
          <FightIcon icon={punchLow} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
        KUUHA DAN (BRAKE)
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <FightIcon icon={left} />
          <Typography>OR</Typography>
          <FightIcon icon={right} />
          <Typography>+</Typography>
          <FightIcon icon={punchLow} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
        HISHOU KEN [EX]
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <FightIcon icon={left} />
          <Typography>OR</Typography>
          <FightIcon icon={right} />
          <Typography>+</Typography>
          <FightIcon icon={punchLow} />
        </Grid>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>
        SHOURYUU DAN [EX]
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Grid container sx={{ backgroundColor: "whitesmoke", fontFamily: "montserrat", alignItems: "center" }}>
          <FightIcon icon={left} />
          <Typography>OR</Typography>
          <FightIcon icon={right} />
          <Typography>+</Typography>
          <FightIcon icon={punchLow} />
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

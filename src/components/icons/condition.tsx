
import React from "react"
import { Typography } from "@mui/material"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

export function AfterMove(props : {move : string}) {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>{props.move}</Typography>)
}
export function NearOpponent() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[NEAR OPPONENT]</Typography>)
}
export function PressInOrder() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[PRESS IN ORDER]</Typography>)
}
export function InAir() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[IN AIR]</Typography>)
}
export function InTimeWith() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[IN TIME WITH OPPONENT'S ATTACK]</Typography>)
}
export function Charge() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[CHARGE]</Typography>)
}
export function LinkTo() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}> - </Typography>)
}
export function And() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}> AND </Typography>)
}

export function AirOk() {
  return (<Typography sx={{ fontFamily: "montserrat", fontSize: "24px" }}>[AIR AirOk]</Typography>)
}

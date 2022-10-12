import * as React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { Box, Grid } from "@mui/material"
import anime from "../../assets/icons/anime.png"

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,

}))

export default function FeatureBar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item> <img loading="lazy" src={anime} alt="anime" style={{ width: "300px", backgroundColor: "whitesmoke" }} /></Item>
        <Item> <img loading="lazy" src={anime} alt="anime" style={{ width: "300px", backgroundColor: "whitesmoke" }} /></Item>
        <Item> <img loading="lazy" src={anime} alt="anime" style={{ width: "300px", backgroundColor: "whitesmoke" }} /></Item>
      </Stack>
    </Box>
  )
}

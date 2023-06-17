import * as React from "react"
import { experimentalStyled as styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import BlogThumbnail from "../blog-thumbnail/blog-thumbnail"
import battleHub from "../../assets/blog-assets/battlehub-min.jpg"
import frameDateImage from "../../assets/blog-assets/sf6framedata.jpg"
import fightStick from "../../assets/blog-assets/fightstick.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export default function BlogList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <Item sx={{ ":hover": { boxShadow: 20 } }}>
            <BlogThumbnail text={undefined} title=" Mastering Street Fighter: Recognizing Your Turn to Strike" img={frameDateImage} url="/whatsnew/recognizing-your-turn-to-strike" />
          </Item>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <Item sx={{ ":hover": { boxShadow: 20 } }}>
            <BlogThumbnail text={undefined} title="Street Fighter 6 - Surpassing Your Expectation from a Fighting Game Beta" img={battleHub} url="street-fighter-6-surpassing-your-expectation-from-a-fighting-game-beta" />
          </Item>
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <Item sx={{ ":hover": { boxShadow: 20 } }}>
            <BlogThumbnail text={undefined} title="Welcome To Fighter Tool Kit" img={fightStick} url="welcome" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

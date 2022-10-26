import * as React from "react"
import { experimentalStyled as styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import BlogThumbnail from "../blog-thumbnail/blog-thumbnail"
import battleHub from "../../assets/blog-assets/battlehub-min.jpg"

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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{ ":hover": {
              boxShadow: 20 } }}
            >
              <BlogThumbnail text={undefined} title="Street Fighter 6 - Surpassing Your Expectation from a Fighting Game Beta" img={battleHub} url="street-fighter-6-surpassing-your-expectation-from-a-fighting-game-beta" />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

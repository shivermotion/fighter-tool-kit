import React from "react"
import { Container, Grid, Box, Typography, Card, Button, CardActions, CardContent, CardMedia } from "@mui/material"
// @ts-ignore
import Slide from "react-reveal/Slide"
import { Link } from "react-router-dom"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const FeatArticle = ({ title, text, src, blogType, link }: any) => (
  <Container>
    <Grid
      container
      direction={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      columnGap={10}
    >
      <Slide left>
        <Grid item xs={12}>
          <Typography variant="h5" color="grey.600" my="3rem">Featured Article</Typography>
          <Link to="ken-announced-sf6">
            <Card>
              <CardMedia
                component="img"
                height="auto"
                width="100%"
                image={src}
                alt="src"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      </Slide>
      <Slide right>
        <Grid item />
      </Slide>
    </Grid>
  </Container>
)



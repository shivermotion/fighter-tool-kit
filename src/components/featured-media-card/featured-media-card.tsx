import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardActionArea, Grid, Paper } from "@mui/material"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const FeaturedMediaCard = (props: {
blogImage: string,
backgroundImg?:string,
alt?:string,
}) => (
  <Grid container direction="row">
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <br />
        <br />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper component="image" style={{ flexGrow: "1", opacity: ".2" }}>
          <img loading="lazy" src={props.backgroundImg} alt={props.alt} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Card style={{ backgroundColor: "whitesmoke", boxShadow: "none" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.blogImage}
              alt={props.blogImage}
              style={{ borderRadius: "22px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Street Fighter 6 - Surpassing Your Expectation from a Fighting Game Beta
              </Typography>
              <Typography variant="body2" color="text.primary">
              One of the most popular fighting game franchises just completed its beta testing of their latest addition Street Fighter 6 and the fans were not expecting things to get this spicy.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
          Share
            </Button>
            <Button size="small" color="primary">
          Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <br />
      </Grid>
    </Grid>

  </Grid>
)


export default FeaturedMediaCard

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
backgroundImg:string
}) => (
  <Grid container direction="row">
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <br />
        <br />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper component="image" style={{ flexGrow: "1", opacity: ".2" }}>
          <img src={props.backgroundImg} alt="honda" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Card style={{ backgroundColor: "whitesmoke", boxShadow: "none" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.blogImage}
              alt="green iguana"
              style={{ borderRadius: "22px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Ken Announced for Street Fighter 6
              </Typography>
              <Typography variant="body2" color="text.primary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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

import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import ken from "../../assets/blog-assets/ken-blog.jpg"

export default function MultiCard() {
  return (
    <Card style={{ backgroundColor: "whitesmoke", boxShadow: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ken}
          alt="green iguana"
          style={{ borderRadius: "22px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

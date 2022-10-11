import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { Link } from "react-router-dom"
import { Paper, Typography } from "@mui/material"
import { itemData } from "./game-list-data"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function GameImageList() {
  return (
    <ImageList cols={3} rowHeight={300}>
      {itemData.map((item: any) => (
        <Link key={item.img} to={item.url}>
          <ImageListItem className="link" style={{ width: "100%", height: "100%" }}>
            <Paper sx={{ ":hover": {
              boxShadow: 20,
            }, borderRadius: "10px" }}
            >
              <img
                style={{ backgroundColor: "whitesmoke", width: "100%", height: "100%", borderRadius: "10px" }}
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
              />
            </Paper>
            <Typography variant="h3" fontFamily="montserrat" style={{ display: "flex", justifyContent: "center" }}>{item.title}</Typography>
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  )
}



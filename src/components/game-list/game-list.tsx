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
    <>
      <Typography variant="h3" component="h1" p={2} display="flex" justifyContent="center">-CHOOSE A FIGHTER-</Typography>
      <ImageList cols={2} rowHeight={300}>
        {itemData.map((item: any) => (
          <Link key={item.img} to={item.url}>
            <Paper sx={{
              ":hover": {
                boxShadow: 20,
              }, borderRadius: "10px", width: "100%", height: "100%", backgroundColor: "whitesmoke", my: "1rem",
            }}
            >
              <ImageListItem className="link" style={{ width: "100%", height: "100%" }}>
                <img
                  style={{ backgroundColor: "whitesmoke", width: "100%", height: "100%", borderRadius: "10px" }}
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <Typography variant="h3" fontFamily="montserrat" style={{ display: "flex", justifyContent: "center" }}>{item.title}</Typography>
              </ImageListItem>
            </Paper>
          </Link>
        ))}
      </ImageList>
    </>
  )
}



import React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { Link } from "react-router-dom"
import { itemData } from "./game-list-data"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function GameImageList() {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={300}>
      {itemData.map((item: any) => (
        <ImageListItem key={item.img}>
          <Link to={item.url}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  )
}



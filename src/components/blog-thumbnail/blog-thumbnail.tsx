/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, ReactNode } from "react"
import { Box, Card, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
// @ts-ignore
import { Zoom } from "react-reveal"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function BlogThumbnail(props: {
  text: any;
  title: string;
  img: string;
  newText?: ReactNode;
  readMore?: boolean;
  url: any
}) {
  const [state, setState] = useState(props)

  useEffect(() => {
    if (props.readMore) setState({ ...state, readMore: true })
    if (state.text) {
      let newText = `${state.text.split(" ").slice(0, 50).join(" ")}...`
      setState({ ...state, newText })
    }
  }, [])

  return (
    <Zoom>
      <Link to={`${props.url}/`}>
        <Box my={{ xs: "2rem", sm: "5rem", md: 0 }}>
          <Card>
            <CardMedia
              alt={state.title}
              src={state.img}
              component="img"
            />
          </Card>
          <Typography variant="h5">{state.title}</Typography>
        </Box>
      </Link>
    </Zoom>
  )
}


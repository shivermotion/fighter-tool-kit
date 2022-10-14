import React from "react"
import { Helmet } from "react-helmet-async"

export default function SEO({ title, description, name, type, image }: any) {
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title}</title>
      <meta name="description" content={description} />
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      { /* End Twitter tags */ }
    </Helmet>
  )
}

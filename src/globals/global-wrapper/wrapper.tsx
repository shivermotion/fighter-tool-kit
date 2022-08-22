import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { PrimaryTheme } from "@globals/global-themes/theme"
import "@globals/global-styles/reset.scss"
import "@globals/global-styles/global.scss"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const ThemeWrapper = (props: { children: React.ReactNode}) => (
  <ThemeProvider theme={PrimaryTheme}>
    {props.children}
  </ThemeProvider>
)

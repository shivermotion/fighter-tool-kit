import { createTheme } from "@mui/material"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const PrimaryTheme = createTheme({
  typography: {
    fontFamily: "Montserrat !important",
    h1: {
      fontSize: "5rem !important",
      fontWeight: "600 !important",
      "@media(max-width: 1200px)": {
        fontSize: "4rem !important",
      },
      "@media(max-width: 600px)": {
        fontSize: "2rem !important",
      },
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: "510",
      // "@media(max-width: 1200px)": {
      //   fontSize: "2.5rem",
      //   marginRight: 0,
      // },
      "@media(max-width: 600px)": {
        fontSize: "2rem",
        marginRight: 0,
      },
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: "510",
      "@media(max-width: 1200px)": {
        fontSize: "2rem",
        marginRight: 0,
      },
      "@media(max-width: 600px)": {
        fontSize: "1.5rem",
        marginRight: 0,
      },
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: "510",
      "@media(max-width: 1200px)": {
        fontSize: "1.5rem",
        marginRight: 0,
      },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "510 !important",
      "@media(max-width: 600px)": {
        fontSize: "1rem !important",
        marginRight: 0,
      },
    },
    subtitle1: {
      fontSize: "21px !important",
      "@media(max-width: 600px)": {
        fontSize: "18px !important",
      },
    },
  },
})


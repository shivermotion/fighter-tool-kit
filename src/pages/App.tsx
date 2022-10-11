import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import WhatsNewPage from "./whatsnew"
import FightersPage from "./fighters/index"
import Kof15 from "./fighters/kof15"
import Sf5 from "./fighters/sf5"
import Home from "./home"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const App = () => (


  <>
    <Routes>
      <Route index={false} path="/" element={<Home />} />
      <Route path="/fighters" element={<FightersPage />} />
      <Route path="/fighters/kof15" element={<Kof15 />} />
      <Route path="/fighters/sf5" element={<Sf5 />} />
      <Route path="/whatsnew" element={<WhatsNewPage />} />
      <Route>404, Not Found!</Route>
    </Routes>
  </>


)

export default App


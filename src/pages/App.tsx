import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewsPage from "../pages/blogs/index"
import FightersPage from "../pages/games/index"
import Kof15 from "../pages/games/kof15"
import Sf5 from "../pages/games/sf5"
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
      <Route index={false} path="/Fighter-Tool-Kit" element={<Home />} />
      <Route path="/games" element={<FightersPage />} />
      <Route path="/games/kof15" element={<Kof15 />} />
      <Route path="/games/sf5" element={<Sf5 />} />
      <Route path="/blogs" element={<NewsPage />} />
      <Route>404, Not Found!</Route>
    </Routes>
  </>


)

export default App


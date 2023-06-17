import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { HelmetProvider } from "react-helmet-async"
import WhatsNewPage from "./whatsnew"
import FightersPage from "./fighters/index"
import Kof15 from "./fighters/kof15"
import Sf5 from "./fighters/sf5"
import Home from "./home"
import Contact from "./contact"
import { FourOhFour } from "./404"
import Sf6 from "./fighters/sf6"
import Footer from "../components/footer/footer"
import { FeatArticle } from "./whatsnew/welcome"
import { Blog } from "./whatsnew/street-fighter-6-surpassing-your-expectation-from-a-fighting-game-beta"
import { Blog2 } from "./whatsnew/recognizing-your-turn-to-strike"
import SiteMap from "./sitemap"


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const App = () => (
  <>
    <HelmetProvider>
      <main>
        <Routes>
          {/* Home */}
          <Route index={false} path="/" element={<Home />} />
          {/* Fighters */}
          <Route path="/fighters" element={<FightersPage />} />
          <Route path="/fighters/kof15" element={<Kof15 />} />
          <Route path="/fighters/sf5" element={<Sf5 />} />
          <Route path="/fighters/sf6" element={<Sf6 />} />
          {/* Blogs */}
          <Route path="/whatsnew" element={<WhatsNewPage />} />
          <Route path="/whatsnew/welcome" element={<FeatArticle />} />
          <Route path="/whatsnew/street-fighter-6-surpassing-your-expectation-from-a-fighting-game-beta" element={<Blog />} />
          <Route path="/whatsnew/recognizing-your-turn-to-strike" element={<Blog2 />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          {/* 404 */}
          <Route path="*" element={<FourOhFour />} />
          {/* pagemap */}
          <Route path="/sitemap" element={<SiteMap />} />
        </Routes>
      </main>
      <Footer />
    </HelmetProvider>
  </>


)

export default App


import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Nav from "./components/ui/nav"
import Footer from "./components/footer"
import { useEffect } from "react"
import ScrollToTop from "./lib/scroll"

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

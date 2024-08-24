import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Nav from "./components/ui/nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

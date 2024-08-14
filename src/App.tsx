import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Nav from "./components/ui/nav";
import JassATM from "./components/projects/jassatm";

function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto min-h-screen max-w-screen-lg">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          {/* Project pages */}
          <Route path="/projects/jass-atm" element={<JassATM />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Changelog from "./pages/Changelog";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <div className="App bg-gradient-to-r from-violet-50 to-violet-100 selection:bg-slate-800 selection:text-violet-100">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </div>
  );
}

export default App;

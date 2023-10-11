import { Route, Routes } from "react-router-dom";
import Changelog from "./components/Changelog";
import PageH from "./components/PageH";
import PageM from "./components/PageM";
import PageP from "./components/PageP";

function App() {
  return (
    <div className="App bg-gradient-to-r from-violet-50 to-violet-100 selection:bg-slate-800 selection:text-violet-100">
      <Routes>
        <Route path="/" element={<PageH />} />
        <Route path="/project" element={<PageP />} />
        <Route path="/about" element={<PageM />} />
        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import Rough from "./components/Rough/Rough";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/rough" element={<Rough />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

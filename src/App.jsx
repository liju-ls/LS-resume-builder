import Home from "./pages/Home";
import CreateResume from "./pages/CreateResume";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="create-resume" element={<CreateResume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

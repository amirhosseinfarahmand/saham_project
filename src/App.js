import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChartPage from "./pages/ChartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

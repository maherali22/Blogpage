import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./BlogApp/Home";
import CreatePage from "./BlogApp/CreatePage";
import DetailPage from "./BlogApp/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/blog" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

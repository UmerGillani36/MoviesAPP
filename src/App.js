import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FindAnAgency from "./pages/FindAnAgency";
import FloorPlans from "./pages/FloorPlans";
import Guides from "./pages/Guides";
import MarketIntelligence from "./pages/MarketIntelligence";
import AgentPortal from "./pages/AgentPortal";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/Find an Agency" element={<FindAnAgency />}></Route>
        <Route path="/Floor Plans" element={<FloorPlans />}></Route>
        <Route path="/Guides" element={<Guides />}></Route>
        <Route
          path="/Market Intelligence"
          element={<MarketIntelligence />}
        ></Route>
        <Route path="/Agent Portal" element={<AgentPortal />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

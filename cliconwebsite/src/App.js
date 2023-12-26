import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePageMain } from "./Pages/HomePageMain";
import { SignInPageMain } from "./Pages/SignInPageMain";
import { ShopPage } from "./Pages/ShopPage";
import { Dashboard } from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePageMain />} />
          <Route path="/signIn" element={<SignInPageMain />} />
          <Route path="/shopPage" element={<ShopPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

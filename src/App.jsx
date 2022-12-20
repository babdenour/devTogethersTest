import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { hasAuthenticated } from "./utils";
import Auth from "./context/Auth";
import AuthRoute from "./components/AuthRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);

  return (
    // <Auth.Provider value={{ isAuthenticated }}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </Auth.Provider >
  );
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardHome from "./pages/DashboardHome";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

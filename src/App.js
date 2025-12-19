
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TicketsList from "./pages/TicketsList";
import TicketDetail from "./pages/TicketDetail";
import AddTicket from "./pages/AddTicket";
import EditTicket from "./pages/EditTicket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<TicketsList />} />
        <Route path="/tickets/:id" element={<TicketDetail />} />
        <Route path="/tickets/ajouter" element={<AddTicket />} />
        <Route path="/tickets/modifier/:id" element={<EditTicket />} />
      </Routes>
    </Router>
  );
}
export default App;*/ 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TicketsList from "./pages/TicketsList";
import TicketDetail from "./pages/TicketDetail";
import AddTicket from "./pages/AddTicket";
import EditTicket from "./pages/EditTicket";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<TicketsList />} />
        <Route path="/tickets/:id" element={<TicketDetail />} />
        <Route path="/tickets/ajouter" element={<AddTicket />} />
        <Route path="/tickets/modifier/:id" element={<EditTicket />} />
      </Routes>
    </Router>
  );
}

export default App;


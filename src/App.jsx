import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Market from "./pages/Market";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword"; 
import OtpVerification from "./pages/OtpVerification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="market" element={<Market />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} /> 
          <Route path="/otp" element={<OtpVerification />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import DarkMode from "../utils/Dark_Module/DarkMode.jsx";

const NV = () => {
  return (
    <nav className="container">
      <div className="left-section">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <Link to="/market" className="nav-link">Market</Link>
        <Link to="/spot" className="nav-link">Spot</Link>
      </div>

      <div className="right-section">
        <Link to="/" className="btn">Log in</Link>
        <Link to="/signup" className="btn">Sign Up</Link> 
        <DarkMode />
      </div>
    </nav>
  );
};

export default NV;

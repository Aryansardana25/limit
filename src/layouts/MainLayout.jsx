import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import NV from "../components/Navbar/NV.jsx";

const MainLayout = () => {
  return (
    <>
      <NV/>
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

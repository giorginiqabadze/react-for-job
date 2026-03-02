import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import "./cssFiles/structure.css";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="layout">
      <Sidebar isOpen={isOpen} />

      <div className={`main ${isOpen ? "shift" : ""}`}>
        <button
          className={`toggle-btn ${isOpen ? "opened" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <KeyboardDoubleArrowLeftIcon />
          ) : (
            <KeyboardDoubleArrowRightIcon />
          )}
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

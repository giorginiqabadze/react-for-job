import { NavLink } from "react-router-dom";
import "../cssFiles/sidebar.css";
import logo from "../assets/logo.png";
import SpellcheckRoundedIcon from "@mui/icons-material/SpellcheckRounded";
import FormatColorTextRoundedIcon from "@mui/icons-material/FormatColorTextRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Avatar from "@mui/material/Avatar";
const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <h2 className="logo">
        <img class="logoPNG" src={logo} alt="logo" />
        ENAGRAM
      </h2>

      <NavLink
        to="/spelling"
        className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
      >
        <SpellcheckRoundedIcon />
        <p className="text">მართლწერა</p>
      </NavLink>
      <NavLink
        to="/textCompare"
        className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
      >
        <FormatColorTextRoundedIcon />
        <p className="text">ტექსტის შედარება</p>
      </NavLink>
      <NavLink
        to="/TextVoice"
        className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
      >
        <MicNoneRoundedIcon />
        <p>ხმა ➜ ტექსტი</p>
      </NavLink>
      <NavLink
        to="/voiceText"
        className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
      >
        <GraphicEqRoundedIcon />
        <p>ტექსტი ➜ ხმა</p>
      </NavLink>
      <NavLink
        to="/pdf"
        className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
      >
        <PictureAsPdfRoundedIcon />
        <p>PDF კონვერტაცია</p>
      </NavLink>
      <div className="bottomSidebar">
        <div className="bottomUser">
          <Avatar
            sx={{
              bgcolor: "#008bfdcc",
              color: "#111111",
              border: "2px solid white", // ✅ white border
              width: 40, // optional size
              height: 40,
            }}
          >
            გ
          </Avatar>
          <p>გიორგი ნიქაბაძე</p>
        </div>

        <MoreHorizOutlinedIcon className="bottomLogo" />
      </div>
    </div>
  );
};

export default Sidebar;

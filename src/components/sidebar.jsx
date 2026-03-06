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


const Sidebar = ({ isOpen ,setChoosenNavlink}) => {

    
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>


      <div className="sidebar-header">
        <h2 className="logo">
          <img className="logoPNG" src={logo} alt="logo" />
          ENAGRAM
        </h2>
      </div>


      <div className={`sidebar-content ${isOpen ? "open" : "closed"}`}>

        <NavLink
          to="/spelling"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          onClick={()=>setChoosenNavlink("spelling")}
        >
          <SpellcheckRoundedIcon />
          <p>მართლწერა</p>
        </NavLink>

        <NavLink
          to="/textCompare"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          onClick={()=>setChoosenNavlink("textCompare")}
        >
          <FormatColorTextRoundedIcon />
          <p>ტექსტის შედარება</p>
        </NavLink>

        <NavLink
          to="/TextVoice"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          onClick={()=>setChoosenNavlink("TextVoice")}
        >
          <MicNoneRoundedIcon />
          <p>ხმა ➜ ტექსტი</p>
        </NavLink>

        <NavLink
          to="/voiceText"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          onClick={()=>setChoosenNavlink("voiceText")}
        >
          <GraphicEqRoundedIcon />
          <p>ტექსტი ➜ ხმა</p>
        </NavLink>

        <NavLink
          to="/pdf"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
          onClick={()=>setChoosenNavlink("pdf")}
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
                border: "2px solid white",
                width: 40,
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
    </div>
  );
};

export default Sidebar;
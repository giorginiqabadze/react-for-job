import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import "./cssFiles/structure.css";
import { useState , useEffect} from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SpellcheckRoundedIcon from "@mui/icons-material/SpellcheckRounded";
import FormatColorTextRoundedIcon from "@mui/icons-material/FormatColorTextRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";



const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [choosenNavlink , setChoosenNavlink] = useState("textCompare")
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    const navLinks={spelling:{text : "მართლწერა" , emoje :<SpellcheckRoundedIcon />}, 
    textCompare:{text:"ტექსტის შედარება" , emoje : <FormatColorTextRoundedIcon />},
    TextVoice:{text:"ხმა ➜ ტექსტი" , emoje : <MicNoneRoundedIcon />},
    voiceText:{text:"ტექსტი ➜ ხმა" , emoje : <GraphicEqRoundedIcon />},
    pdf:{text:"PDF კონვერტაცია" , emoje : <PictureAsPdfRoundedIcon />},}
    console.log(width , choosenNavlink)
  return (
    <div className="layout">
      <Sidebar isOpen={isOpen} setChoosenNavlink={setChoosenNavlink} />

      <div className={`main ${isOpen ? "shift" : ""}`}>
        <button
          className={`toggle-btn ${isOpen ? "opened" : "closed"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (width>=1210 ?
            <KeyboardDoubleArrowLeftIcon /> : <MenuRoundedIcon/>
          ) : (width>=1210 ?
            <KeyboardDoubleArrowRightIcon /> : <MenuRoundedIcon/>
          )}
        </button>
        {width<1200  && choosenNavlink && !isOpen || choosenNavlink!== "textCompare" ?<div className="navLink">
               {navLinks[choosenNavlink].emoje } { navLinks[choosenNavlink].text}</div> : null}

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

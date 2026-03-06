import HeaderTab from "./headerTab";
import BottomTab from "./bottomTab";
import { useState } from "react";

export default function TextCompare() {

  
const [firstTimeforHeader , setFirstTimeForHeader] = useState(false);
function handleFirstTime(){
    setFirstTimeForHeader(true)

}
  return (
    <div >
    <HeaderTab firstTime={firstTimeforHeader}/>
    <BottomTab handleFirstTime={handleFirstTime} firstTime={firstTimeforHeader}/>
    </div>
  );
}

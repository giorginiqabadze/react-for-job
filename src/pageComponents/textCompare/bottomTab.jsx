import "../../cssFiles/textCompare/bottomTab.css"
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import { useState , useEffect , useRef } from "react";
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

export default function BottomTab({firstTime, handleFirstTime}){

const [percent , setPercent] = useState(0);
const [isRunning,setIsRunning] = useState(false);
const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
useEffect(() => {
  if (!isRunning) return;

  const interval = setInterval(() => {
    setPercent(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        setPercent(0);
        return 100;
      }
      return prev + 2;
    });
  }, 80);

  return () => clearInterval(interval);

}, [isRunning]);

function diffTexts(text1, text2) {
  const arr1 = text1.split("");
  const arr2 = text2.split("");

  const result1 = [];
  const result2 = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {

    if (arr1[i] === arr2[j]) {
      result1.push(arr1[i]);
      result2.push(arr2[j]);
      i++;
      j++;
    } 
    else {
      // წაშლილი (პირველშია მაგრამ მეორეში არა)
      if (!arr2.includes(arr1[i])) {
        result1.push(
          `<span className="deleted">${arr1[i]}</span>`
        );
        i++;
      } 
      // დამატებული (მეორეშია მაგრამ პირველში არა)
      else {
        result2.push(
          `<span className="added">${arr2[j]}</span>`
        );
        j++;
      }
    }
  }

  while (i < arr1.length) {
    result1.push(
      `<span style="background-color:#ffb3b3">${arr1[i]}</span>`
    );
    i++;
  }

  while (j < arr2.length) {
    result2.push(
      `<span style="background-color:#b3ffb3">${arr2[j]}</span>`
    );
    j++;
  }

  return {
    newText1: result1.join(""),
    newText2: result2.join("")
  };
}
const handleCompare = () => {

  const currentText1 = input1Ref.current.innerText;
  const currentText2 = input2Ref.current.innerText;

  const diff = diffTexts(currentText1, currentText2);

  input1Ref.current.innerHTML = diff.newText1;
  input2Ref.current.innerHTML = diff.newText2;
};

const input1Ref = useRef(null);
const input2Ref = useRef(null);

    return(
        <div className="box">
            
            <div  className={isRunning ? "inputsBox invisible" : "inputsBox"}>
                <div className="input1Box">
                  <div
  ref={input1Ref}
  className="input"
  contentEditable
></div>
                
                </div>
    <div className="betweenInputs"><SwapHorizRoundedIcon sx={{ width: 50, height: 50, color: '#111' ,"@media (max-width:1300px)": {
        width: 30,
        height: 30,
      },"@media (max-width:1120px)": {
               width: 25,
               height: 25,
               paddingLeft : '15px'
      },"@media (max-width:920px)": {
            visibility : "hidden"
      },"@media (max-width:700px)": {
            visibility : "visible",
      } }}/></div>
    <div className="input2Box">
<div
  ref={input2Ref}
  className="input"
  contentEditable
></div>
        </div>
    </div>

       
{ isRunning ? 
  <div className="progressBox">
    <div className="progressContent">
      <div className="circle" />
      <div className="progressText">
        <p>{width>700 ? "Converting... Thank you for your patience" : "Converting..." }</p>
        <div className="progressRow">
          <span>{percent}%</span>
          <div className="progressBar">
            <div
              className="progressFill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  </div> : null }
  <button disabled={isRunning} className={isRunning ? "submitButton disabled" : "submitButton"} 
  onClick={()=>{setIsRunning(true) , handleCompare() , handleFirstTime()}}>
    {firstTime && !isRunning  ? width > 300 ? <RefreshRoundedIcon/> : null : null}შედარება</button>
      
</div>



    )
}
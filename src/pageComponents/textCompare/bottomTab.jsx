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
  const a = text1.split("");
  const b = text2.split("");

  const m = a.length;
  const n = b.length;

  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // LCS matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = m;
  let j = n;

  const result1 = [];
  const result2 = [];

  while (i > 0 || j > 0) {

    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      result1.unshift(a[i - 1]);
      result2.unshift(b[j - 1]);
      i--;
      j--;
    }

    else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result1.unshift(""); 
      result2.unshift(`<span class="added" contenteditable="false">${b[j - 1]}</span>`);
      j--;
    }

    else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      result1.unshift(`<span class="deleted" contenteditable="false">${a[i - 1]}</span>`);
      result2.unshift(""); 
      i--;
    }
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
            paddingLeft : '0px',
            visibility : "visible",
            transform : "rotate(90deg)"
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
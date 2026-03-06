import "../../cssFiles/textCompare/headerTab.css"
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
const names = [
  "ქართული",
  "English",
  "Русский"
];

export default function HeaderTab({firstTime}) {

  const [personName, setPersonName] = React.useState("ქართული");


  return (
    <div className="head">
      <div className="headerBox1">
      
      <Select
  value={personName}
  onChange={(e) => setPersonName(e.target.value)}
  sx={{height:42}}
  className="selectInput"
>
  {names.map((name) => (
    <MenuItem key={name} value={name}>
      {name}
    </MenuItem>
  ))}
</Select>
       <FormControlLabel className="headerCheckbox"    control={<Checkbox  />} label="ფორმატის შენარჩუნება" sx={
        {ml:2,
    '& .MuiFormControlLabel-label': {
      fontSize: 16,
      
    }
  }}/>
      </div>
      <div className="headerBox2">
      <button className={firstTime ? "headButton enabled" : "headButton"}><AddCircleOutlineOutlinedIcon/> ახლის გახსნა</button>
      </div>
    </div>
  );
}
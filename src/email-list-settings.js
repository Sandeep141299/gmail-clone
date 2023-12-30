import React from "react";
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Emaillistsettings() {
  return (
    <div className='email-setting'>
      <div className='email-list-left'>
        <CheckBoxOutlineBlankIcon />
        <ArrowDropDownIcon />
        <RefreshIcon />
        <MoreVertIcon />
      </div>
      <div className='email-list-right'>
        <p>
          1-20 of 10.2022 <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
        </p>
      </div>
    </div>
  );
}

export default Emaillistsettings;

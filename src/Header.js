import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./css/header.css";

function Header() {
  return (
    <div className='header'>
      <div className='left-header'>
        <ReorderIcon />
        <img src='./img/logo.png' height='50px' width='70px' alt='' />
      </div>
      <div className='middel-header'>
        <SearchIcon />
        <input type='text' placeholder='search mail' />
        <ArrowDropDownIcon />
      </div>
      <div className='right-header'>
        <HelpOutlineIcon />
        <AppsIcon />
        <SettingsIcon />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./css/emaillist.css";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
function Emailmessages() {
  return (
    <div className='message'>
      <div className='message-option' id='active'>
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className='message-option'>
        <GroupIcon />
        <p>Soical</p>
      </div>
      <div className='message-option'>
        <SellIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
}

export default Emailmessages;

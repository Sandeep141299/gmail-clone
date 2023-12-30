import React from "react";
import Emaillistsettings from "./email-list-settings";
import Emailmessages from "./email-messages";
import Mainmails from "./massege";
import "./css/emaillist.css";
import { useEffect } from "react";

function Emaillist() {
  return (
    <>
      <div className='email-list'>
        <Emaillistsettings />
        <Emailmessages />
        <Mainmails name='sandeep patidar' subject='gamil clone' massege='this is project' time='03:30 PM' />
      </div>
    </>
  );
}

export default Emaillist;

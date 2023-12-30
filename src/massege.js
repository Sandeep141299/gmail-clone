import React from "react";
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarRateIcon from "@mui/icons-material/StarRate";

function Mainmails(props) {
  return (
    <div className='main-mails'>
      <div className='mail-left'>
        <CheckBoxOutlineBlankIcon />
        <StarRateIcon />
        <h4> {props.name} </h4>{" "}
      </div>{" "}
      <div className='mail-middel'>
        <div className='middel-massege'>
          <p>
            <b> {props.subject} </b> {props.massege}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className='mail-right'>
        <p> {props.time} </p>{" "}
      </div>{" "}
    </div>
  );
}

export default Mainmails;

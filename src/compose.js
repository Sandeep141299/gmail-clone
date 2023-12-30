import React from "react";
import "./css/compose.css";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import DeleteIcon from "@mui/icons-material/Delete";
import { closemassege } from "./features/counter/counterSlice";
import { useDispatch } from "react-redux";
import { db } from "./firebase";

import { set, ref } from "firebase/database";

function Compose() {
  const [to, setto] = useState("");
  const [subject, setsubject] = useState("");
  const [massege, setmassege] = useState("");
  const dispach = useDispatch();
  const writeindatabase = () => {
    set(ref(db, "/data1"), { to, subject, massege });
    setto("");
    setsubject("");
    setmassege("");
    alert("sand Email successfully");
    dispach(closemassege());
  };

  return (
    <div className='compose' id='compos'>
      <div className='compose-header'>
        <div className='compose-header-left'>
          <span>New Massege</span>
          <div className='svg'>
            <RemoveIcon />
            <OpenInFullIcon />
            <CloseIcon onClick={() => dispach(closemassege())} />
          </div>
        </div>
      </div>
      <form action=''>
        <div className='compose-body'>
          <div className='input'>
            <input type='text' placeholder='Reciepents' value={to} onChange={(e) => setto(e.target.value)} />
            <input type='text' placeholder='Subject' value={subject} onChange={(e) => setsubject(e.target.value)} />
            <textarea name='' id='' cols='30' rows='5' placeholder='text here' value={massege} onChange={(e) => setmassege(e.target.value)}></textarea>
          </div>
        </div>
      </form>
      <div className='compose footer'>
        <div className='left'>
          <button type='submit' onClick={(e) => writeindatabase()}>
            sand
            <SendIcon />
          </button>
        </div>
        <div className='right'>
          <AttachFileIcon />
          <InsertLinkIcon />
          <InsertEmoticonIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default Compose;

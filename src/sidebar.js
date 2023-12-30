import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./css/sidebar.css";
import Sidebaroptions from "./sidebaroptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { useDispatch } from "react-redux";
import { opnemassege } from "./features/counter/counterSlice";
function Sidebar() {
  const dispach = useDispatch();
  return (
    <div className='sidebar'>
      <button className='compose-btn' onClick={() => dispach(opnemassege())}>
        <AddCircleOutlineIcon />
        compose
      </button>
      <Sidebaroptions icon={InboxIcon} title='Inbox' number='224' isactive={true} />
      <Sidebaroptions icon={StarRateIcon} title='Starred' number='224' />
      <Sidebaroptions icon={AccessTimeFilledIcon} title='Sooozed' number='224' />
      <Sidebaroptions icon={LabelImportantIcon} title='Importent' number='224' />
      <Sidebaroptions icon={SendIcon} title='Send' number='224' />
      <Sidebaroptions icon={DraftsIcon} title='Drafts' number='224' />
      <Sidebaroptions icon={BookmarkIcon} title='Category' number='224' />
      <Sidebaroptions icon={DeleteIcon} title='[Map]/trast' number='224' />
      <Sidebaroptions icon={FindInPageIcon} title='Documents' number='224' />
      <Sidebaroptions icon={ArrowDropDownIcon} title='More' number='224' />
    </div>
  );
}

export default Sidebar;

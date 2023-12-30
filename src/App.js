import React from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import Emaillist from "./emaillist";
import Compose from "./compose";
import Api from "./api";
import { selectsandmassegeisopen } from "./features/counter/counterSlice";
import { useSelector } from "react-redux";
function App() {
  const ismassopen = useSelector(selectsandmassegeisopen);
  console.log(ismassopen);
  return (
    <div className='App'>
      <Api />
      <Header />
      <div className='app-body'>
        <Emaillist />
        <Sidebar />
      </div>
      {ismassopen && <Compose />}
    </div>
  );
}

export default App;


import Main from "./pages/main/Main";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("main");
  const [inputs, setInputs] = useState({
    phone: "",
    email: "",
    nickname: "",
    name: "",
    surname: "",
    sex: "Не выбрано",
    advantages: ["", "", ""],
    checked: [],
    picked: "",
    about: ""
  });

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "2":
        setPage("page1");
        break;
      case "3":
        setPage("page2");
        break;
      case "4":
        setPage("page3");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="App">
      {
        {
          main:  <Main page={page} setPage={setPage} inputs={inputs} setInputs={setInputs}/>,
          page1: <Page1 page={page} setPage={setPage} inputs={inputs} setInputs={setInputs} nextPageNumber={nextPageNumber}/>,
          page2: <Page2 page={page} setPage={setPage} inputs={inputs} setInputs={setInputs} nextPageNumber={nextPageNumber}/>,
          page3: <Page3 page={page} setPage={setPage} inputs={inputs} setInputs={setInputs} nextPageNumber={nextPageNumber}/>,
        }[page]
      }
    </div>
  );
}

export default App;

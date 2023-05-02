import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SplContent from "./SplContent";
import Homepage from "./Homepage";

function App() {
  const [currentPage, setCurrentpage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)
  const dataPerPage = 10;
  const indexOfLastElement = currentPage * dataPerPage;
  const indexOfFirstElement = indexOfLastElement - dataPerPage;
  const currentElement = data?.slice(indexOfFirstElement, indexOfLastElement);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  console.log(windowWidth, "window width");

  const isEnd = indexOfLastElement === data.length

  const handleWidth = () =>{
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {

    window.addEventListener("resize", handleWidth);

    axios("http://localhost:3000/data").then((res) => setData(res.data)).catch((err) => setError(err.message))
  }, [])
  const handlePages = (type) => {
    if (type === "next") {
      setCurrentpage(prev => prev + 1)
    }
    else {
      if (currentPage > 1) {
        setCurrentpage(prev => prev - 1)
      }
    } 
    return () => window.removeEventListener("resize", handleWidth);
  }

  return (
    <div>
      <div className="m-3"><h2>Watch human-curated Staff Picks</h2></div>
      <div style={{ gap: "35px" }} className="d-flex mt-5 align-items-center justify-content-center p-3">
        {windowWidth > 700 && <span onClick={() => handlePages("prev")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={currentPage === 1 ? "gray" : "currentColor"} class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
        </span>}
        {windowWidth > 1300 && <SplContent />}
        {!error && <Homepage currentElement={currentElement} />}
        {error && <div>something went wrong, Please try after sometimes</div>}
        {windowWidth > 700 && <span onClick={() => !isEnd ? handlePages("next") : null}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={data.length === indexOfLastElement ? "gray" : "currentColor"} class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </span>}
      </div>
    </div>
  )
}

export default App;

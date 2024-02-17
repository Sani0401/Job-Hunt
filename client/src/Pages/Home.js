import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeaderBar from "../Components/HomeHeaderBar";
import TopBar from "../Components/TopBar";
import renderPageComponent from '../Constants/Render.js'
import HomeFooter from "../Components/HomeFooter.js";
import '../Styles/HomeStyles/Home.css'
function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handlePage = (data) => {
    setPage(data); 
  };

   

  return (
    <>
      <div className="top">
        <HomeHeaderBar />
        <TopBar handlePage={handlePage} page={page} />
      </div>

      <div className="body">
        {renderPageComponent(page)} 
      </div>

      <div className="footer">
        <HomeFooter/>
      </div>
    </>
  );
}

export default Home;

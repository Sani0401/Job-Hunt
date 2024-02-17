import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Component/TopBar';
import renderPageComponent from '../Constants/Render';
import HomeFooter from '../Component/HomeFooter';

function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState();
  const [bodyComponent, setBodyComponent] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []);

  const handlePage = (page) => {
    setPage(page);
    setBodyComponent(renderPageComponent(page));
  };

  return (
    <>
      <div className='adminHomeHeader'>
        <TopBar handlePage={handlePage} />
      </div>
      <div className='adminBodyContainer'>
        {bodyComponent}
      </div>

      <div className='homeFooter'>
        <HomeFooter/>
      </div>
    </>
  );
}

export default Home;

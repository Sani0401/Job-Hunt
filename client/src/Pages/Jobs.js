import React, { useEffect, useState } from 'react'
import Instance from '../config/Instance'
import apiURL from '../config/apiURL'
import JobCard from '../Components/JobCard';
function Jobs() {
  const [data, setData] = useState();
  const token = sessionStorage.getItem("token")

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    async function getData() {
      try {
        const response = await Instance.get(apiURL.getData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);



  return (
   <>
   
   <div>
<JobCard/>
   </div>

   
   </>
  )
}

export default Jobs
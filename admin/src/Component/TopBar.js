import React from 'react'
import logoImage from '../Images/logo.svg'
import '../Styles/HomeStyles/Topbar.css'
function TopBar({handlePage}) {
  
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light topbar__header">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logoImage}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar" id="navbarNav">
      <ul class="navbar-nav pageList" >
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#" onClick={() =>{
handlePage("Add Job");
          }}>Add Job</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() =>{
            handlePage("Add Companies")
          }}>Add Company</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#"  onClick={() =>{
            handlePage("Users")
          }}>User</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" onClick={() =>{
            handlePage("Companies")
          }} >Companies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#"  onClick={() =>{
handlePage("Jobs")
          }}>Jobs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default TopBar
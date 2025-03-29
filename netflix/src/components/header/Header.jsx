import React from 'react'
import"./header.css";
import Netflixlogo from"../../asset/images/Netflixlogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function Header() {
  return (
    
    <div className='header-outer-container'>

        <div className='header-container'>
        <div className='header-left'>
<ul>
<li> <img src={Netflixlogo} alt="Netflix logo" width="100"/> </li>
<li> <a href="#">Home</a></li>
<li><a href="#">TVshow</a></li>
<li><a href="#">Movies</a></li>
<li><a href="#">Latest</a></li>
<li><a href="#">Mylist</a></li>
<li><a href="#">Browse by languages</a></li>
</ul>
</div>
         <div className='header-right'>
            <ul>
                <li><SearchIcon/></li>
                 <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownCircleIcon/></li> 
            </ul>

         </div>
        </div>
      
    </div>
  )
}

export default Header

import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import PersonIcon from '@mui/icons-material/Person';
import StickyHeadTable from './DateTime';

const HomePageData = () => {
  return (
    <>
       <div className='sidebar-div'>
           <div class="navbar">
             <a className='icons-div'> <DescriptionIcon className='Add-icon-btn'/><span>Appoinments </span></a>
             <a className='icons-div'> <FolderIcon className='Add-icon-btn'/><span>Documents </span></a>
             <a className='icons-div'><ForumRoundedIcon className='Add-icon-btn'/> <span>Messages </span></a>
             <a className='icons-div'> <MonetizationOnIcon className='Add-icon-btn'/><span>Billing </span></a>
             <a className='icons-div'> <GppGoodOutlinedIcon className='Add-icon-btn'/><span>Insurance </span></a>
             <a className='icons-div'><AccountCircleRoundedIcon className='Add-icon-btn'/><span>My Provider </span></a>
             <a className='icons-div'><SettingsRoundedIcon className='Add-icon-btn'/> <span>Settings </span></a>
            </div>
          <div class="main">
                <div className='main-div-data'>
                   <h2>Your Appoinments</h2>
                   <button className="outlined"><AddCircleRoundedIcon className='Add-icon-btn'/><span>Request Appoinments</span></button>
                </div>


                
                <div className='previous-appoinment'>
                   <div className='previous-appoinment-date'>
                    <p className='previous-appoinment-peragraph'>Previous Appoinments</p>
                       <div className='date-and-time'>
                           <span className='appoinment-with-date'>07/22/2022   |  8.00 AM - 9.00 AM</span>
                        </div>
                    
                   </div>
                   <div className='previous-appoinment-telehealt-with'>
                       <div>
                         <h6 className='telehealth-name'><VideoChatIcon className='Add-icon-btn'/><span>Telehealth</span></h6>
                         <p className='telehealth-meeting'>Zoom Meeting</p>
                       </div>
                       <div>
                         <h6  className='telehealth-name'> <PersonIcon className='Add-icon-btn'/>With</h6>
                         <p className='telehealth-meeting'>Isaac Kim</p>
                       </div>
                     
                   </div>

                </div>

                
              <StickyHeadTable/>
           </div>
      </div>
    </>
  )
}

export default HomePageData
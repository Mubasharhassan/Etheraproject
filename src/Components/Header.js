import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { HiOutlinePlusCircle } from "react-icons/hi";

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header-logout-div'>
                <img src='/images/Logopic.png' alt='my-pic' className='header-img'/>
            </div>
            <div className='header-logout-div'>
                <h4 className='logout-text'>Logout</h4>
                <AccountBoxIcon className='header-icon'/>
            </div>
        </div>
    </>
  )
}

export default Header
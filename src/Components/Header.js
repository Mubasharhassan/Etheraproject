import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <>
        <div className='header'>
            <div>
                <img src='/images/Logopic.png' alt='my-pic' className='header-img'/>
            </div>
            <div className='header-logout'>
                <h4>Logout</h4>
                <AccountBoxIcon className='header-icon'/>
            </div>
        </div>
    </>
  )
}

export default Header
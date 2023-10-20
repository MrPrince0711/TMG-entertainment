import React from 'react'
import './Contact.css'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

function Contact() {
  return (
    <div className='contact'>
        <h1>You can find us on</h1>
        <div className="social">
            <div className="social_app">
            <img src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png" alt="" className="social_icon" />
            <p className='social_handle'>: @to_make_good_entertainment</p>
            </div>

            <div className="social_app">
            <img src="https://www.svgrepo.com/show/79316/youtube.svg" alt="" className="social_icon" />
            <p className='social_handle'>: @TMG.ENTERTAINMENT3320</p>
            </div>

            <div className="social_app">
            <img src="https://www.svgrepo.com/show/137278/linkedin.svg" alt="" className="social_icon" />
            <p className='social_handle'>: To Make Good Entertainment PTY (LTD)</p>
            </div>

            <div className="social_app">
            <CallOutlinedIcon className="social_icon" />
            <p className='social_handle'>: 065 538 6539</p>
            </div>

            <div className="social_app">
            <MailOutlineOutlinedIcon className='social_icon'/>
            <p className='social_handle'>: tmg.entertainmentrsa@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
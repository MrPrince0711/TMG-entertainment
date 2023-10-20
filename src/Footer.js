import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className='foot_section'>
            <a href="https://instagram.com/to_make_good_entertainment?igshid=MmU2YjMzNjRlOQ==">
              <img src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png" alt="" className="insta" />
            </a>
            <a href="https://youtube.com/@TMG.ENTERTAINMENT3320?si=EeekFr3n3N3rHqqo">
              <img src="https://www.svgrepo.com/show/79316/youtube.svg" alt="" className="youtube" />
            </a>
            <a href="https://www.linkedin.com/company/to-make-good-entertainment-pty-ltd/">
            <img src="https://www.svgrepo.com/show/137278/linkedin.svg" alt="" className="linkedIn" />
            </a>
        </footer>
    </div>
  )
}

export default Footer
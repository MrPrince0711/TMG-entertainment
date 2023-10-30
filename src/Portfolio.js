import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './Portfolio.css'

function Portfolio() {
  return (
        <div className="portfolio">
                <div className='port_container'>
                    <ReactPlayer width='100%' className = 'video' url= 'https://youtu.be/UddMXTsSjm0?si=PLeBdeIL05nHIKbJ' />
                    <ReactPlayer width='100%' className = 'video'  url= 'https://youtu.be/94tvnBtS_N0?si=XJbbfUPzU7y3nK3w'/>
                    <ReactPlayer width='100%' className = 'video'  url= 'https://youtu.be/PVlTwRzTvXU?si=-nRpH5BUfAk_DfrN'/>
                    <ReactPlayer width='100%' className = 'video'  url= 'https://youtu.be/pqk6gBJcBwU?si=vxR8IH4Xw6oCl187'/>
                </div>
        </div>
  )
}

export default Portfolio
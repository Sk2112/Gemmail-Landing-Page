import React from 'react'
import DemoVideo from "../assets/videos/DemoVideo.mp4"
import ThumbnailImage from "../assets/images/thumbnail.png"


const Demo = () => {
  return (
    <div className='lg:mx-32 m-6 lg:flex lg:flex-row-reverse items-center backdrop-blur-2xl p-4 bg-white/20 rounded-4xl sm:flex flex-col sm:text-3xl sm:text-white/80 sm:mx-14'>
        <div className='mb-5   lg:text-5xl font-bold leading-tight sm:mx-5 sm:text-5xl'>
            <h2>See how GemMail transforms your Gmail workflow.</h2>
        </div>
<div className='m-4 border-2'>
    <video src={DemoVideo}
     controls
     autoPlay

     muted
     height={100}
     width={900}
    poster={ThumbnailImage}
    ></video>
</div>
    </div>
  )
}

export default Demo
import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className=' backdrop-blur-3xl rounded-4xl bg-white/20 mt-10 px-20 py-10 text-center text-2xl sm:w-max lg:w-auto'>
        <h2>Built with ❤️ by Sumit Kumar</h2>
        <div className='flex justify-center space-x-4 mt-3  '>
           <a href='https://github.com/Sk2112' target='_blank'> 
             <Github/>
           </a>
           <a href='https://www.linkedin.com/in/21sk12/' target='_blank'> 
             <Linkedin/>
           </a>

            
        </div>
    </div>
  )
}

export default Footer
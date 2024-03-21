import React from 'react'
import { FaGit, FaGithub, FaLinkedin } from "react-icons/fa";



const Menu =[
    {
      id:1,
      name:"Home",
      link:"/#"
    },
    {
      id:2,
      name:"Services",
      link:"/#"
    },
    {
      id:3,
      name:"About",
      link:"/#"
    },
    {
      id:4,
      name:"Contact",
      link:"/#"
    }, 
  ]


function Footer() {
  return (
    <div className="bg-[url('/images/f1.jpg')] bg-center
    bg-no-repeat bg-cover h-full w-full">
        <div className='bg-black/60 min-h-[400px]'>
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                <div className=' py-8 px-4'>
                    
                    <a className='font-semibold text-2xl md:text-3xl font-pacifiko text-light' >CoffePub </a>

                    <p className='pt-4 text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto tempore ea, illo cumque corporis expedita nulla numquam </p>


                        <a className='inline-block border-2 text-white font-poppins font-semibold bg-red-600 py-2 px-4 mt-5 text-sm rounded-full'
                         href='https://www.youtube.com/@EfeGorkemUmit'> 
                        Visit Yout Youtube Chanel
                        </a>
                </div>

                <div className='col-span-2 grid grid-cols-2 md:pl-10 sm:grid-cols-3'>

                        <div className='py-8 px-4'>
                            <h1 className='text-xl  font-semibold text-white'>Important Links</h1>
                            <ul className='space-y-3 mt-4'>
                                {Menu.map((data, index)=>(
                                    <li key={index}>
                                       <a className='inline-block text-light hover:scale-110 transition duration-500' href={data.link}>
                                       {data.name}
                                        </a> 
                                    </li>


                                ))}


                            </ul>


                        </div>

                        <div className='py-8 px-4'>
                            <h1 className='text-xl  font-semibold text-white'>Quick Links</h1>
                            <ul className='space-y-3 mt-4'>
                                {Menu.map((data, index)=>(
                                    <li key={index}>
                                       <a className='inline-block text-light hover:scale-110 transition duration-500' href={data.link}>
                                       {data.name}
                                        </a> 
                                    </li>


                                ))}


                            </ul>


                        </div>

                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                              <h1 className='text-xl  font-semibold text-white'>Adress</h1>

                                <div className='mt-4 space-y-4 text-light'>
                                    <p>Turkey Istanbul</p>
                                    <p>+90 555 444 33 22</p>


                                </div>

                                <div className='flex items-center gap-3 mt-6'>

                    <a
                  target="blank"
                  href="https://www.linkedin.com/in/burak-zafer-özcan-357439258"
                  className="text-3xl duration-300 text-light hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="blank"
                  href="https://github.com/burakzaferozcan"
                  className="text-3xl duration-300 text-light hover:scale-110"
                >
                  <FaGithub />
                </a>


                                </div>


                        </div>
                

                </div>


            </div>


        </div>
        
        
        
    </div>
  )
}

export default Footer

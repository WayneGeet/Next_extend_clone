"use client"
import Image from 'next/image';
import {useState} from "react";
import React from 'react'
import {BiMenu} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import {motion, AnimatePresence, useAnimationControls} from "framer-motion";
import Link from 'next/link';

const Navbar = () => {
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };
  
  const barVariants = {
    hidden:{scale:"0px"},
    visible:{scale:"20px", transition:{duration:1}},
    exit:{scale:"0px"}
  }
  const [isHid, setIsHid] = useState(true);
  return (
    <nav className="flex justify-center items-center fixed top-[10px] left-1/2 -translate-x-1/2 z-50 w-full
    px-10 lg:w-fit">

        <motion.div 
        style={{transformOrigin:"top"}}
        // style={{transformOrigin:"top"}}

        className="blurry nav shadow-sm shadow-gray-400 rounded-xl px-4 py-2
        flex lg:flex-row  flex-col items-start lg:items-center gap-2 lg:gap-7 w-full mx-auto">

            <div className="flex justify-between items-center w-full">
              <div className=" flex items-center gap-2">
                <div className="w-4 h-4 flex items-center">
                  {/* <Image className="object-contain" src="./logo" width={20} height={20} alt="logo" /> */}
                </div>
                <h2 className="font-bold text-sm text-black">Extend</h2>
              </div>

              <div className="lg:hidden ml-auto">
                {isHid ? 
                <div onClick={()=> setIsHid(true)
                  } className="ml-auto p-2 z-60">
                  <BiMenu size={16}/>
                </div> 
                :
                <div onClick={()=> setIsHid(false)} 
                className="ml-auto p-2 z-60">
                  <AiOutlineClose size={16}/>
                </div>}
              </div>
            </div>

            <AnimatePresence>
          {isHid && (
            <motion.ul
              key="menu"
              className="flex lg:flex-row flex-col lg:gap-7 lg:items-center gap-2"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              
            >
              <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">
                <Link href="#investors">Investors</Link>
              </li>
              <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">
                <Link href="#features">Features</Link>
              </li>
              <li className="text-gray-500 hover:text-gray-900 text-sm cursor-pointer">
                <Link href="#security">Security</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

            

            <button type="button" className="hidden lg:inline-block whitespace-nowrap text-sm bg-[#222] rounded-xl cursor-pointer px-3 py-2 text-white">Get Started</button>

        </motion.div>
    </nav>
  )
}

export default Navbar
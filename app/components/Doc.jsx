"use client"
import Image from "next/image"
import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";
// import doc from "./Doc.png"

const Doc = () => {
    const divRef = useRef()
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:["start end", "end end"]
    })

    const transformPerspective = useTransform(scrollYProgress, [0, 1], ["400px", "500px"]);
    // const originY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0.3, 1], ["7deg", "0deg"]);
    // const rotateY = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1]);


  return (
    <div className="flex justify-center container lg:-mt-[20vh] md:-mt-[10vh] pb-[10vh] max-w-screen overflow-x-hidden">

        <motion.div 
        ref={divRef}
        className=" mx-auto rounded-md overflow-hidden">
            <motion.img
            animate={{duration:1, type:"easeIn"}}
            style={{
            transformPerspective,
            transformOrigin:"center",
            // scale:"95%",
            rotateX
            // scaleY
        }} 
            className="w-full shadow-md shadow-gray-400" src="/Doc.png" alt="image" />
        </motion.div>
    </div>
  )
}

export default Doc
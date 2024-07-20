import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <h2 className="my-20 text-center text-4xl"> About 
            <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap" >
            <div className="w-full lg:w-1/2">
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="flex items-center justify-center">
                    <img src={aboutImg} className="rounded-2xl" alt="about img" />
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div className="flex justify-center lg:justify-start" whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}>
                    <p className="my-2 max-w-xl ">{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About 
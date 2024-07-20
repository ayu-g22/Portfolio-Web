import {RiReactjsLine} from 'react-icons/ri';
// import { DiNodejsSmall } from "react-icons/di";
import {SiMongodb} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';
import {BiLogoPostgresql} from 'react-icons/bi';
import {motion} from 'framer-motion';

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease: "easeInOut",
            repeat:Infinity,
            repeatType:"reverse",
            
        }
    }
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 className='my-20 text-center text-4xl' whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}  transition={{duration:1.5}}>Technologies</motion.h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-4" whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants(2.5)} initial="initial" animate="animate">
               <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants(3)} initial="initial" animate="animate">
                <FaNodeJs className='text-7xl text-green-500' />
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants(3.5)} initial="initial" animate="animate">
                <TbBrandNextjs className='text-7xl' />
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants(4)} initial="initial" animate="animate">
                <SiMongodb className='text-7xl text-green-500' />
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" variants={iconVariants(4.5)} initial="initial" animate="animate">
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies

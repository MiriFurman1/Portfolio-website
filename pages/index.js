import Image from "next/image";
import Link from "next/link";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'

import { fadeIn } from '../variants'
const Home = () => {
  return <div className="bg-primary/60 h-full">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">

        <motion.h1 className="h1" variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"> Transforming Ideas <br /> Into <span className="text-accent"> Digital Reality</span></motion.h1>
        <motion.p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-base xl:text-lg" variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden">
          Welcome to my portfolio, where creativity knows no bounds and ideas take shape in the realm of possibilities. <br /> Each project is an exploration, a testament to dedication, revealing the limitless synergy of imagination and technology.<br /> Join me on this journey to touch the sky through artistry.</motion.p>


<Link href="/projects">link!</Link>


      </div>
    </div>


    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
      </div>
      {/* particles */}
      <ParticlesContainer/>
      <div>

      </div>
      {/* Avatar image */}
      <motion.div  variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration:1,ease:'easeInOut'}} className="w-full h-full max-w-[600px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>

    </div>
  </div>;
};

export default Home;

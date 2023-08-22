import Image from "next/image";
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
        <div className=" xl:hidden relative md:flex sm:flex">
          <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>


    <div>image</div>

  </div>;
};

export default Home;

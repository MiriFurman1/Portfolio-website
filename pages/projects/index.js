import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const projects = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center '>
    <Circles/>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-x-8'>
        {/* text */}
        <div className='text-center flex flex-col  mb-4  items-center '   >
          <motion.h2 variants={fadeIn('up',0.2)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My projects <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] xl:max-w-[800px] mx-auto lg:mx-0'>Step into my world of web development where creativity meets functionality. Here, you'll discover a selection of projects that highlight my journey of mastering various technologies. 
          </motion.p>
        </div>
        {/* slider */}
        <motion.div variants={fadeIn('down',0.6)} initial="hidden" animate="show" exit="hidden" className='w-full  '>
        <WorkSlider/>
        </motion.div>

      </div>
    </div>
    <Bulb/>
  </div>;
};

export default projects;
